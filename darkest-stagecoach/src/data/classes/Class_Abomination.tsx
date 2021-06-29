import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/abomination_portrait_roster.png'

export const Class_Abomination: ClassMod = {
    name: 'Abomination',
    portrait: portrait,
    religious: false,
    transform: true,
    originalHero: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 7, 5, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
