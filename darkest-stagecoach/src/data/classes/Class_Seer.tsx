import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/seer_portrait_roster.png'

export const Class_Seer: ClassMod = {
    name: 'Seer',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.6,
        move: 0.3,
        debuff: 0.7,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [1, 2, 7, 7],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=934967620'
        }
    ]
}
