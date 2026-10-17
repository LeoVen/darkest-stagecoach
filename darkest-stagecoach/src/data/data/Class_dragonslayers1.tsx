// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dragonslayers1: ClassModData = {
    key: 'dragonslayers1',
    name: `Dragonslayer Knight`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1209578556'
        }
    ],
    skills: [
        {
            name: `Lunge`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c7dbc8febcf69b11.jpg',
        },
        {
            name: `Swift Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/10e0fedb9c65e06f.jpg',
        },
        {
            name: `Charging Stab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6c084123cbdb7d9b.jpg',
        },
        {
            name: `Lightning Spear`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/548ac900cba8f28a.jpg',
        },
        {
            name: `Nimble Defense`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/50860bb295ad36bf.jpg',
        },
        {
            name: `Thundering Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/811e512ab6bc343a.jpg',
        },
        {
            name: `Shocking Impale`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9b29dfe6161274ad.jpg',
        },
    ],
    equip: {
        armour: [
            'img/25da607273d016a8.jpg',
            'img/edf199455ee7a9be.jpg',
            'img/798a1187bacab951.jpg',
            'img/08918de6464cf42e.jpg',
            'img/0d7cd90ad4ab05c6.jpg',
        ],
        weapon: [
            'img/c112226b0dc7f3bd.jpg',
            'img/c7696c57e97873fd.jpg',
            'img/6f3ff1e66f7a4a32.jpg',
            'img/9ad39ca88f74b4c0.jpg',
            'img/0ae877c777c5e352.jpg',
        ],
    },
    portrait: 'img/8df19eba26acdd62.jpg',
}
