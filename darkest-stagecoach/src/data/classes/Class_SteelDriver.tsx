import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/steel_driver_portrait_roster.png'

export const Class_SteelDriver: ClassMod = {
    name: 'SteelDriver',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.2,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [6, 6, 5, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.02, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.07, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 51, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 15.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 19.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1999848432'
        }
    ]
}
