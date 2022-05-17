import ClassMod from '../ClassMod'

export const Class_Commandant: ClassMod = {
    key: 'Class_Commandant',
    name: 'Commandant',
    description: [
        'The Commandant is a veteran of a thousand battles. From the trenches to the brutal urban cities, he has seen the best and the worst that war has to offer, accumulating medals and scars to prove it. Now, empowered by war itself and with the power to shape the very blood soaked soil of the battlefield, he has come to the Hamlet, seeking rumors even greater sources of power to harness and serve his country.'
    ],
    religious: false,
    transform: false,
    originalHero: false,
    synergy: new Set([
        'buff',
        'mark',
        'reflect',
        'debuff',
        'guardBreak',
        'bleed',
        'knockback',
        'pull',
        'stun',
        'deStealth'
    ]),
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [4, 7, 7, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    authors: [
        {
            authorKey: 'Author_Terkmc',
            credits: ['Concept', 'Art', 'Design', 'Sound']
        },
        {
            authorKey: 'Author_Cryptix',
            credits: ['Scripting']
        },
        {
            authorKey: 'Author_VoidSlime',
            credits: ['Scripting']
        },
        {
            authorKey: 'Author_54NBB',
            credits: ['Animation']
        }
    ]
}
