import ClassMod from '../ClassMod'

export const Class_Arbalest: ClassMod = {
    key: 'Class_Arbalest',
    name: 'Arbalest',
    description: [
        'A runaway turned soldier, the Arbalest is the definitive backline fighter. Able to rain suppressing fire down on the enemy, snipe high profile targets and apply powerfully effective first-aid, she is a rallying point, a turret, a beacon in the dark.'
    ],
    religious: false,
    transform: false,
    originalHero: true,
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
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [2, 2, 7, 7],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
