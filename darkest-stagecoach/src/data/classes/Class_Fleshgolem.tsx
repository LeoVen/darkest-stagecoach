import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/fleshgolem_portrait_roster.png'

export const Class_Fleshgolem: ClassMod = {
    name: 'Fleshgolem',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 3,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: -1,
        trap: 0
    },
    position: [4, 4, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1665671496'
        }
    ]
}
