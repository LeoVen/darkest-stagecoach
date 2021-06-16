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
pub struct WeaponStats {
    pub accuracy: f32,
    pub damage: [f32; 2],
    pub crit: f32,
    pub speed: f32,
}

#[derive(Debug, Default)]
pub struct ArmourStats {
    pub dodge: f32,
    pub prot: f32,
    pub hp: f32,
    pub speed: f32,
}

#[derive(Debug, Default)]
pub struct ClassStats {
    pub weapon: [WeaponStats; 5],
    pub armour: [ArmourStats; 5],
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
    pub res: ClassResistances,
    pub stats: ClassStats,
}
