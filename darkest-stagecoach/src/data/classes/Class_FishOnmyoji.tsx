import ClassMod from '../ClassMod'

export const Class_FishOnmyoji: ClassMod = {
    key: 'Class_FishOnmyoji',
    name: 'FishOnmyoji',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.25,
        bleed: 0.3,
        disease: 0.3,
        move: 0.25,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [3, 6, 6, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2203158200'
        }
    ]
}
