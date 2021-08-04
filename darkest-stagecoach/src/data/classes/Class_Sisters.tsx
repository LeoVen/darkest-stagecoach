import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/sisters_portrait_roster.png'

export const Class_Sisters: ClassMod = {
    key: 'Class_Sisters',
    name: 'Sisters',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [5, 7, 6, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1440822424'
        }
    ]
}
