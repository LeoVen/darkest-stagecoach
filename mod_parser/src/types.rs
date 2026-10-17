use mod_reader::types::Image;

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
    pub img: Image,
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

    pub portrait: Image,

    pub skills: Vec<SkillInfo>,

    pub steam_id: String,

    pub armour_icons: [Image; 5],
    pub weapon_icons: [Image; 5],
}
