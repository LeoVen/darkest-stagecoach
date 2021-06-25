import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/golem_portrait_roster.png'

export const Class_Golem: ClassMod = {
    name: 'Golem',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.5,
        blight: 0,
        bleed: 0,
        disease: 0,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0,
        trap: 0.1
    },
    position: [7, 7, 2, 0],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 65, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.07, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2418764393'
        }
    ]
}
