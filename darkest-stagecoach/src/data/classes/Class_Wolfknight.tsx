import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/wolfknight_portrait_roster.png'

export const Class_Wolfknight: ClassMod = {
    name: 'Wolfknight',
    portrait: portrait,
    religious: true,
    originalHero: false,
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
    position: [6, 6, 5, 5],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1225113804'
        }
    ]
}
