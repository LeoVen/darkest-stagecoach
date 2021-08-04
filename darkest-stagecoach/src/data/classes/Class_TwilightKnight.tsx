import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/twilight_knight_portrait_roster.png'

export const Class_TwilightKnight: ClassMod = {
    key: 'Class_TwilightKnight',
    name: 'TwilightKnight',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [6, 7, 2, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [11.0, 17.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [12.0, 18.0], crit: 0.08, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1154908982'
        }
    ]
}
