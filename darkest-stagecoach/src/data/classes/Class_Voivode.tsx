import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/voivode_portrait_roster.png'

export const Class_Voivode: ClassMod = {
    name: 'Voivode',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.5,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: -0.6
    },
    position: [4, 6, 6, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 12.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1533032528'
        }
    ]
}
