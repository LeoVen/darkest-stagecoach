import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/blackguard_portrait_roster.png'

export const Class_Blackguard: ClassMod = {
    name: 'Blackguard',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.1,
        bleed: 2,
        disease: 0.6,
        move: 0.2,
        debuff: 0.1,
        deathBlow: 0.5,
        trap: 0.1
    },
    position: [7, 7, 4, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 3 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2168009997'
        }
    ]
}
