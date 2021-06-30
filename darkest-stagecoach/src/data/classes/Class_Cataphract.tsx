import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/cataphract_portrait_roster.png'

export const Class_Cataphract: ClassMod = {
    name: 'Cataphract',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [4, 2, 2, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1235319270'
        }
    ]
}
