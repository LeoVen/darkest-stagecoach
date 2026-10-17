// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_stars1: ClassModData = {
    key: 'stars1',
    name: `The Stars`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0,
        blight: 0.5,
        bleed: 0.5,
        disease: 2,
        move: 0,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.09, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2360027730'
        }
    ],
    skills: [
        {
            name: `Spiritual Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/23c43a7cc7319542.jpg',
        },
        {
            name: `Mind Blast`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d0f37dc4f9d451eb.jpg',
        },
        {
            name: `Shadowflame Cauterize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/705b0d8f8106afae.jpg',
        },
        {
            name: `Flash of Fireworks`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/27fbdc634cdda1f1.jpg',
        },
        {
            name: `Galaxy Smash`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/81e6a3237f3a7c83.jpg',
        },
        {
            name: `Abyss Shatter`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fa11c75e82bf736d.jpg',
        },
        {
            name: `Space-Time Transcend`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/85dcc9edb61bcd51.jpg',
        },
    ],
    equip: {
        armour: [
            'img/82ea7722930b80be.jpg',
            'img/8d4a5d99daab5a7f.jpg',
            'img/97ed281917043cce.jpg',
            'img/a389c59a9912d728.jpg',
            'img/dbd8ffa6ddf33a99.jpg',
        ],
        weapon: [
            'img/689cfa6ec8ef8ddb.jpg',
            'img/49a78de6a610b7f6.jpg',
            'img/1335310ddf90e62d.jpg',
            'img/e1571c63c6ad308f.jpg',
            'img/c599c1a06f1f8b68.jpg',
        ],
    },
    portrait: 'img/802dffc955446daf.jpg',
}
