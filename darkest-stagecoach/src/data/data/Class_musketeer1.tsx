// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_musketeer1: ClassModData = {
    key: 'musketeer1',
    name: `Musketeer`,
    originalHero: true,
    religious: false,
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
            { dodge: 0, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/1c1dfccfc230a7a7.jpg',
        },
        {
            name: `Smokescreen`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/09bbac3985533a4a.jpg',
        },
        {
            name: `Call the Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `Buckshot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/60615f26edeae1f5.jpg',
        },
        {
            name: `Sidearm`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/025aaf146fa03f15.jpg',
        },
        {
            name: `Patch Up`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2f2ca07a0e9015ff.jpg',
        },
        {
            name: `Skeet Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/7f3c752aa46a6dd6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fc24e106d5473808.jpg',
            'img/1add17795a5cde4f.jpg',
            'img/f22d4bcf02956e1a.jpg',
            'img/d934c8860e53ec37.jpg',
            'img/91078095ef90ea22.jpg',
        ],
        weapon: [
            'img/f28dd8511ab2633f.jpg',
            'img/8d8767d2f17a00aa.jpg',
            'img/21e0ee065f37090f.jpg',
            'img/cb2db9250630951c.jpg',
            'img/23b2d2f6deb4c586.jpg',
        ],
    },
    portrait: 'img/87e8e7815fe16b77.jpg',
}
