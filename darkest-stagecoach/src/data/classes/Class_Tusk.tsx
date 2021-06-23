import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/tusk_portrait_roster.png'

export const Class_Tusk: ClassMod = {
    name: 'Tusk',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.6,
        move: 0.4,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1123633838'
        }
    ]
}
