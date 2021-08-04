import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/jester_portrait_roster.png'

export const Class_Jester: ClassMod = {
    key: 'Class_Jester',
    name: 'Jester',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [2, 4, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
