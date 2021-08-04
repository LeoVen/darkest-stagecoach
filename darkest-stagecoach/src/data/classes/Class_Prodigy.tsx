import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/prodigy_portrait_roster.png'

export const Class_Prodigy: ClassMod = {
    key: 'Class_Prodigy',
    name: 'Prodigy',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    position: [4, 5, 6, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.06, speed: 9 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.07, speed: 9 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.08, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=924245318'
        }
    ]
}
