import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/thorn_portrait_roster.png'

export const Class_Thorn: ClassMod = {
    name: 'Thorn',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: -0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 6 },
            { accuracy: 0.05, damage: [8.0, 13.0], crit: 0.03, speed: 6 },
            { accuracy: 0.1, damage: [9.0, 14.0], crit: 0.04, speed: 7 },
            { accuracy: 0.15, damage: [10.0, 16.0], crit: 0.05, speed: 7 },
            { accuracy: 0.2, damage: [11.0, 17.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1785514611'
        }
    ]
}
