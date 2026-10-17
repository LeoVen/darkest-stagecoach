// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_picaroon1: ClassModData = {
    key: 'picaroon1',
    name: `Picaroon`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.32, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1856292904'
        }
    ],
    skills: [
        {
            name: `Dancing Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e12a8839027fb3d2.jpg',
        },
        {
            name: `Piercing Volley`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/78bd10088ebd36fa.jpg',
        },
        {
            name: `Tumultuous Cannon`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/f4e92e76b73a0cfd.jpg',
        },
        {
            name: `Shredding Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b10627c8e24b4b54.jpg',
        },
        {
            name: `Noxious Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/d08a2faed67dd896.jpg',
        },
        {
            name: `For The Sunken`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0e9c03979b7ed0e5.jpg',
        },
        {
            name: `Prurient Kiss`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f06655a8998b3351.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f55cc261da4ceb66.jpg',
            'img/eb3c222cdfc2f437.jpg',
            'img/d6130e44eb1a16f1.jpg',
            'img/fe4d818728ed3100.jpg',
            'img/af7db228d50b8e96.jpg',
        ],
        weapon: [
            'img/6355832f460a5d18.jpg',
            'img/711ba470b47ef68d.jpg',
            'img/9c9247bb3d523b66.jpg',
            'img/8bc4f5edb3e356e3.jpg',
            'img/95f3a117ed91024d.jpg',
        ],
    },
    portrait: 'img/1f72d19c7f0877bc.jpg',
}
