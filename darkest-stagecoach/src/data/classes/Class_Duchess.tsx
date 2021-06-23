import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/duchess_portrait_roster.png'

export const Class_Duchess: ClassMod = {
    name: 'Duchess',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.4,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 59, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1744414212'
        }
    ]
}
