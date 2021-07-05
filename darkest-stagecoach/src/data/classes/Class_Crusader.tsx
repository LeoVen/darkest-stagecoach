import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/crusader_portrait_roster.png'

export const Class_Crusader: ClassMod = {
    name: 'Crusader',
    description: [
        'Battle-hardened and stalwart, the Crusader has held the front lines in a hundred holy wars. He either attacks foes head-on with righteous fury, or embraces a melee support role by leveraging his powerful defensive buffs & off-heals.'
    ],
    portrait: portrait,
    religious: true,
    transform: false,
    originalHero: true,
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
    position: [6, 6, 3, 3],
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
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.07, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
