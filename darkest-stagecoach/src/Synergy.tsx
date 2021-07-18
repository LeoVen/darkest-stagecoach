import { Synergy } from './Types'

export const synergies: Synergy[] = [
    'bleed',
    'blight',
    'cure',
    'heal',
    'stress',
    'buff',
    'debuff',
    'block',
    'guard',
    'guardBreak',
    'stun',
    'mark',
    'riposte',
    'reflect',
    'stealth',
    'deStealth',
    'knockback',
    'pull',
    'shuffle',
    'forward',
    'back'
]

const synergyOrder: Map<Synergy, number> = new Map(
    synergies.map((v, i) => [v, i])
)

export const sortSynergies = (synergies: Set<Synergy>): Synergy[] => {
    let result = Array.from(synergies)
    result.sort(
        (a, b) =>
            (synergyOrder.get(a) as number) - (synergyOrder.get(b) as number)
    )
    return result
}
