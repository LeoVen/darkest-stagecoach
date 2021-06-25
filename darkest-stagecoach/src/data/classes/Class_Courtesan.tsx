import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/courtesan_portrait_roster.png'
import { Author_Roderick } from '../authors/Author_Roderick'

export const Class_Courtesan: ClassMod = {
    name: 'Courtesan',
    description: [
        'The Courtesan at last has arrived at the Hamlet! This backline support specializes in keeping her allies alive and debuffing foes whilst in human form. But when one needs damage rather than healing, she can transform into a potent backline, laying waste to enemies with short, but highly potent DoT.'
    ],
    portrait: portrait,
    religious: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.6,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [3, 6, 8, 8],
    totalSkills: 8,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.02, speed: 8 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.03, speed: 8 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.04, speed: 9 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 9 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2508921150'
        }
    ],
    authors: [
        {
            author: Author_Roderick,
            credits: ['All']
        }
    ]
}
