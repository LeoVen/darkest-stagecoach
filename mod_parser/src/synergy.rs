//! Synergies (`Synergy` in `src/Types.tsx`): what a class's skills do, derived
//! from the skills and the effects they apply.

use std::collections::{BTreeSet, HashMap, HashSet};

use mod_reader::types::{ClassModInfo, ModEffects};
use parser::DarkestRow;

/// In the display order of `src/Synergy.tsx`
#[derive(Clone, Copy, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum Synergy {
    Bleed,
    Blight,
    Stun,
    Buff,
    Debuff,
    Mark,
    Knockback,
    Pull,
    Shuffle,
    Heal,
    Stress,
    Horror,
    Block,
    Riposte,
    Guard,
    GuardBreak,
    Armor,
    Stealth,
    DeStealth,
    Cure,
    Clear,
    Reflect,
    Back,
    Forward,
}

impl Synergy {
    /// The name the frontend uses
    pub fn as_str(self) -> &'static str {
        match self {
            Synergy::Bleed => "bleed",
            Synergy::Blight => "blight",
            Synergy::Stun => "stun",
            Synergy::Buff => "buff",
            Synergy::Debuff => "debuff",
            Synergy::Mark => "mark",
            Synergy::Knockback => "knockback",
            Synergy::Pull => "pull",
            Synergy::Shuffle => "shuffle",
            Synergy::Heal => "heal",
            Synergy::Stress => "stress",
            Synergy::Horror => "horror",
            Synergy::Block => "block",
            Synergy::Riposte => "riposte",
            Synergy::Guard => "guard",
            Synergy::GuardBreak => "guardBreak",
            Synergy::Armor => "armor",
            Synergy::Stealth => "stealth",
            Synergy::DeStealth => "deStealth",
            Synergy::Cure => "cure",
            Synergy::Clear => "clear",
            Synergy::Reflect => "reflect",
            Synergy::Back => "back",
            Synergy::Forward => "forward",
        }
    }
}

/// Who an effect lands on. Most ally synergies ("heals allies") don't count
/// effects on the performer alone.
#[derive(Clone, Copy, PartialEq, Eq)]
enum Side {
    Performer,
    Ally,
    Enemy,
}

/// The synergies of the class's skills (all levels and modes). Effects are
/// looked up in the class's own mod first, then in `base` (the base game's),
/// since mods also apply vanilla effects.
pub fn proc_synergies(info: &ClassModInfo, base: &ModEffects) -> BTreeSet<Synergy> {
    // Only the skills the site shows (see `proc_skills`)
    let skill_ids: HashSet<&str> = info.skills.iter().map(|s| s.key.as_str()).collect();
    let mut result = BTreeSet::new();

    let skills: Vec<(&str, &DarkestRow)> = info
        .info
        .iter()
        .filter(|(key, _)| key == "combat_skill")
        .filter_map(|(_, row)| Some((first(row, "id")?, row)))
        .filter(|(id, _)| skill_ids.contains(id))
        .collect();

    // A skill can be split over several rows (e.g. per mode), and only one of
    // them has to set the target
    let mut targets: HashMap<&str, &str> = HashMap::new();
    for (id, skill) in &skills {
        if let Some(target) = first(skill, "target") {
            targets.entry(id).or_insert(target);
        }
    }

    for (id, skill) in skills {
        let side = skill_side(targets.get(id).copied());
        skill_synergies(skill, side, &mut result);

        for name in effect_names(skill) {
            let effect = info
                .effects
                .effects
                .get(name)
                .or_else(|| base.effects.get(name));
            if let Some(effect) = effect
                && let Some(effect_side) = effect_side(effect, side)
            {
                let buffs = |id: &str| {
                    info.effects
                        .buffs
                        .get(id)
                        .or_else(|| base.buffs.get(id))
                        .map(String::as_str)
                };
                effect_synergies(effect, effect_side, buffs, &mut result);
            }
        }
    }

    result
}

// `.target @23` (or `~@1234` for all of them) targets allies, an empty target
// the performer itself
fn skill_side(target: Option<&str>) -> Side {
    match target {
        Some(target) if target.contains('@') => Side::Ally,
        Some(_) => Side::Enemy,
        None => Side::Performer,
    }
}

