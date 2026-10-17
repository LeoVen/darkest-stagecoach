// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tifa1: ClassModData = {
    key: 'tifa1',
    name: `Tifa`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1133384392'
        }
    ],
    skills: [
        {
            name: `Beat Rush`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/45a93302de397f5f.jpg',
        },
        {
            name: `Somersault`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/4bdc2377495d32dc.jpg',
        },
        {
            name: `Waterkick`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/2b214b37744522fc.jpg',
        },
        {
            name: `Limit Break`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f29ea6095a913d20.jpg',
        },
        {
            name: `Dolphin Blow`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8df4bbed85e78f61.jpg',
        },
        {
            name: `Leviathan`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/42c4745dec30ba40.jpg',
        },
        {
            name: `Final Heaven`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/1914e9d732896e3c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/aaf6d345601d07f6.jpg',
            'img/c8d364c51076152e.jpg',
            'img/dbb4597e9d68ae6a.jpg',
            'img/e7938473700df220.jpg',
            'img/d322291f1d0f2366.jpg',
        ],
        weapon: [
            'img/3f9ae3f9b3801ac7.jpg',
            'img/2dd9ade2d25d207a.jpg',
            'img/4ca2e1472261b108.jpg',
            'img/51f39e2b15d1331d.jpg',
            'img/19c7236a0cf1d382.jpg',
        ],
    },
    portrait: 'img/b3720921716f7ca8.jpg',
}
