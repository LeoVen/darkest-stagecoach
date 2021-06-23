import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/lordblade_portrait_roster.png'

export const Class_Lordblade: ClassMod = {
    name: 'Lordblade',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1433161277'
        }
    ]
}
