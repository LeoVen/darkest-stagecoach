// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_LRbbit1: ClassModData = {
    key: 'LRbbit1',
    name: `Myo`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.6,
        blight: 0.6,
        bleed: 0.5,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [4.0, 15.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 16.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 18.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 20.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2519100522'
        }
    ],
    skills: [
        {
            name: `单点射击`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/98f4382c13c64f19.jpg',
        },
        {
            name: `穿透射击`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/93c981c572284878.jpg',
        },
        {
            name: `蓄能射击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/12cf6acfba46e388.jpg',
        },
        {
            name: `动若脱兔`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/82013031dcabf1e0.jpg',
        },
        {
            name: `撕咬鲜草`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/4ce5edf510b32f7d.jpg',
        },
        {
            name: `快速压制`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/3ab365b2ce49c248.jpg',
        },
        {
            name: `狂暴血刃`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/508f3dd9015bc312.jpg',
        },
        {
            name: `狡兔三窟`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0d276da4d46e2782.jpg',
        },
    ],
    equip: {
        armour: [
            'img/41de44a16021620d.jpg',
            'img/5a305c60988fee07.jpg',
            'img/065963221352adc5.jpg',
            'img/53d7afca331b2d59.jpg',
            'img/3ccc4f8eb5d76665.jpg',
        ],
        weapon: [
            'img/f07ac754f33c29c8.jpg',
            'img/44d0460309b09e0a.jpg',
            'img/ab95ad918f6a39be.jpg',
            'img/00b0c79d1a25090b.jpg',
            'img/d9989ab068ef8423.jpg',
        ],
    },
    portrait: 'img/892e79f8db477580.jpg',
}
