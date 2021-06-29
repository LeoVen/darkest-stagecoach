import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/shieldbreaker_portrait_roster.png'

export const Class_Shieldbreaker: ClassMod = {
    name: 'Shieldbreaker',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [6, 5, 5, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
