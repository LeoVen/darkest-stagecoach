import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/leper_portrait_roster.png'

export const Class_Leper: ClassMod = {
    name: 'Leper',
    portrait: portrait,
    religious: true,
    transform: false,
    originalHero: true,
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
    position: [7, 5, 2, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [12.0, 23.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [13.0, 26.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
