import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/lamia_portrait_roster.png'
import { Author_MarvinSeo } from '../authors/Author_MarvinSeo'

export const Class_Lamia: ClassMod = {
    name: 'Lamia',
    description: ['Beauty is remembered forever...'],
    portrait: portrait,
    religious: false,
    transform: true,
    originalHero: false,
    classType: {
        damage: 2,
        healer: 3,
        support: 1,
        tank: 0
    },
    synergy: [
        'heal',
        'stress',
        'debuff',
        'shuffle',
        'cure',
        'guardBreak',
        'blight',
        'stun',
        'forward',
        'back'
    ],
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [3, 4, 7, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        },
        {
            name: 'Nexus',
            link: 'https://www.nexusmods.com/darkestdungeon/mods/501'
        }
    ],
    authors: [
        {
            author: Author_MarvinSeo,
            credits: ['All']
        }
    ]
}