fn effect_side(effect: &DarkestRow, skill: Side) -> Option<Side> {
    match (first(effect, "target")?, skill) {
        ("performer", _) => Some(Side::Performer),
        ("performer_group" | "performer_group_other", _) => Some(Side::Ally),
        ("target", skill) => Some(skill),
        // The group of the performer is its party
        ("target_group" | "target_group_other", Side::Performer) => Some(Side::Ally),
        ("target_group" | "target_group_other", skill) => Some(skill),
        ("target_enemy_group" | "target_enemy_rank", _) => Some(Side::Enemy),
        _ => None,
    }
}

// `.effect "A" "B"` plus mode-specific lists like `.<mode>_effects "C"`
fn effect_names(skill: &DarkestRow) -> impl Iterator<Item = &str> {
    skill
        .iter()
        .filter(|(key, _)| {
            *key == "effect" || (key.ends_with("_effects") && !key.starts_with("condensed_tooltip"))
        })
        .flat_map(|(_, names)| names.iter().map(String::as_str))
}

fn skill_synergies(skill: &DarkestRow, side: Side, result: &mut BTreeSet<Synergy>) {
    if side == Side::Ally && skill.contains_key("heal") {
        result.insert(Synergy::Heal);
    }
    if is_true(skill, "ignore_protection") {
        result.insert(Synergy::Armor);
    }
    if is_true(skill, "ignore_guard") {
        result.insert(Synergy::GuardBreak);
    }
    if is_true(skill, "ignore_stealth") {
        result.insert(Synergy::DeStealth);
    }

    // `.move <back> <forward>`
    if let Some(moves) = skill.get("move") {
        if moves.first().is_some_and(|n| number(n) > 0.0) {
            result.insert(Synergy::Back);
        }
        if moves.get(1).is_some_and(|n| number(n) > 0.0) {
            result.insert(Synergy::Forward);
        }
    }
}

fn effect_synergies<'a>(
    effect: &DarkestRow,
    side: Side,
    buffs: impl Fn(&str) -> Option<&'a str>,
    result: &mut BTreeSet<Synergy>,
) {
    let has = |key: &str| is_set(effect, key);
    let mut add = |synergy: Synergy, applies: bool| {
        if applies {
            result.insert(synergy);
        }
    };

    let buff_ids = effect
        .get("buff_ids")
        .map(Vec::as_slice)
        .unwrap_or_default();
    let reflects = buff_ids
        .iter()
        .any(|id| buffs(id) == Some("damage_reflect_percent"));
    let stats = stat_change(effect, side, !buff_ids.is_empty());

    match side {
        Side::Enemy => {
            add(Synergy::Bleed, has("dotBleed"));
            add(Synergy::Blight, has("dotPoison"));
            add(Synergy::Stun, has("stun"));
            add(Synergy::Mark, has("tag"));
            add(Synergy::Knockback, has("push"));
            add(Synergy::Pull, has("pull"));
            add(Synergy::Shuffle, has("shuffletarget") || has("dotShuffle"));
            add(Synergy::GuardBreak, has("clearguarding"));
            add(Synergy::DeStealth, has("unstealth"));
            add(
                Synergy::Debuff,
                has("debuffenemy") || stats == Some(StatChange::Negative),
            );
        }
        Side::Performer => {
            add(Synergy::Block, has("health_damage_blocks"));
            add(Synergy::Riposte, has("riposte"));
            add(Synergy::Stealth, has("stealth"));
            add(Synergy::Reflect, reflects);
        }
        Side::Ally => {
            add(
                Synergy::Heal,
                has("heal") || has("dotHpHeal") || has("heal_percent"),
            );
            add(Synergy::Stress, has("healstress"));
            add(Synergy::Horror, has("clearDotStress"));
            add(Synergy::Block, has("health_damage_blocks"));
            add(Synergy::Riposte, has("riposte"));
            add(Synergy::Guard, has("guard"));
            add(Synergy::Stealth, has("stealth"));
            add(
                Synergy::Cure,
                has("cure") || has("cure_bleed") || has("cure_poison"),
            );
            add(
                Synergy::Clear,
                has("unstun") || has("clear_debuff") || has("untag"),
            );
            add(Synergy::Reflect, reflects);
            add(Synergy::Buff, stats == Some(StatChange::Positive));
        }
    }
}

#[derive(PartialEq, Eq)]
enum StatChange {
    Positive,
    Negative,
}

