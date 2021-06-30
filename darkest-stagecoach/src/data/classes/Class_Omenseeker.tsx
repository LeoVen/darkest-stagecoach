import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/omenseeker_portrait_roster.png'

export const Class_Omenseeker: ClassMod = {
    name: 'Omenseeker',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [3, 5, 7, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.1, speed: 8 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.11, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1289815222'
        }
    ]
}
