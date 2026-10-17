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
            image: 'img/860528dd2fccb9cb.jpg',
        },
        {
            name: `Mace Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/58b531c166bb51df.jpg',
        },
        {
            name: `Dazzling Light`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/230cfae147c146d0.jpg',
        },
        {
            name: `Divine Grace`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ba09204c2e8bdaff.jpg',
        },
        {
            name: `Divine Comfort`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/7e11d324fb68a76c.jpg',
        },
        {
            name: `Illumination`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/dae5943a41035aec.jpg',
        },
        {
            name: `Hand of Light`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/07376862f5b1265f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ef0ac217f08b37a3.jpg',
            'img/729a2cfa023b8b19.jpg',
            'img/9bbd81dfbf0c4c11.jpg',
            'img/d235beb6161801b1.jpg',
            'img/3a7fc055c190e6ce.jpg',
        ],
        weapon: [
            'img/ba0961a278065f90.jpg',
            'img/7d6dd58a0a904d3a.jpg',
            'img/3f35888f817638a5.jpg',
            'img/0b9351a3ea2d5100.jpg',
            'img/dbd0cff7107febd1.jpg',
        ],
    },
    portrait: 'img/b899a9aab808bc23.jpg',
}
