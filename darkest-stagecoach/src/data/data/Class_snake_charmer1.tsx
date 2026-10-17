// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_snake_charmer1: ClassModData = {
    key: 'snake_charmer1',
    name: `Snake Charmer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [3.0, 9.0], crit: 0.1, speed: 4 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.11, speed: 5 },
            { accuracy: 0, damage: [4.0, 12.0], crit: 0.12, speed: 5 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.13, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1456853110'
        }
    ],
    skills: [
        {
            name: `Venomous Fangs`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e71bf306609cc447.jpg',
        },
        {
            name: `Mamba Dance`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3cebcde1dfc66d9a.jpg',
        },
        {
            name: `Feast`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/21fb5661b588d7e9.jpg',
        },
        {
            name: `Constriction`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/682e95f4827e69a6.jpg',
        },
        {
            name: `Rattling Trap`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5e40fd7a4e7c7066.jpg',
        },
        {
            name: `Vicious Charm`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3538404cb9dba2b1.jpg',
        },
        {
            name: `Calming Toxin`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b50df8506d9b0bd8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/beda0484029daedc.jpg',
            'img/a8adb361670fd00b.jpg',
            'img/b9f78d7120c92523.jpg',
            'img/9481040de7487d5c.jpg',
            'img/7cc1f57b323b1681.jpg',
        ],
        weapon: [
            'img/39f85c21cb52385e.jpg',
            'img/a6dd841ad77d91db.jpg',
            'img/0eec46aaf8a3c8d5.jpg',
            'img/4b9900f69304b80a.jpg',
            'img/ce8f06e35ed00def.jpg',
        ],
    },
    portrait: 'img/253277b823fed284.jpg',
}
