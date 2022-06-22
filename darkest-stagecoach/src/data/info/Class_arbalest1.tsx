import { ClassModInfo } from '../ClassMod'

export const Class_arbalest1: ClassModInfo = {
    description: [
        'A runaway turned soldier, the Arbalest is the definitive backline fighter. Able to rain suppressing fire down on the enemy, snipe high profile targets and apply powerfully effective first-aid, she is a rallying point, a turret, a beacon in the dark.'
    ],
    classType: {
        damage: 3,
        healer: 1,
        support: 1,
        tank: 0
    },
    synergy: new Set([
        'mark',
        'debuff',
        'knockback',
        'heal',
        'deStealth',
        'clear'
    ]),
}
