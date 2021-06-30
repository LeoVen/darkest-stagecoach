import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/lucia_portrait_roster.png'

export const Class_Lucia: ClassMod = {
    name: 'Lucia',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 2,
        disease: 2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [30, 30, 3, 3],
    totalSkills: 30,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.08, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.11, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [1.0, 3.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [1.0, 3.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [1.0, 3.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [1.0, 3.0], crit: 0.1, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2149017929'
        }
    ]
}
