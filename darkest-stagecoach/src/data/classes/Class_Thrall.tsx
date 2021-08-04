import ClassMod from '../ClassMod'
import { Author_MarvinSeo } from '../authors/Author_MarvinSeo'

export const Class_Thrall: ClassMod = {
    key: 'Class_Thrall',
    name: 'Thrall',
    description: [
        'A monster of a man, the Thrall can take a beating and deliver one twice as strong in return. The Thrall shines best in the thick of combat, where he can deliver devastating blows and punish any who try to defy him. Should the opponent be too far to engage in close combat, the Thrall can take a moment to hype himself up and charge back into the fray, trampling all who stand in his way.',
        "While the Thrall's body is unbreakable, his mind is fragile. Should the Thrall feel he is threatened, he'll quickly become Ferocious, entering a frenzy where friend and foe blur into one mass and the only priority is self preservation."
    ],
    religious: false,
    transform: false,
    originalHero: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [6, 5, 3, 4],
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
            { accuracy: 0, damage: [7.0, 14.0], crit: 0, speed: 0 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [10.0, 20.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [12.0, 24.0], crit: 0.04, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1175904375'
        }
    ],
    authors: [
        {
            author: Author_MarvinSeo,
            credits: ['All']
        }
    ]
}
