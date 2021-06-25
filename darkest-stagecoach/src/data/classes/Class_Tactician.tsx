import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/tactician_portrait_roster.png'

export const Class_Tactician: ClassMod = {
    name: 'Tactician',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [8, 8, 7, 6],
    totalSkills: 8,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1265562734'
        }
    ]
}
