// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_siexiled_2101866853: ClassModData = {
    key: 'siexiled_2101866853',
    name: `Exile`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2101866853'
        }
    ],
    skills: [
        {
            name: `Split`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6925fa03b78ee318.jpg',
        },
        {
            name: `Sunder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/673471adc9544d9a.jpg',
        },
        {
            name: `Flank`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a744f09b0798fa08.jpg',
        },
        {
            name: `Provoke`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0de151fc33902680.jpg',
        },
        {
            name: `Assignment: Charge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e8e85e4f191f21f1.jpg',
        },
        {
            name: `Assignment: Track`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3fe363170479182e.jpg',
        },
        {
            name: `Assignment: Rally`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/295719dc03f8be45.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c73edb9e4d55f601.jpg',
            'img/e2d85ecc59f5631a.jpg',
            'img/755d22192b0ae5b5.jpg',
            'img/9caef8dfd85d217a.jpg',
            'img/78e6e33a3263dfb8.jpg',
        ],
        weapon: [
            'img/f5f1a99aa4637948.jpg',
            'img/d7ae27368df9002a.jpg',
            'img/51c608bc20daa72d.jpg',
            'img/97040570bc8a5313.jpg',
            'img/a75fb4a2c4a509ec.jpg',
        ],
    },
    portrait: 'img/41c394c0ec81dffa.jpg',
}
