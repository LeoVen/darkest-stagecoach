import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/janissary_portrait_roster.png'
import { Author_Shay } from '../authors/Author_Shay'
import { Author_Snorlaxxo } from '../authors/Author_Snorlaxxo'
import { Author_EbonyBetty } from '../authors/Author_EbonyBetty'
import { Author_Terkmc } from '../authors/Author_Terkmc'
import { Author_54NBB } from '../authors/Author_54NBB'
import { Author_Ruin } from '../authors/Author_Ruin'
import { Author_Cat } from '../authors/Author_Cat'
import { Author_Sasiji } from '../authors/Author_Sasiji'

export const Class_Janissary: ClassMod = {
    key: 'Class_Janissary',
    name: 'Janissary',
    description: [
        'The Janissary is a weathered soldier who made the long trek from the southeast to aid the Hamlet. He claims he was sent by his Sultan as an act of goodwill, but is there more to his story than he lets on to? However inscrutable, we know that we will not turn down help from someone who so readily masters and shares the art of war.'
    ],
    portrait: portrait,
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
            author: Author_Shay,
            credits: ['Design', 'Sound']
        },
        {
            author: Author_Snorlaxxo,
            credits: ['Design', 'Scripting']
        },
        {
            author: Author_EbonyBetty,
            credits: ['Concept']
        },
        {
            author: { name: 'Black Templar#8655', links: [] },
            credits: ['Concept']
        },
        {
            author: Author_Terkmc,
            credits: ['Art']
        },
        {
            author: Author_54NBB,
            credits: ['Animation']
        },
        {
            author: Author_Ruin,
            credits: ['Color Variants']
        },
        {
            author: Author_Cat,
            credits: ['Testing', 'Writing']
        },
        {
            author: Author_Sasiji,
            credits: ['Code Assistance']
        }
    ]
}
