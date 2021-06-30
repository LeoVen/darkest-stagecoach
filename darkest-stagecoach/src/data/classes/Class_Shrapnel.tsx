import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/shrapnel_portrait_roster.png'

export const Class_Shrapnel: ClassMod = {
    name: 'Shrapnel',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.6,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: -0.5
    },
    position: [3, 3, 3, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [11.0, 15.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1203645088'
        }
    ]
}
