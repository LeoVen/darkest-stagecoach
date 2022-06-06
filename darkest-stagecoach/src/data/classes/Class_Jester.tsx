import ClassMod from '../ClassMod'

export const Class_Jester: ClassMod = {
    key: 'Class_Jester',
    name: 'Jester',
    description: [
        'Combat is a power ballad - a slow build up, and a grand finale! On the offense, the Jester leaps to and fro in a bloody cacophony, positioning himself for a glorious end in the front ranks! Alternatively, he can hang back, delivering chilling melodies and unsettling riffs that terrorize his foes, and give strength to his allies.',
    ],
    religious: false,
    transform: false,
    originalHero: true,
    synergy: new Set([
        'forward',
        'bleed',
        'back',
        'buff',
        'stress',
    ]),
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [2, 4, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
