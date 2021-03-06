use std::fmt::Display;

#[derive(Debug, Default)]
pub struct ClassResistances {
    pub stun: f32,
    pub blight: f32,
    pub bleed: f32,
    pub disease: f32,
    pub shuffle: f32,
    pub debuff: f32,
    pub death_blow: f32,
    pub trap: f32,
}

#[derive(Debug, Default)]
pub struct ArmourStats {
    pub dodge: f32,
    pub prot: f32,
    pub hp: f32,
    pub speed: f32,
}

#[derive(Debug, Default)]
pub struct WeaponStats {
    pub accuracy: f32,
    pub damage: [f32; 2],
    pub crit: f32,
    pub speed: f32,
}

#[derive(Debug, Default)]
pub struct ClassStats {
    pub armour: [ArmourStats; 5],
    pub weapon: [WeaponStats; 5],
}

#[derive(Debug, Default)]
pub struct Launch {
    pub positions: [bool; 4],
}

#[derive(Debug, Default)]
pub struct Target {
    // TODO
    pub modifiers: String,
    pub targets: [bool; 4],
}

#[derive(Debug, Default)]
pub struct SkillInfo {
    pub name: String,
    pub img: String, // base64 encoded image
    pub launch: Launch,
    pub target: Target,
}

#[derive(Debug, Default)]
pub struct ClassInfo {
    pub key: String,
    pub name: String,
    pub original_hero: bool,

    pub res: ClassResistances,
    pub stats: ClassStats,

    pub religious: bool,
    pub transform: bool,

    pub portrait: String, // base64 encoded image
    pub guild: String,    // base64 encoded image

    pub skills: Vec<SkillInfo>,

    pub steam_id: String,

    pub armour_icons: [String; 5],
    pub weapon_icons: [String; 5],
}

impl Display for ClassResistances {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{{\n{s:<8}stun: {},\n{s:<8}blight: {},\n{s:<8}bleed: {},\n{s:<8}disease: {},\n{s:<8}move: {},\n{s:<8}debuff: {},\n{s:<8}deathBlow: {},\n{s:<8}trap: {}\n    }}",
            self.stun,self.blight, self.bleed, self.disease, self.shuffle, self.debuff, self.death_blow, self.trap, s = "")
    }
}

impl Display for ArmourStats {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{{ dodge: {}, prot: {}, hp: {}, speed: {} }}",
            self.dodge, self.prot, self.hp, self.speed
        )
    }
}

impl Display for WeaponStats {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{{ accuracy: {}, damage: {:?}, crit: {}, speed: {} }}",
            self.accuracy, self.damage, self.crit, self.speed
        )
    }
}

impl Display for ClassStats {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "[{},{},{},{},{}]\n[{},{},{},{},{}]",
            self.armour[0],
            self.armour[1],
            self.armour[2],
            self.armour[3],
            self.armour[4],
            self.weapon[0],
            self.weapon[1],
            self.weapon[2],
            self.weapon[3],
            self.weapon[4]
        )
    }
}

impl Display for SkillInfo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            r"
        {{
            name: `{}`,
            launch: {},
            target: {},
            image: `{}`,
        }}",
            self.name, self.launch, self.target, self.img,
        )
    }
}

impl Display for Launch {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "[{},{},{},{}]",
            self.positions[0], self.positions[1], self.positions[2], self.positions[3],
        )
    }
}

impl Display for Target {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            r"{{
                targets: [{},{},{},{}],
                mods: `{}`,
            }}",
            self.targets[0], self.targets[1], self.targets[2], self.targets[3], self.modifiers
        )
    }
}
