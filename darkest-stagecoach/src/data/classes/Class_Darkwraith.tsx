import ClassMod from '../ClassMod'

export const Class_Darkwraith: ClassMod = {
    key: 'Class_Darkwraith',
    name: 'Darkwraith',
    religious: false,
    originalHero: false,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.6,
        disease: 0.4,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0.3
    },
    position: [6, 6, 4, 3],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1825622538'
        }
    ]
}
