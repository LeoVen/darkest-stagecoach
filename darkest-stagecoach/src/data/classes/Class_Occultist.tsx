import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/occultist_portrait_roster.png'

export const Class_Occultist: ClassMod = {
    key: 'Class_Occultist',
    name: 'Occultist',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 6, 6, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
