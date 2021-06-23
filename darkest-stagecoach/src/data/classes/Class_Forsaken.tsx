import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/forsaken_portrait_roster.png'

export const Class_Forsaken: ClassMod = {
    name: 'Forsaken',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.8,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.08, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1319608418'
        }
    ]
}
