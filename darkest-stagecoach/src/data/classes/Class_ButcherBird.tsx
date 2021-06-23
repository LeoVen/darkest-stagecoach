import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/butcher_bird_portrait_roster.png'

export const Class_ButcherBird: ClassMod = {
    name: 'ButcherBird',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.13, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1447972888'
        }
    ]
}
