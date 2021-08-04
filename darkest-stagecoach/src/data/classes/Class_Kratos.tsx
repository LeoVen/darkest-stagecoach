import ClassMod from '../ClassMod'

export const Class_Kratos: ClassMod = {
    key: 'Class_Kratos',
    name: 'Kratos',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 7, 6, 4],
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
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1946681830'
        }
    ]
}
