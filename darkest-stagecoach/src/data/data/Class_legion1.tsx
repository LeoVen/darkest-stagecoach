// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_legion1: ClassModData = {
    key: 'legion1',
    name: `Legion`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2531791079'
        }
    ],
    skills: [
        {
            name: `Legion Standard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e34e8d4365c5c5ed.jpg',
        },
        {
            name: `Testudo Formation`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/bd353bc74dd2f732.jpg',
        },
        {
            name: `March of the Damned`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8d18a49e1ed4f7bb.jpg',
        },
        {
            name: `Gut Them`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5cffd25bbfe9274f.jpg',
        },
        {
            name: `Veni, Vidi, Vici`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/63fdce1b9535b082.jpg',
        },
        {
            name: `Martial Pride`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/31b45d25cefaa21e.jpg',
        },
        {
            name: `Blood of the Legion`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e099d2d78cd04f8f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/db55cb1b13be91b8.jpg',
            'img/f6577897a37f2bef.jpg',
            'img/a82d67dfec3162ad.jpg',
            'img/2ee609d912225fd2.jpg',
            'img/2abcb36ac028e7da.jpg',
        ],
        weapon: [
            'img/8aeda76d402bbb1e.jpg',
            'img/47b88091b2faa5b1.jpg',
            'img/d70015c79a52e74d.jpg',
            'img/c7189a156d452ab6.jpg',
            'img/3ba47ba950357d72.jpg',
        ],
    },
    portrait: 'img/922c4b1853b89c03.jpg',
}
