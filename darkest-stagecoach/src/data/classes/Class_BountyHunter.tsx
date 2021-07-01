import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/bounty_hunter_portrait_roster.png'

export const Class_BountyHunter: ClassMod = {
    name: 'BountyHunter',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    synergy: ['mark', 'stun', 'pull', 'bleed', 'knockback', 'shuffle'],
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
