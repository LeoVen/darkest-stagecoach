import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/vamp_portrait_roster.png'

export const Class_Vamp: ClassMod = {
    name: 'Vamp',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.8,
        trap: 0.1
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
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.08, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=841088387'
        }
    ]
}
