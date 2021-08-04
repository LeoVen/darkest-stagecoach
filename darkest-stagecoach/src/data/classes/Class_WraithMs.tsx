import ClassMod from '../ClassMod'

export const Class_WraithMs: ClassMod = {
    key: 'Class_WraithMs',
    name: 'Wraith',
    description: [
        'An assassin from a distant land, the Wraith fights using a peculiar weapon of blade and chain. Master of this exotic tool of bloodshed, this heartless killer swings his sickle like a whip, lacerating and decapitating his foes from a range or delivering a brutal execution in melee.',
        'The Wraith is not an agile combatant. His body and mind are cold from a decade of remorseless slaughter and he has adapted a patient and calculating method to his combat tactics. He relies on ensnaring his victims or temporarily incapacitating them with the blunt side of his weapon, after which he can deliver an efficient and fatal attack.'
    ],
    religious: false,
    transform: false,
    originalHero: false,
    synergy: new Set(['stun', 'mark', 'bleed', 'pull', 'shuffle', 'debuff']),
    classType: {
        damage: 3,
        healer: 0,
        support: 1,
        tank: 0
    },
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    position: [2, 7, 6, 1],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1697037179'
        }
    ],
    authors: [
        {
            author: 'Author_MarvinSeo',
            credits: ['All']
        }
    ]
}
