// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_reaver_948931447: ClassModData = {
    key: 'reaver_948931447',
    name: `Reaver`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 58, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.085, speed: 5 },
            { accuracy: 0, damage: [6.0, 16.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.095, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=948931447'
        }
    ],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/54e37969f5a0c1ae.jpg',
        },
        {
            name: `Buckshot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/60615f26edeae1f5.jpg',
        },
        {
            name: `Raid Commander`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/59f1fe006ca19073.jpg',
        },
        {
            name: `Stand and Deliver`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9afaa94509320437.jpg',
        },
        {
            name: `Return Fire`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/336a8729825cabee.jpg',
        },
        {
            name: `Expose`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9a7fe38d8bb31ffd.jpg',
        },
        {
            name: `Cowering Fire`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/43fcc37b7e4051b5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/57d07a47aa4929ae.jpg',
            'img/ed081b7c4240654e.jpg',
            'img/b8d61a07ecd662de.jpg',
            'img/811aa484df09dd84.jpg',
            'img/99252fd6813df5ec.jpg',
        ],
        weapon: [
            'img/f28dd8511ab2633f.jpg',
            'img/8d8767d2f17a00aa.jpg',
            'img/21e0ee065f37090f.jpg',
            'img/cb2db9250630951c.jpg',
            'img/23b2d2f6deb4c586.jpg',
        ],
    },
    portrait: 'img/c0723e1ffc620100.jpg',
}
