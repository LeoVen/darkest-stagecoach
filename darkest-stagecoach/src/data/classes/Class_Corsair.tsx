import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/corsair_portrait_roster.png'

export const Class_Corsair: ClassMod = {
    name: 'Corsair',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.4,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2363386707'
        }
    ]
}
