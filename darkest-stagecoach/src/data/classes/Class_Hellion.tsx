import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/hellion_portrait_roster.png'

export const Class_Hellion: ClassMod = {
    name: 'Hellion',
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [6, 5, 3, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
