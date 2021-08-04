import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/prince_portrait_roster.png'

export const Class_Prince: ClassMod = {
    key: 'Class_Prince',
    name: 'Prince',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [6, 7, 4, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2146660621'
        }
    ]
}
