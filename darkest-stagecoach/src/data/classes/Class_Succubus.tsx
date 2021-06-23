import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/succubus_portrait_roster.png'

export const Class_Succubus: ClassMod = {
    name: 'Succubus',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1597176026'
        }
    ]
}
