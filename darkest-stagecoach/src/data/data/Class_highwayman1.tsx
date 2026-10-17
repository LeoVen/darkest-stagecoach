// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_highwayman1: ClassModData = {
    key: 'highwayman1',
    name: `Highwayman`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Wicked Slice`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3179aa206a720d03.jpg',
        },
        {
            name: `Pistol Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d02cc5e2b759aeb2.jpg',
        },
        {
            name: `Point Blank Shot`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/627b23ca9d8d93d4.jpg',
        },
        {
            name: `Grapeshot Blast`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/981337d97c360c8d.jpg',
        },
        {
            name: `Tracking Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/24e2b93bad549476.jpg',
        },
        {
            name: `Duelist's Advance`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2f5d8d9fcdca9ed8.jpg',
        },
        {
            name: `Open Vein`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5ff2a52d6fec6c7d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/27b1c5f921f3ba94.jpg',
            'img/79ad35d462d1578d.jpg',
            'img/babc8330528b99a9.jpg',
            'img/179861530efb6f72.jpg',
            'img/3d6e11c6ac607390.jpg',
        ],
        weapon: [
            'img/7183103c255728a4.jpg',
            'img/de184776ec89a046.jpg',
            'img/88c6d632c8129c1a.jpg',
            'img/71e1bcafa449ea60.jpg',
            'img/37a865f7f3285348.jpg',
        ],
    },
    portrait: 'img/caf80f3f5fb188b1.jpg',
}
