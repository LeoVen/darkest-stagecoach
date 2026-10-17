// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_trap_maker1: ClassModData = {
    key: 'trap_maker1',
    name: `Trap Maker`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.8
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 15.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 16.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=929549650'
        }
    ],
    skills: [
        {
            name: `Blunderbusster`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f4f1d97066c1fc0a.jpg',
        },
        {
            name: `Iron Maiden`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/69262b809f39c80a.jpg',
        },
        {
            name: `Blade Wheel`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/d3ed125db40401dc.jpg',
        },
        {
            name: `Spikes Trap`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/64a21b6ab9b96c5a.jpg',
        },
        {
            name: `Stone Fall`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/5b6ea32646b4d3e5.jpg',
        },
        {
            name: `Armor Breaker`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b67a6fb02270e57a.jpg',
        },
        {
            name: `Escape Door`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7c1e8ced4db267bb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/616e23e87201cbe5.jpg',
            'img/95a946375185edc1.jpg',
            'img/4c8d3605861d108d.jpg',
            'img/67c915456893afb7.jpg',
            'img/88f47c8fcdef426c.jpg',
        ],
        weapon: [
            'img/579b7c312b7d59fc.jpg',
            'img/9fc84170156f9af8.jpg',
            'img/9b660a45c92496f0.jpg',
            'img/6177237453bec2da.jpg',
            'img/70d9ebad09410f0a.jpg',
        ],
    },
    portrait: 'img/151881bb1b73cc2b.jpg',
}
