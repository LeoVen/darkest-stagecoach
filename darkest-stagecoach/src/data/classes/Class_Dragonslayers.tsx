import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/dragonslayers_portrait_roster.png'

export const Class_Dragonslayers: ClassMod = {
    name: 'Dragonslayers',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [4, 5, 4, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1209578556'
        }
    ]
}
