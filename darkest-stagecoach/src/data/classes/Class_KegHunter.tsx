import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/keg_hunter_portrait_roster.png'

export const Class_KegHunter: ClassMod = {
    name: 'KegHunter',
    portrait: portrait,
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    position: [5, 7, 5, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2248772895'
        }
    ]
}
