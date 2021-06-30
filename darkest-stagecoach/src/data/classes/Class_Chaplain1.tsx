import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/chaplain1_portrait_roster.png'

export const Class_Chaplain1: ClassMod = {
    name: 'Chaplain1',
    portrait: portrait,
    religious: true,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [7, 7, 6, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.08, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2321328188'
        }
    ]
}
