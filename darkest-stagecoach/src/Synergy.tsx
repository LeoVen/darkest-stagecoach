import { Synergy } from './Types'

export const Synergies: Synergy[] = [
    'bleed', // Causes dot bleed
    'blight', // Causes dot blight
    'stun', // Stuns enemy
    'buff', // Buffs ally
    'debuff', // Debuffs enemy
    'mark', // Marks enemy
    'knockback', // Move enemy back
    'pull', // Move enemy forward
    'shuffle', // Shuffles enemy
    'heal', // Heal ally or adds restoration
    'stress', // Stress heal ally
    'horror', // Cure horror from ally
    'block', // Gives block
    'riposte', // Activates riposte
    'guard', // Guards ally
    'guardBreak', // Breaks enemy guard
    'armor', // Armor piercing
    'stealth', // Activates stealth
    'deStealth', // Bypass or de-stealth enemy
    'cure', // Cure blight/bleed
    'clear', // Clear stun/debuff/mark
    'reflect', // Adds damage reflection
    'back', // Moves selfback
    'forward', // Moves self forward
]

const synergyOrder: Map<Synergy, number> = new Map(
    Synergies.map((v, i) => [v, i])
)

export const sortSynergies = (synergies: Set<Synergy>): Synergy[] => {
    let result = Array.from(synergies)
    result.sort(
        (a, b) =>
            (synergyOrder.get(a) as number) - (synergyOrder.get(b) as number)
    )
    return result
}
