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

export type ResistancesIcon =
    | 'stun'
    | 'blight'
    | 'bleed'
    | 'disease'
    | 'move'
    | 'debuff'
    | 'deathBlow'
    | 'trap'

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

export type StatIcon =
    | 'bleed'
    | 'blight'
    | 'breakGuard'
    | 'buff'
    | 'buffPlus'
    | 'debuff'
    | 'debuffPlus'
    | 'guard'
    | 'mark'
    | 'move'
    | 'restoration'
    | 'riposte'
    | 'stealth'
    | 'stress'
    | 'stun'

export type Synergy = {
    name:
        | 'Bleed'
        | 'Blight'
        | 'Stun'
        | 'Buff'
        | 'Debuff'
        | 'Guard'
        | 'Riposte'
        | 'Healing'
        | 'Stress Healing'
        | 'Stealth'
        | string
    icon: StatIcon
}

export type StatusEffect =
    | 'Bleed'
    | 'Blight'
    | 'Stun'
    | 'Debuff'
    | 'Mark'
    | 'Move'
    | 'Buff'
    | 'Guard'
    | 'Riposte'
    | 'Restoration'
    | 'Aegis'
    | 'Break Guard'
    | 'Armor Piercing'
    | 'Bypass Guard'
    | 'Add Stealth'
    | 'Bypass Stealth'
    | 'Transfer Blight'
    | 'Transfer Bleed'

export type BonusDamage =
    | 'Bleed'
    | 'Blight'
    | 'Mark'
    | 'Stun'
    | 'Buff'
    | 'Debuff'
