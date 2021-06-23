import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/2andb_portrait_roster.png'

export const Class_2andb: ClassMod = {
    name: '2andb',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.4,
        disease: 0.5,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.055, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.065, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.075, speed: 7 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.085, speed: 7 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1483514982'
        }
    ]
}
