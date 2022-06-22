import { ClassModInfo } from '../ClassMod'

export const Class_musketeer1: ClassModInfo = {
    description: [
        'A competitive sharpshooter with little practical experience, the Musketeer excels when enemies remain at a distance. Her unerring eye and practiced reloading makes a dependable damage dealer, and her smokescreen, first aid, and skeet shot provide some supportive utility to the party.'
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
