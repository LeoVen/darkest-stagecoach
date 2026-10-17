// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_seraph1: ClassModData = {
    key: 'seraph1',
    name: `Seraph`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.6,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 0 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1221097087'
        }
    ],
    skills: [
        {
            name: `Vengeance`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4e13fb8d463d5585.jpg',
        },
        {
            name: `Fall`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/de9daa5c5a2781d7.jpg',
        },
        {
            name: `Vindicate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a36b40c6abe6713b.jpg',
        },
        {
            name: `Intervention`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b6c3fef49bfde490.jpg',
        },
        {
            name: `Wrath`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8f962a1d3129afcb.jpg',
        },
        {
            name: `Inferno`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/7d05411216906c04.jpg',
        },
        {
            name: `Brand`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c45cde1d17e0e56e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/861e0b5f526dbbb7.jpg',
            'img/885436c7936b98f1.jpg',
            'img/83374a7710c0e010.jpg',
            'img/d48304bba17f6fd9.jpg',
            'img/3df6a5b2dff69fe5.jpg',
        ],
        weapon: [
            'img/1c31576e9b335599.jpg',
            'img/1710a1b0d4271718.jpg',
            'img/b16d85d5ac3044d3.jpg',
            'img/b130c283652e68f3.jpg',
            'img/f5a09b20d2752482.jpg',
        ],
    },
    portrait: 'img/b2d56f06d98dadb9.jpg',
}
