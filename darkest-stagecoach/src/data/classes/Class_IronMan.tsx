import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/iron_man_portrait_roster.png'

export const Class_IronMan: ClassMod = {
    name: 'IronMan',
    portrait: portrait,
    religious: false,
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
    stats: {
        armours: [
            { dodge: 0.02, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.07, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1876423255'
        }
    ]
}
