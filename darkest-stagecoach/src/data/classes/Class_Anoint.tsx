import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/anoint_portrait_roster.png'

export const Class_Anoint: ClassMod = {
    name: 'Anoint',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.6,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.2,
        move: 0.1,
        debuff: 0.6,
        deathBlow: 0.7,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.01, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.05, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2378584809'
        }
    ]
}
