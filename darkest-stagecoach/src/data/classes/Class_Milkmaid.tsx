import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/milkmaid_portrait_roster.png'

export const Class_Milkmaid: ClassMod = {
    name: 'Milkmaid',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 3,
        disease: 0,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2389396590'
        }
    ]
}
