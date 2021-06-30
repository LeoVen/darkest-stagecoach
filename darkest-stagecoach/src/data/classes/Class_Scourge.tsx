import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/scourge_portrait_roster.png'

export const Class_Scourge: ClassMod = {
    name: 'Scourge',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.6,
        blight: 0,
        bleed: 0.2,
        disease: 0.6,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [7, 7, 1, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.03, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.025, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.035, speed: 7 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=947715735'
        }
    ]
}