/// Whether a stat-changing effect is a buff or a debuff. Inline stat changes
/// (`.combat_stat_buff 1 .attack_rating_add 10`) go by their sign. Buffs by id
/// (`.buff_ids "..."`) go by who gets them, since `.curio_result_type` is often
/// wrong (the Man-at-Arms' Command buff is "negative").
fn stat_change(effect: &DarkestRow, side: Side, has_buff_ids: bool) -> Option<StatChange> {
    if is_set(effect, "combat_stat_buff") {
        let total: f32 = effect
            .iter()
            .filter(|(key, _)| key.ends_with("_add") || key.ends_with("_multiply"))
            .filter_map(|(_, values)| values.first())
            .map(|value| number(value))
            .sum();
        if total > 0.0 {
            return Some(StatChange::Positive);
        } else if total < 0.0 {
            return Some(StatChange::Negative);
        }
    }

    if has_buff_ids {
        return match side {
            Side::Enemy => Some(StatChange::Negative),
            _ => Some(StatChange::Positive),
        };
    }

    None
}

fn first<'a>(row: &'a DarkestRow, key: &str) -> Option<&'a str> {
    row.get(key)?.first().map(String::as_str)
}

// A field like `.stun 1` or `.dotBleed 2`, but not `.stun 0`
fn is_set(row: &DarkestRow, key: &str) -> bool {
    first(row, key).is_some_and(|value| value == "true" || number(value) != 0.0)
}

fn is_true(row: &DarkestRow, key: &str) -> bool {
    first(row, key).is_some_and(|value| value.eq_ignore_ascii_case("true"))
}

// Lenient: `20%`, `-.5`, anything unparsable is 0
fn number(value: &str) -> f32 {
    value.trim_end_matches('%').parse().unwrap_or(0.0)
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use mod_reader::types::{Image, SkillData};

    use super::*;

    fn effects(lines: &str) -> ModEffects {
        let mut result = ModEffects::default();
        for (_, row) in parser::parse_darkest(lines.to_string()) {
            result
                .effects
                .insert(first(&row, "name").unwrap().to_string(), row);
        }
        result
    }

    fn synergies(skills: &str, mod_effects: &str, base: &str) -> Vec<&'static str> {
        let info = parser::parse_darkest(skills.to_string());
        let skills = info
            .iter()
            .filter_map(|(_, row)| first(row, "id"))
            .map(|id| SkillData {
                key: id.to_string(),
                name: String::new(),
                icon: String::new(),
                img: Image::new(),
            })
            .collect();
        let info = ClassModInfo {
            info,
            skills,
            effects: Arc::new(effects(mod_effects)),
            ..Default::default()
        };
        proc_synergies(&info, &effects(base))
            .into_iter()
            .map(Synergy::as_str)
            .collect()
    }

    #[test]
    fn reads_effects_by_who_they_land_on() {
        let result = synergies(
            r#"combat_skill: .id "serration" .target ~12 .move 1 0 .effect "Bleed" "Self Bleed" "Self Heal"
            combat_skill: .id "aid" .target @23 .heal 2 3 .effect "Cure""#,
            r#"effect: .name "Bleed" .target "target" .dotBleed 1
            effect: .name "Self Bleed" .target "performer" .dotPoison 1
            effect: .name "Self Heal" .target "performer" .heal 2 .riposte 1
            effect: .name "Cure" .target "target" .cure 1"#,
            "",
        );
        assert_eq!(result, ["bleed", "heal", "riposte", "cure", "back"]);
    }

    #[test]
    fn treats_area_ally_skills_as_ally_skills() {
        let result = synergies(
            r#"combat_skill: .id "bolster" .target ~@1234 .effect "Bolster""#,
            r#"effect: .name "Bolster" .target "target" .buff_ids "dodge_up""#,
            "",
        );
        assert_eq!(result, ["buff"]);
    }

    #[test]
    fn takes_the_target_from_other_rows_of_the_skill() {
        let result = synergies(
            r#"combat_skill: .id "bombard" .level 0 .target ~1234 .effect "Mark"
            combat_skill: .id "bombard" .level 0 .firing_effects "Stun""#,
            r#"effect: .name "Mark" .target "target" .tag 1
            effect: .name "Stun" .target "target" .stun 1"#,
            "",
        );
        assert_eq!(result, ["stun", "mark"]);
    }

    #[test]
    fn falls_back_to_base_game_effects() {
        let result = synergies(
            r#"combat_skill: .id "smite" .target 12 .effect "Stun 1" "Weak""#,
            r#"effect: .name "Weak" .target "target" .combat_stat_buff 1 .attack_rating_add -10%"#,
            r#"effect: .name "Stun 1" .target "target" .stun 1"#,
        );
        assert_eq!(result, ["stun", "debuff"]);
    }
}
