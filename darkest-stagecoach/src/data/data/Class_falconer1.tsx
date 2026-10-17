// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_falconer1: ClassModData = {
    key: 'falconer1',
    name: `Falconer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.25,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.1, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.11, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1089257023'
        }
    ],
    skills: [
        {
            name: `Quickshot / Crippling Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/815750d5fe85cfe6.jpg',
        },
        {
            name: `Eyethief / Ravage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/70ba2b3ca89765ec.jpg',
        },
        {
            name: `Flank / Gouge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9cd237379204953f.jpg',
        },
        {
            name: `Volley Fire / Flurry`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/85f9f59b82d79e32.jpg',
        },
        {
            name: `Spirited Cry / Stalk`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f57161275bb9ee3b.jpg',
        },
        {
            name: `Fleeting Escape / Harrier`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/78deb570dea46107.jpg',
        },
        {
            name: `Adapt`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5127ce6c288faf9c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/565f0a1975e4d27a.jpg',
            'img/9c14516b41db85a7.jpg',
            'img/50589f4e68695af2.jpg',
            'img/752f2d44d574a9df.jpg',
            'img/862db6ca7bec1fdd.jpg',
        ],
        weapon: [
            'img/e31488cd0792231b.jpg',
            'img/ca41e7c175ddf034.jpg',
            'img/b4075fcfe34f08ad.jpg',
            'img/a345f52c40076857.jpg',
            'img/c188f52ff0ab3cb8.jpg',
        ],
    },
    portrait: 'img/e81bf1ede522d626.jpg',
}
