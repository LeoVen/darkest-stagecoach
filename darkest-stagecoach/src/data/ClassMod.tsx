import {
    ArmourStats,
    ClassModType,
    ClassModTypeValue,
    Credits,
    GearStats,
    OriginalHeroes,
    PreferredPositions,
    Resistances,
    Skill,
    Synergy,
    WeaponStats,
} from '../Types'

export default interface ClassMod {
    key: string
    name: string
    resistances: Resistances
    stats: GearStats
    sources: {
        name: string
        link: string
    }[]
    originalHero: boolean
    description?: string[]
    similarity?: OriginalHeroes
    religious?: boolean
    transform?: boolean
    classType?: Record<ClassModType, ClassModTypeValue>
    synergy?: Set<Synergy>
    position?: PreferredPositions
    totalSkills?: number
    authors?: {
        authorKey: string
        credits: Credits
    }[]
}

// Creates a ClassMod that has the minimum required values
export const defaultClassMod = (): ClassMod => {
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
        sources: []
    }
}

export interface ClassModData {
    key: string
    name: string
    originalHero: boolean
    religious: boolean
    transform: boolean
    resistances: Resistances
    stats: GearStats
    sources: {
        name: string
        link: string
    }[]
    skills: Skill[]
    portrait: string
    guild: string
}

// Creates a ClassMod that has the minimum required values
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
        guild: '',
    }
}
