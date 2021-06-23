import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/grove_tender_portrait_roster.png'

export const Class_GroveTender: ClassMod = {
    name: 'GroveTender',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.16, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.31, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1835237651'
        }
    ]
}
