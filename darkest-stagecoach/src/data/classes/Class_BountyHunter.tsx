import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/bounty_hunter_portrait_roster.png'

export const Class_BountyHunter: ClassMod = {
    key: 'Class_BountyHunter',
    name: 'Bounty Hunter',
    description: [
        "A brutally efficient single-target executioner and crowd control specialist. For the Bounty Hunter, planning is key - mark targets for bonus damage or look for opportunities to capitalize on a stunned foe. He can also wreak havoc on an enemy party's order using his grappling hook, flashbangs and powerful uppercut."
    ],
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    classType: {
        damage: 3,
        healer: 0,
        support: 2,
        tank: 0
    },
    synergy: new Set(['mark', 'stun', 'pull', 'bleed', 'knockback', 'shuffle']),
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [5, 7, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
