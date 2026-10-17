// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_jester: ClassModData = {
    key: 'jester',
    name: `Jester`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Dirk Stab`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a6ac54afe2a9e3f5.jpg',
        },
        {
            name: `Harvest`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/ece2ea132149abed.jpg',
        },
        {
            name: `Finale`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/01420a074e1032cc.jpg',
        },
        {
            name: `Solo`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ae220c08c16838fb.jpg',
        },
        {
            name: `Slice Off`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/87643a8589435511.jpg',
        },
        {
            name: `Battle Ballad`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/81e114758996db8b.jpg',
        },
        {
            name: `Inspiring Tune`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8a56dbf856ddaf93.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2c063d49e79ad7c9.jpg',
            'img/37bcb0ea4c8c3fff.jpg',
            'img/0fc50fcc00912e70.jpg',
            'img/5f46dd9aae735e9d.jpg',
            'img/51c5ed94e7b19e5c.jpg',
        ],
        weapon: [
            'img/27515d00cad4cb1a.jpg',
            'img/4c15ebc4b4dc5b28.jpg',
            'img/f955c5130743764e.jpg',
            'img/062ec429f31d7afe.jpg',
            'img/98a9ee94e140ad4c.jpg',
        ],
    },
    portrait: 'img/3b5b94c1b8697a3a.jpg',
}
