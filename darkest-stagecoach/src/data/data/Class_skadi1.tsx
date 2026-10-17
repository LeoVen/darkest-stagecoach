// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_skadi1: ClassModData = {
    key: 'skadi1',
    name: `深海猎人`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0,
        bleed: 0,
        disease: 0.9,
        move: 0.1,
        debuff: 0,
        deathBlow: 0.5,
        trap: 1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0.15, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0.2, hp: 41, speed: 0 }
        ],
        weapons: [
            { accuracy: 0.01, damage: [1.0, 14.0], crit: 0, speed: 4 },
            { accuracy: 0.02, damage: [1.0, 15.0], crit: -0.02, speed: 5 },
            { accuracy: 0.03, damage: [2.0, 17.0], crit: -0.03, speed: 5 },
            { accuracy: 0.04, damage: [2.0, 19.0], crit: -0.04, speed: 6 },
            { accuracy: 0.05, damage: [2.0, 23.0], crit: -0.05, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2323592084'
        }
    ],
    skills: [
        {
            name: `迅速挥砍`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/330fb0e10dcfb3d7.jpg',
        },
        {
            name: `跃涌之潮`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/ff5ccf1cb7f41dc3.jpg',
        },
        {
            name: `古老月光`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/cc9f57581641e9fe.jpg',
        },
        {
            name: `快速反应`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/4c810aa53e06e23a.jpg',
        },
        {
            name: `掠食时刻`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/1d3084335f7c3cbd.jpg',
        },
        {
            name: `古老者之血`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/814bf517d84adb3d.jpg',
        },
        {
            name: `凝结`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/b56f1ac0156111da.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dcf320df2f2cee30.jpg',
            'img/7524ad83b4386f13.jpg',
            'img/1088cfe3b1e33550.jpg',
            'img/b3cac668a14410d6.jpg',
            'img/a92f9ca0efb4b63d.jpg',
        ],
        weapon: [
            'img/9bce2259bf9bc5c8.jpg',
            'img/bef26266cb4db790.jpg',
            'img/95565b36d5359ee0.jpg',
            'img/f40b990c01fe56d5.jpg',
            'img/7f76a499dc104c7f.jpg',
        ],
    },
    portrait: 'img/c1e4eaacd225b03d.jpg',
}
