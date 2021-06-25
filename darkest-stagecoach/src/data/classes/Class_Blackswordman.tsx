import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/blackswordman_portrait_roster.png'

export const Class_Blackswordman: ClassMod = {
    name: 'Blackswordman',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.3,
        debuff: 0.1,
        deathBlow: 0.75,
        trap: 0.1
    },
    position: [6, 7, 3, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 67, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [15.0, 25.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [17.0, 29.0], crit: 0.09, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1425243237'
        }
    ]
}
