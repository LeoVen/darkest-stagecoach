import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/seraph_portrait_roster.png'

export const Class_Seraph: ClassMod = {
    name: 'Seraph',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [7, 7, 5, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1221097087'
        }
    ]
}
