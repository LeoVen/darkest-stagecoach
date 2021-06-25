import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/enigma_portrait_roster.png'

export const Class_Enigma: ClassMod = {
    name: 'Enigma',
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.8,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.5,
        move: 0.5,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.5
    },
    position: [2, 7, 7, 2],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0.4, hp: 20, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 22, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 24, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 26, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 28, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.035, speed: 0 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.045, speed: 1 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.05, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=970030269'
        }
    ]
}
