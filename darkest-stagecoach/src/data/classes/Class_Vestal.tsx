import ClassMod from '../ClassMod'

export const Class_Vestal: ClassMod = {
    key: 'Class_Vestal',
    name: 'Vestal',
    description: [
        'The warrior nun channels her zeal for battle into healing abilities, holy judgements and dazzling explosions of light. A strong backbone to any party, the Vestal can also hold her own on the front line with a powerful mace bash and close-quarters condemnations.',
    ],
    religious: true,
    transform: false,
    originalHero: true,
    classType: {
        damage: 1,
        healer: 3,
        support: 1,
        tank: 0,
    },
    synergy: new Set([
        'stun',
        'heal',
        'deStealth',
    ]),
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [3, 5, 5, 4],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
