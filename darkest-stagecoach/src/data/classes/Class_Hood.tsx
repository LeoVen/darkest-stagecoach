import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/hood_portrait_roster.png'

export const Class_Hood: ClassMod = {
    name: 'Hood',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.3,
        disease: 0.3,
        move: -0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 6, 5, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.2, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.39, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.45, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [3.0, 4.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.015, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.015, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1157520643'
        }
    ]
}
