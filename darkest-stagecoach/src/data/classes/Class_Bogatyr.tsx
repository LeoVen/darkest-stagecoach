import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/bogatyr_portrait_roster.png'

export const Class_Bogatyr: ClassMod = {
    name: 'Bogatyr',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [5, 7, 5, 4],
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
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1976300413'
        }
    ]
}
