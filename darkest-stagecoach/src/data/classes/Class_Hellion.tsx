import ClassMod from '../ClassMod'

export const Class_Hellion: ClassMod = {
    key: 'Class_Hellion',
    name: 'Hellion',
    description: [
        'Wild, unpredictable, and utterly ruthless, the Hellion thrills to the spilling of blood! Her massive glaive affords her impressive reach in combat, while its razor sharp edge leaves lasting wounds on enemies. Versatile and unrelenting, she can hit the back row with her blade and devastate her foes. Certain skills leave her exhausted, however, and she may occasionally need to take a turn to recharge her adrenaline before entering the fray once.'
    ],
    religious: false,
    transform: false,
    originalHero: true,
    synergy: new Set([
        'stun',
        'bleed',
        'forward',
    ]),
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [6, 5, 3, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
