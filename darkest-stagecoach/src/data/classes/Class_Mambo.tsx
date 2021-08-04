import ClassMod from '../ClassMod'

export const Class_Mambo: ClassMod = {
    key: 'Class_Mambo',
    name: 'Mambo',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [2, 7, 7, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.01, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.19, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1865154690'
        }
    ]
}
