// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_occultist1: ClassModData = {
    key: 'occultist1',
    name: `Occultist`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Sacrificial Stab`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/108a784b8d207a62.jpg',
        },
        {
            name: `Abyssal Artillery`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/fac2e42fa66f5d73.jpg',
        },
        {
            name: `Weakening Curse`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4edd8a2b1890955b.jpg',
        },
        {
            name: `Wyrd Reconstruction`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2931a27a27f6be79.jpg',
        },
        {
            name: `Vulnerability Hex`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/44f03b174b94fd46.jpg',
        },
        {
            name: `Hands from the Abyss`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/dc343d1a93c121b5.jpg',
        },
        {
            name: `Daemon's Pull`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/d5ce851a87219a35.jpg',
        },
    ],
    equip: {
        armour: [
            'img/34625c0fc0dde2b3.jpg',
            'img/9ebbfc1ec5ea9460.jpg',
            'img/b09f7223073e466d.jpg',
            'img/535374820e0a62e2.jpg',
            'img/45857d4439d2f07d.jpg',
        ],
        weapon: [
            'img/60026ec68d57bb91.jpg',
            'img/62d59e16d0b5b65e.jpg',
            'img/9c6ec42fbdda22d6.jpg',
            'img/b93c7000e2982d3c.jpg',
            'img/046af045901fc26c.jpg',
        ],
    },
    portrait: 'img/7df6f25ad69031d3.jpg',
}
