import ClassMod from '../ClassMod'

export const Class_GraveRobber: ClassMod = {
    key: 'Class_GraveRobber',
    name: 'Grave Robber',
    description: [
        "The Grave Robber is a versatile and nimble combatant, moving back and forth through the ranks with ease. She strikes without warning and retreats to the shadows, continuing her assault at range. If her throwing daggers and poison darts aren't getting the job done, she can return to the melee, buffed and slinging her pickaxe!"
    ],
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    position: [3, 6, 6, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
