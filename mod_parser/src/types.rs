use std::fmt::Display;
use std::path::PathBuf;

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
    pub targets: [bool; 4],
}

#[derive(Debug, Default)]
pub struct Target {
    pub modifiers: Vec<char>,
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
    pub failed: bool,
    pub steam_id: String,
    pub name: String,
    pub info_name: String,
    pub info_path: PathBuf,
    pub image_name: String,
    pub image_path: PathBuf,
    pub pos: [u8; 4],
    pub total_skills: u8,

    pub skills: Vec<SkillInfo>,

    // Done parsing
    pub key: String,
    pub res: ClassResistances,
    pub stats: ClassStats,

    pub religious: bool,
    pub transform: bool,

    pub portrait: String, // base64 encoded image
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
