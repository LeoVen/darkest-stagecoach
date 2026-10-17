// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_scarecrow_2104150657: ClassModData = {
    key: 'scarecrow_2104150657',
    name: `Scarecrow`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.1,
        bleed: 2.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2104150657'
        }
    ],
    skills: [
        {
            name: `Flail the Crops`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/bf19f66d91eba3f6.jpg',
        },
        {
            name: `Stinging Flick`,
            launch: [false,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6455f9a96dbc0907.jpg',
        },
        {
            name: `Roots`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/5dfb5b7a3be7c15c.jpg',
        },
        {
            name: `Eldritch Light`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/ae6bca24499b4c6d.jpg',
        },
        {
            name: `Crystal Powder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8e8670acbf9b2fab.jpg',
        },
        {
            name: `Shard of Growth`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a6c23a56a263f301.jpg',
        },
        {
            name: `Iridescence`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0fdae96c03734dbf.jpg',
        },
    ],
    equip: {
        armour: [
            'img/595aa41ba9ea3e5d.jpg',
            'img/7abf17914958f751.jpg',
            'img/a38a84bf02844c45.jpg',
            'img/f9b057d436afa761.jpg',
            'img/556af8353a8267e6.jpg',
        ],
        weapon: [
            'img/77ada20039db1ed4.jpg',
            'img/9bf3822879d208b0.jpg',
            'img/94c5e303170517b2.jpg',
            'img/3fa4a303d7c3d727.jpg',
            'img/24df987a36498312.jpg',
        ],
    },
    portrait: 'img/f6a93cff10efd05a.jpg',
}
