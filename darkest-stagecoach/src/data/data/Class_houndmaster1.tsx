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
            image: 'img/406f5aaf0fe5b001.jpg',
        },
        {
            name: `Hound's Harry`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/98d183d7259dbb7a.jpg',
        },
        {
            name: `Target Whistle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/eb3f8bf9bd2d007a.jpg',
        },
        {
            name: `Cry Havoc`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/89405361d7898871.jpg',
        },
        {
            name: `Guard Dog`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fa3b5b413a5c3ea1.jpg',
        },
        {
            name: `Lick Wounds`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/780d40f988204ee3.jpg',
        },
        {
            name: `Blackjack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7bd17dba7c67b0bd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6484f83e75a50574.jpg',
            'img/0d2a72fac478994a.jpg',
            'img/dffc17385b393835.jpg',
            'img/caa9c1a197e2624f.jpg',
            'img/58179dcb9884f9d1.jpg',
        ],
        weapon: [
            'img/961f8bd1d98fe397.jpg',
            'img/17c03328f796c63b.jpg',
            'img/f0b2cb4847e84af4.jpg',
            'img/7b99d14bafb6363d.jpg',
            'img/748044284d092582.jpg',
        ],
    },
    portrait: 'img/f6cef390d72b56f9.jpg',
}
