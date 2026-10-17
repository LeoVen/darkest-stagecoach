// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_JoanofArc1: ClassModData = {
    key: 'JoanofArc1',
    name: `Ruler`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1596685165'
        }
    ],
    skills: [
        {
            name: `Smite`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/626a5148f5fb4937.jpg',
        },
        {
            name: `Holy Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/49a820480d3da198.jpg',
        },
        {
            name: `Protection`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6e6c174151cf88d1.jpg',
        },
        {
            name: `Arc Of Light`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4f0322aee63b8dce.jpg',
        },
        {
            name: `Holy Lance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/45979b0d1076d918.jpg',
        },
        {
            name: `Holy Light`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/41a76e4e047dd05e.jpg',
        },
        {
            name: `Redemption`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/57e35b91b650fd76.jpg',
        },
    ],
    equip: {
        armour: [
            'img/22f3f89249e5e41a.jpg',
            'img/12a9132b03899b15.jpg',
            'img/75ddb522a32457b6.jpg',
            'img/3007faef375ab5d0.jpg',
            'img/bee5adbe79728517.jpg',
        ],
        weapon: [
            'img/95e586713957cb6c.jpg',
            'img/79721d4766d1c12a.jpg',
            'img/d7610928a3b5a203.jpg',
            'img/ea35eb33ce8e7556.jpg',
            'img/d248e5ffa8bfe7ba.jpg',
        ],
    },
    portrait: 'img/84961753633a1f41.jpg',
}
