import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/siexiled_portrait_roster.png'

export const Class_Siexiled: ClassMod = {
    name: 'Siexiled',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [6, 6, 5, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2101866853'
        }
    ]
}
