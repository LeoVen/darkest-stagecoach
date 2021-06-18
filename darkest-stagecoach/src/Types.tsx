export type Credits = Array<
    | 'All'
    | 'Animation'
    | 'Art'
    | 'Concept'
    | 'Design'
    | 'Scripting'
    | 'Sound'
    | 'Testing'
    | 'Trailer'
    | 'Writing'
    | string
>

export type Resistances = {
    stun: number
    blight: number
    bleed: number
    disease: number
    move: number
    debuff: number
    deathBlow: number
    trap: number
}

export type GearStats = {
    armours: [ArmourStats, ArmourStats, ArmourStats, ArmourStats, ArmourStats]
    weapons: [WeaponStats, WeaponStats, WeaponStats, WeaponStats, WeaponStats]
}

export type ArmourStats = {
    dodge: number
    prot: number
    hp: number
    speed: number
}

export type WeaponStats = {
    accuracy: number
    damage: [number, number]
    crit: number
    speed: number
}

export type ResistancesNames =
    | 'stun'
    | 'blight'
    | 'bleed'
    | 'disease'
    | 'move'
    | 'debuff'
    | 'deathBlow'
    | 'trap'

export type StatsNames =
    | 'maxHp'
    | 'dodge'
    | 'prot'
    | 'speed'
    | 'accuracy'
    | 'crit'
    | 'damage'

export type OriginalHeroes =
    | 'Abomination'
    | 'Antiquarian'
    | 'Arbalest'
    | 'Bounty Hunter'
    | 'Crusader'
    | 'Flagellant'
    | 'Grave Robber'
    | 'Hellion'
    | 'Highwayman'
    | 'Houndmaster'
    | 'Jester'
    | 'Leper'
    | 'Man-at-Arms'
    | 'Musketeer'
    | 'Occultist'
    | 'Plague Doctor'
    | 'Shieldbreaker'
    | 'Vestal'

export type ClassModFilter = {
    religious?: boolean
    baseStats?: {
        levelReference?: number
        maxHp?: [number, number]
        dodge?: [number, number]
        prot?: [number, number]
        speed?: [number, number]
        accuracy?: [number, number]
        crit?: [number, number]
        damage?: [number, number]
    }
}

export type SortingKeys = 'name' | StatsNames | ResistancesNames

export type SortBy = {
    key: SortingKeys
    sortDirection: number
    levelRef: number
}
