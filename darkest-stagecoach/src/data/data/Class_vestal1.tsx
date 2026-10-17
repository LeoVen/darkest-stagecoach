// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_vestal1: ClassModData = {
    key: 'vestal1',
    name: `Vestal`,
    originalHero: true,
    religious: true,
    transform: false,
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
    sources: [],
    skills: [
        {
            name: `Judgement`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b299651e07d1854a.jpg',
        },
        {
            name: `Mace Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/09e4edd503d8beb4.jpg',
        },
        {
            name: `Dazzling Light`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c9e52d6294e52f6c.jpg',
        },
        {
            name: `Divine Grace`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2c6f4ca56cc5968d.jpg',
        },
        {
            name: `Divine Comfort`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/25714e75320f8abe.jpg',
        },
        {
            name: `Illumination`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/46bf8322e9022827.jpg',
        },
        {
            name: `Hand of Light`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2f030bc5394417f5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c7fddabc463fd777.jpg',
            'img/79dcb097a758173a.jpg',
            'img/77a7584dc16a3e87.jpg',
            'img/7b6ef142fa284661.jpg',
            'img/2e3612c4187f7bb3.jpg',
        ],
        weapon: [
            'img/1f3ccca12378f626.jpg',
            'img/317e9983a161f779.jpg',
            'img/7828f7c0dbb8f69d.jpg',
            'img/b9573799a97087bb.jpg',
            'img/143539f2618a29ab.jpg',
        ],
    },
    portrait: 'img/f37d3c1a54e29c9c.jpg',
}
