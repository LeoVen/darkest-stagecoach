import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/ushiro_portrait_roster.png'

export const Class_Ushiro: ClassMod = {
    name: 'Ushiro',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.2,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [7, 7, 3, 3],
    totalSkills: 8,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2182716765'
        }
    ]
}
