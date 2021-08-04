import ClassMod from '../ClassMod'

export const Class_Ironbuddha: ClassMod = {
    key: 'Class_Ironbuddha',
    name: 'Ironbuddha',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.3,
        move: 0.5,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [4, 5, 5, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2195799077'
        }
    ]
}
