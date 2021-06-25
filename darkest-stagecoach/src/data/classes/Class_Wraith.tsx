import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/wraith_portrait_roster.png'

export const Class_Wraith: ClassMod = {
    name: 'Wraith',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.6,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.76,
        trap: 0.3
    },
    position: [5, 5, 6, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.09, speed: 5 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.1, speed: 6 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.11, speed: 6 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.12, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1441036778'
        }
    ]
}
