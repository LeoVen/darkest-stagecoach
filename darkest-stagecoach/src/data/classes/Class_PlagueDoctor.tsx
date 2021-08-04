import ClassMod from '../ClassMod'

export const Class_PlagueDoctor: ClassMod = {
    key: 'Class_PlagueDoctor',
    name: 'PlagueDoctor',
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [2, 4, 7, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
