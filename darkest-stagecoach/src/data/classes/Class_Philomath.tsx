import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/philomath_portrait_roster.png'

export const Class_Philomath: ClassMod = {
    name: 'Philomath',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.25,
        bleed: 0.25,
        disease: 0.3,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.5
    },
    position: [3, 6, 6, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.1, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.11, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.12, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.13, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.14, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2318789444'
        }
    ]
}
