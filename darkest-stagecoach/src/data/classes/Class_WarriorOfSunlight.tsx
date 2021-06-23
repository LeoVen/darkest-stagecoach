import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/warrior_of_sunlight_portrait_roster.png'

export const Class_WarriorOfSunlight: ClassMod = {
    name: 'WarriorOfSunlight',
    portrait: portrait,
    religious: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 51, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1122828159'
        }
    ]
}
