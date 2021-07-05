import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/antiquarian_portrait_roster.png'

export const Class_Antiquarian: ClassMod = {
    name: 'Antiquarian',
    description: [
        'A scholar, researcher, and keen archaeologist, The Antiquarian is not well suited for combat. She is, however, an expert in self-preservation - by making herself scarce in a fight, or demanding an ally protect her, she ensures her survival. If direct combat is unavoidable, The Antiquarian can use her fulminating censer to heal and invigorate allies...and to toxify attackers.'
    ],
    portrait: portrait,
    religious: false,
    transform: false,
    originalHero: true,
    classType: {
        damage: 1,
        healer: 1,
        support: 2,
        tank: 0
    },
    synergy: ['blight', 'deStealth', 'debuff', 'guard', 'heal', 'buff'],
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    position: [5, 5, 7, 7],
    totalSkills: 7,
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.01, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id='
        }
    ]
}
