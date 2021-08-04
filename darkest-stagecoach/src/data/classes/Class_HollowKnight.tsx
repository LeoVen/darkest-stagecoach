import ClassMod from '../ClassMod'

export const Class_HollowKnight: ClassMod = {
    key: 'Class_HollowKnight',
    name: 'HollowKnight',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.55,
        blight: 0.1,
        bleed: 2,
        disease: 0.55,
        move: 0.6,
        debuff: 0.45,
        deathBlow: 0.6,
        trap: 0
    },
    position: [6, 5, 3, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.075, prot: 0.025, hp: 35, speed: 1 },
            { dodge: 0.125, prot: 0.05, hp: 40, speed: 1 },
            { dodge: 0.175, prot: 0.075, hp: 45, speed: 1 },
            { dodge: 0.2, prot: 0.1, hp: 50, speed: 2 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 17.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [11.0, 19.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1658595868'
        }
    ]
}
