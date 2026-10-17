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
            image: 'img/b04674ea2b6664b0.jpg',
        },
        {
            name: `Abyssal Artillery`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/308c056bf53f1884.jpg',
        },
        {
            name: `Weakening Curse`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/87d73010f9b7b9fb.jpg',
        },
        {
            name: `Wyrd Reconstruction`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d511877c1d8eefb3.jpg',
        },
        {
            name: `Vulnerability Hex`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/29280118491eb82c.jpg',
        },
        {
            name: `Hands from the Abyss`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6856a9e344fd0b84.jpg',
        },
        {
            name: `Daemon's Pull`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/6b7bb765658d3dab.jpg',
        },
    ],
    equip: {
        armour: [
            'img/898dbcfc0419d66c.jpg',
            'img/429f6b152d92a194.jpg',
            'img/68c7d1716b9fc98e.jpg',
            'img/46e0bdff1ad2a9d0.jpg',
            'img/49dd9c5a94b72617.jpg',
        ],
        weapon: [
            'img/9b4ba2fbde31d129.jpg',
            'img/32d70294579fd743.jpg',
            'img/91606de48375824e.jpg',
            'img/3b02f9bad310a1ee.jpg',
            'img/66b02688a4ed11ce.jpg',
        ],
    },
    portrait: 'img/7aa0acdbcb33636e.jpg',
}
