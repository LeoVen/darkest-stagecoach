import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/harbinger_portrait_roster.png'

export const Class_Harbinger: ClassMod = {
    key: 'Class_Harbinger',
    name: 'Harbinger',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [7, 7, 4, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.045, speed: 2 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.055, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1138503289'
        }
    ]
}
