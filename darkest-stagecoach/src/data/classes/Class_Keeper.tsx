import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/keeper_portrait_roster.png'

export const Class_Keeper: ClassMod = {
    name: 'Keeper',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [4, 7, 7, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1688250816'
        }
    ]
}
