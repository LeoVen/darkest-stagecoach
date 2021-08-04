import ClassMod from '../ClassMod'

export const Class_Commissar: ClassMod = {
    key: 'Class_Commissar',
    name: 'Commissar',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [4, 7, 7, 7],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=955795133'
        }
    ]
}
