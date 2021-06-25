import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/ronin_portrait_roster.png'

export const Class_Ronin: ClassMod = {
    name: 'Ronin',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.1,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.1,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.5,
        trap: 0.1
    },
    position: [5, 5, 5, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 17.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 19.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 21.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 24.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=942851186'
        }
    ]
}
