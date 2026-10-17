// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_houndmaster1: ClassModData = {
    key: 'houndmaster1',
    name: `Houndmaster`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Hound's Rush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5f0111a17da8cfbc.jpg',
        },
        {
            name: `Hound's Harry`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8dbc28efd4bc951a.jpg',
        },
        {
            name: `Target Whistle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2b62d06f4c82fa4c.jpg',
        },
        {
            name: `Cry Havoc`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/c92f5e51550f59c9.jpg',
        },
        {
            name: `Guard Dog`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d328a5285ab8562f.jpg',
        },
        {
            name: `Lick Wounds`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7e38f732a7fa9b24.jpg',
        },
        {
            name: `Blackjack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/84aa85e44f1d7c57.jpg',
        },
    ],
    equip: {
        armour: [
            'img/660083e205232ae3.jpg',
            'img/0a04067b06858ffe.jpg',
            'img/e98c28fbcc157a8a.jpg',
            'img/848c239ceb544104.jpg',
            'img/d0945b8f6a40daf8.jpg',
        ],
        weapon: [
            'img/7b790cf0d42fc6f6.jpg',
            'img/0820d0dff3867efc.jpg',
            'img/bd97e6636233c06d.jpg',
            'img/6429b99a5814e2d1.jpg',
            'img/6f813862ce28e508.jpg',
        ],
    },
    portrait: 'img/00f50c6274eee954.jpg',
}
