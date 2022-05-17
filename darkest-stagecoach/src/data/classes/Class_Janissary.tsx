import ClassMod from '../ClassMod'

export const Class_Janissary: ClassMod = {
    key: 'Class_Janissary',
    name: 'Janissary',
    description: [
        'The Janissary is a weathered soldier who made the long trek from the southeast to aid the Hamlet. He claims he was sent by his Sultan as an act of goodwill, but is there more to his story than he lets on to? However inscrutable, we know that we will not turn down help from someone who so readily masters and shares the art of war.'
    ],
    religious: false,
    transform: false,
    originalHero: false,
    synergy: new Set(['debuff', 'stress', 'buff', 'guard', 'riposte']),
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [4, 5, 3, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2377934884'
        }
    ],
    authors: [
        {
            authorKey: 'Author_Shay',
            credits: ['Design', 'Sound']
        },
        {
            authorKey: 'Author_Snorlaxxo',
            credits: ['Design', 'Scripting']
        },
        {
            authorKey: 'Author_EbonyBetty',
            credits: ['Concept']
        },
        {
            authorKey: 'Black Templar#8655',
            credits: ['Concept']
        },
        {
            authorKey: 'Author_Terkmc',
            credits: ['Art']
        },
        {
            authorKey: 'Author_54NBB',
            credits: ['Animation']
        },
        {
            authorKey: 'Author_Ruin',
            credits: ['Color Variants']
        },
        {
            authorKey: 'Author_Cat',
            credits: ['Testing', 'Writing']
        },
        {
            authorKey: 'Author_Sasiji',
            credits: ['Code Assistance']
        }
    ]
}
