// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_harlot1: ClassModData = {
    key: 'harlot1',
    name: `Harlot`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1860840141'
        }
    ],
    skills: [
        {
            name: `Hands Off!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/73171827665ee7f3.jpg',
        },
        {
            name: `Silk Hiding Steel`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/f5e29bc644cfb111.jpg',
        },
        {
            name: `Kiss of Death`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/883f748e6962be03.jpg',
        },
        {
            name: `Heart of Gold`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/db071ae921598b55.jpg',
        },
        {
            name: `Flashin' the Goods`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/ac4d10cb6be72a8d.jpg',
        },
        {
            name: `Hold Me Close`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d78f174a5c4d64ec.jpg',
        },
        {
            name: `On the Prowl`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fa9a5ecb3d52f21a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1b31f411297d4993.jpg',
            'img/bf14dd5b496be608.jpg',
            'img/4806d87eb6bb9a2d.jpg',
            'img/89e013171a603baa.jpg',
            'img/8d46cfa0aa00b585.jpg',
        ],
        weapon: [
            'img/791eab9e68a8d6a3.jpg',
            'img/d0a569a0da51531e.jpg',
            'img/946d5a1201efdcf9.jpg',
            'img/b35385aef5603f1e.jpg',
            'img/75713e40e4a770af.jpg',
        ],
    },
    portrait: 'img/0e12ab9e3a978ffd.jpg',
}
