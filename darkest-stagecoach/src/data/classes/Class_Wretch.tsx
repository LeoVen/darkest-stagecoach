import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/wretch_portrait_roster.png'

export const Class_Wretch: ClassMod = {
    name: 'Wretch',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.4,
        blight: -0.6,
        bleed: 0.3,
        disease: 0.1,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    position: [5, 7, 5, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1849364138'
        }
    ]
}
