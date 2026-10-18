import {
    ArmourStats,
    ClassModType,
    ClassModTypeValue,
    Credits,
    EquipIcons,
    GearStats,
    OriginalHeroes,
    Resistances,
    Skill,
    Synergy,
    WeaponStats,
} from '../Types'

export default interface ClassMod {
    info: ClassModInfo
    data: ClassModData
    // The hand-written info.synergy if any, otherwise the generated ones
    synergies: Set<Synergy>
}

export interface ClassModInfo {
    description?: string[]
    similarity?: OriginalHeroes
    classType?: Record<ClassModType, ClassModTypeValue>
    synergy?: Set<Synergy>
    authors?: {
        authorKey: string
        credits: Credits
    }[]
    sources?: {
        name: string
        link: string
    }[]
}

export interface ClassModData {
    key: string
    name: string
    originalHero: boolean
    religious: boolean
    transform: boolean
    synergies: Synergy[] // derived from the skills' effects
    resistances: Resistances
    stats: GearStats
    sources: {
        name: string
        link: string
    }[]
    // Who uploaded the workshop mod (from mods.json), if known
    uploader?: {
        name: string
        link: string // Steam profile
    }
    skills: Skill[]
    portrait: string // path relative to the public folder
    equip: EquipIcons
}

// Creates a ClassMod that has the minimum required values
export const defaultClassMod = (): ClassMod => {
    return {
        data: defaultClassModData(),
        info: defaultClassModInfo(),
        synergies: new Set(),
    }
}

// Creates a ClassModInfo that has the minimum required values
export const defaultClassModInfo = (): ClassModInfo => {
    return {}
}

// Creates a ClassModData that has the minimum required values
export const defaultClassModData = (): ClassModData => {
    let armour: ArmourStats = {
        dodge: 0,
        prot: 0,
        hp: 0,
        speed: 0
    }
    let weapon: WeaponStats = {
        accuracy: 0,
        damage: [0, 0],
        crit: 0,
        speed: 0
    }
    return {
        key: '',
        name: '',
        originalHero: false,
        religious: false,
        transform: false,
        synergies: [],
        resistances: {
            stun: 0,
            blight: 0,
            bleed: 0,
            disease: 0,
            move: 0,
            debuff: 0,
            deathBlow: 0,
            trap: 0
        },
        stats: {
            armours: [armour, armour, armour, armour, armour],
            weapons: [weapon, weapon, weapon, weapon, weapon]
        },
        sources: [],
        skills: [],
        portrait: '',
        equip: {
            armour: ['', '', '', '', ''],
            weapon: ['', '', '', '', ''],
        }
    }
}
