import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/deovolente_portrait_roster.png'

export const Class_Deovolente: ClassMod = {
    name: 'Deovolente',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.6,
        blight: 0.2,
        bleed: 0.2,
        disease: 1,
        move: 0.5,
        debuff: 0.8,
        deathBlow: 0.5,
        trap: 1
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.4, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 7.0], crit: 0.06, speed: 12 },
            { accuracy: 0, damage: [2.0, 8.0], crit: 0.07, speed: 13 },
            { accuracy: 0, damage: [3.0, 9.0], crit: 0.08, speed: 14 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.09, speed: 15 },
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.1, speed: 16 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2200558948'
        }
    ]
}
