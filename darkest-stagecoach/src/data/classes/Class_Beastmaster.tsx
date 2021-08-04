import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/beastmaster_portrait_roster.png'

export const Class_Beastmaster: ClassMod = {
    key: 'Class_Beastmaster',
    name: 'Beastmaster',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [4, 5, 4, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [10.0, 13.0], crit: 0.09, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1747389796'
        }
    ]
}
