import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/revenant_portrait_roster.png'
import { Author_Exaelus } from '../authors/Author_Exaelus'

export const Class_Revenant: ClassMod = {
    key: 'Class_Revenant',
    name: 'Revenant',
    description: [
        'The Revenant is primarly a tank that is capable of doing really decent damage once his enemies start to bleed. He can heal and transfer all bleeds from all enemies to a single target. He also provides a skeleton key when embarking on a mission.'
    ],
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [7, 7, 2, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.025, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.035, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=913178378'
        }
    ],
    authors: [
        {
            author: Author_Exaelus,
            credits: ['All']
        }
    ]
}
