// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_fury1: ClassModData = {
    key: 'fury1',
    name: `Fury`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.035, speed: 5 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.045, speed: 6 },
            { accuracy: 0, damage: [13.0, 15.0], crit: 0.05, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1100450515'
        }
    ],
    skills: [
        {
            name: `Feral Impulse`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/71b3d5f3a34cbe18.jpg',
        },
        {
            name: `Composed Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2d7da0e92d7571f5.jpg',
        },
        {
            name: `Disciplined Thrust`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b0c801746dc5ccce.jpg',
        },
        {
            name: `Poised Cleave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/879acc2439f0e1fa.jpg',
        },
        {
            name: `Raging Sunder`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/23a355d83d8d2c9b.jpg',
        },
        {
            name: `Vicious Rip`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/47ef5cbbb3d70296.jpg',
        },
        {
            name: `Ferocious Laceration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b3ea9815a6623c47.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8085461aeba3919a.jpg',
            'img/72143c41939f1c81.jpg',
            'img/ca8438787e39de5d.jpg',
            'img/c20dcb7c553c2357.jpg',
            'img/7ef275c5550fbdc3.jpg',
        ],
        weapon: [
            'img/9a7fbafa3d8ca7b9.jpg',
            'img/5afdc13a9d7dde65.jpg',
            'img/936b85c0d17cdaf0.jpg',
            'img/5bf0ea5735ef1312.jpg',
            'img/eb8d42ff87a850b3.jpg',
        ],
    },
    portrait: 'img/eccb06eddb40b0cb.jpg',
}
