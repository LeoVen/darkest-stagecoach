import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/man_at_arms_portrait_roster.png'

export const Class_ManAtArms: ClassMod = {
    key: 'Class_ManAtArms',
    name: 'ManAtArms',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [7, 7, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
