// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_leper1: ClassModData = {
    key: 'leper1',
    name: `Leper`,
    originalHero: true,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [12.0, 23.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [13.0, 26.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Chop`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c60b5af29ea10981.jpg',
        },
        {
            name: `Hew`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2637b736df453092.jpg',
        },
        {
            name: `Purge`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/6a58fc0f7ac6e332.jpg',
        },
        {
            name: `Revenge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ea7dd4229b2caf4c.jpg',
        },
        {
            name: `Solemnity`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fd27e261db1215f4.jpg',
        },
        {
            name: `Withstand`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/6e7cb84e75f6a1f9.jpg',
        },
        {
            name: `Intimidate`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/36ab918503bac8ad.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6594c1664dc218e2.jpg',
            'img/13586bbffb6c6714.jpg',
            'img/d0dc2ea0b9991c32.jpg',
            'img/b6aaa795a29f22fb.jpg',
            'img/07e1b9ebe5496849.jpg',
        ],
        weapon: [
            'img/c99b5a87a18806e2.jpg',
            'img/e41ab3a4a35fa594.jpg',
            'img/e3d2b87eb0b131b6.jpg',
            'img/6d4ff17aed5def56.jpg',
            'img/26460e17ee69a92b.jpg',
        ],
    },
    portrait: 'img/a3e6a0cfe4bf4cf2.jpg',
}
