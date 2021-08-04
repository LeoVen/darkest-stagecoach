import ClassMod from '../ClassMod'

export const Class_Kheir: ClassMod = {
    key: 'Class_Kheir',
    name: 'Kheir',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.1,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [3, 5, 6, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1649053641'
        }
    ]
}
