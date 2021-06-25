import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/librarian_portrait_roster.png'

export const Class_Librarian: ClassMod = {
    name: 'Librarian',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [2, 3, 6, 6],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.12, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.32, prot: 0, hp: 28, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1185211485'
        }
    ]
}
