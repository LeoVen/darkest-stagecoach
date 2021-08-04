import ClassMod from '../ClassMod'

export const Class_Witcher: ClassMod = {
    key: 'Class_Witcher',
    name: 'Witcher',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.8,
        bleed: 0.3,
        disease: 3,
        move: 0.4,
        debuff: 0.6,
        deathBlow: 0.75,
        trap: 0.5
    },
    position: [7, 7, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 9 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 10 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 11 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 12 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=967618008'
        }
    ]
}
