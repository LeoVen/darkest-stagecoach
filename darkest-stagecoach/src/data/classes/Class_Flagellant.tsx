import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/flagellant_portrait_roster.png'

export const Class_Flagellant: ClassMod = {
    key: 'Class_Flagellant',
    name: 'Flagellant',
    portrait: portrait,
    religious: true,
    transform: false,
    originalHero: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.65,
        disease: 0.4,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0
    },
    position: [7, 7, 4, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
