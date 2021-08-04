import ClassMod from '../ClassMod'

export const Class_Tifa: ClassMod = {
    key: 'Class_Tifa',
    name: 'Tifa',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [4, 7, 5, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1133384392'
        }
    ]
}
