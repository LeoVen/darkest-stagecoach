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

export type FilterBy = {
    name: string
    religious?: boolean
    transform?: boolean
    originalHero?: boolean
    synergies: Map<Synergy, boolean>
}

export type SortingKeys = 'name' | StatsNames | ResistancesNames

export type SortBy = {
    key: SortingKeys
    sortDirection: number
    levelRef: number
}

export type PreferredPositions = [number, number, number, number]

export type Synergy =
    | 'bleed' // Causes dot bleed
    | 'blight' // Causes dot blight
    | 'stun' // Stuns enemy
    | 'buff' // Buffs ally
    | 'debuff' // Debuffs enemy
    | 'mark' // Marks enemy
    | 'move' // Move enemy (push/pull/shuffle)
    | 'heal' // Heal ally or adds restoration
    | 'stress' // Stress heal ally or cure horor
    | 'block' // Gives block
    | 'riposte' // Activates riposte
    | 'guard' // Guards ally
    | 'guardBreak' // Breaks enemy guard
    | 'stealth' // Activates stealth
    | 'deStealth' // Bypass or de-stealth enemy
    | 'cure' // Cure blight/bleed
    | 'reflect' // Adds damage reflection
    | 'moveSelf' // Moves self

export type ClassModType =
    | 'tank' // How good this class is at tanking damage
    | 'support' // How good this class is at buffing, debuffing and stunning
    | 'healer' // How good this class is at healing HP and stress
    | 'damage' // How good this class is at dealing damage

export type ClassModTypeValue =
    | 0 // None
    | 1 // Bad
    | 2 // Ok
    | 3 // Good

export type ProfileType = 'transform' | 'religious'
