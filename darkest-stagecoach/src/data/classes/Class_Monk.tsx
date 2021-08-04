import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/monk_portrait_roster.png'

export const Class_Monk: ClassMod = {
    key: 'Class_Monk',
    name: 'Monk',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [6, 7, 5, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0.1, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0.1, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0.1, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.01, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 8 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1442225067'
        }
    ]
}
