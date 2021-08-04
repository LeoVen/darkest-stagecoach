import ClassMod from '../ClassMod'

export const Class_Exorcist: ClassMod = {
    key: 'Class_Exorcist',
    name: 'Exorcist',
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.1,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 6, 6, 5],
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
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1607991008'
        }
    ]
}
