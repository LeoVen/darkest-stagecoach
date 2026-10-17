// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hellion1: ClassModData = {
    key: 'hellion1',
    name: `Hellion`,
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
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Wicked Hack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c35a6064f7025b84.jpg',
        },
        {
            name: `Iron Swan`,
            launch: [true,false,false,false],
            target: {
                targets: [false,false,false,true],
                mods: ``,
            },
            image: 'img/0aabac38bcd9b453.jpg',
        },
        {
            name: `Barbaric YAWP!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/be2f77cf255b729d.jpg',
        },
        {
            name: `If It Bleeds`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/2c846da172117b11.jpg',
        },
        {
            name: `Breakthrough`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/55c4634416790eb1.jpg',
        },
        {
            name: `Adrenaline Rush`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/95596a0435d3916c.jpg',
        },
        {
            name: `Bleed Out`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/ed38b4495c855714.jpg',
        },
    ],
    equip: {
        armour: [
            'img/177591faad67a7e4.jpg',
            'img/e51300a131913b8c.jpg',
            'img/b7f5ca3aac6c0a46.jpg',
            'img/4bb5c190dc2c09b9.jpg',
            'img/62f76fa7b629a2af.jpg',
        ],
        weapon: [
            'img/6fc1a6d6aa1badff.jpg',
            'img/b9afc035f21090c6.jpg',
            'img/b14b7603021f8b58.jpg',
            'img/8b9538143700e83c.jpg',
            'img/bc58902bbc53069a.jpg',
        ],
    },
    portrait: 'img/1436250f4522b798.jpg',
}
