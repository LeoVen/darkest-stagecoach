import ClassMod from '../ClassMod'

export const Class_SnakeCharmer: ClassMod = {
    key: 'Class_SnakeCharmer',
    name: 'SnakeCharmer',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [4, 5, 6, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [3.0, 9.0], crit: 0.1, speed: 4 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.11, speed: 5 },
            { accuracy: 0, damage: [4.0, 12.0], crit: 0.12, speed: 5 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.13, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1456853110'
        }
    ]
}
