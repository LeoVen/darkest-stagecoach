// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_abomination: ClassModData = {
    key: 'abomination',
    name: `Abomination`,
    originalHero: true,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Transform`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5373cc5f8addb2ec.jpg',
        },
        {
            name: `Manacles`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/65028914e6165488.jpg',
        },
        {
            name: `Beast's Bile`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/79c376078691c245.jpg',
        },
        {
            name: `Absolution`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/50559233494fd575.jpg',
        },
        {
            name: `Rake`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/947e2c0952727547.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f078e0bd1f5bf6da.jpg',
        },
        {
            name: `Slam`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/66bdd9386582b5e5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e11c49426e406c7.jpg',
            'img/0687accc1fc8ed04.jpg',
            'img/130af7f06c7967bb.jpg',
            'img/209f4b4f5dbb1223.jpg',
            'img/e41ec380d831ca01.jpg',
        ],
        weapon: [
            'img/333851e1c844a379.jpg',
            'img/ef798f9e32d224a7.jpg',
            'img/bec2fdb7404d5ab4.jpg',
            'img/513edf739047f979.jpg',
            'img/d88be3f70192c88e.jpg',
        ],
    },
    portrait: 'img/ca939dce88ef8304.jpg',
}
