// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_crusader1: ClassModData = {
    key: 'crusader1',
    name: `Crusader`,
    originalHero: true,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.07, speed: 3 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Smite`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/deaf55bbda070a7e.jpg',
        },
        {
            name: `Zealous Accusation`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/a11876f3019d6663.jpg',
        },
        {
            name: `Stunning Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c569b1a0d6fe6e1d.jpg',
        },
        {
            name: `Bulwark of Faith`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/62015604cb3094e7.jpg',
        },
        {
            name: `Battle Heal`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/243a35dadb73c3c7.jpg',
        },
        {
            name: `Holy Lance`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e6134a6deb3cd8bf.jpg',
        },
        {
            name: `Inspiring Cry`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ef2e80c886282b6e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3b88236127afcccc.jpg',
            'img/51025e6a12f37cff.jpg',
            'img/c873daf424d39c9c.jpg',
            'img/06b2756dd8183499.jpg',
            'img/2bb35dddaf01bcc8.jpg',
        ],
        weapon: [
            'img/3fe87cfdbe40a4f8.jpg',
            'img/a9d409548bc97f21.jpg',
            'img/8f84d04918b6a223.jpg',
            'img/b80b1ec7f927217a.jpg',
            'img/b1c53a93add1dbab.jpg',
        ],
    },
    portrait: 'img/9376edb91a91a621.jpg',
}
