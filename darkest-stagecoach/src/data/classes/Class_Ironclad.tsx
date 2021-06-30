import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/ironclad_portrait_roster.png'

export const Class_Ironclad: ClassMod = {
    name: 'Ironclad',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 1,
        disease: 1,
        move: 1,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    position: [6, 7, 4, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: -0.1, prot: 0.2, hp: 35, speed: 0 },
            { dodge: -0.1, prot: 0.25, hp: 42, speed: 0 },
            { dodge: -0.1, prot: 0.3, hp: 49, speed: 1 },
            { dodge: -0.1, prot: 0.35, hp: 56, speed: 1 },
            { dodge: -0.1, prot: 0.4, hp: 63, speed: 2 }
        ],
        weapons: [
            { accuracy: 0, damage: [10.0, 20.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [11.0, 22.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [12.0, 25.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [13.0, 27.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [15.0, 30.0], crit: 0.03, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1192738994'
        }
    ]
}
