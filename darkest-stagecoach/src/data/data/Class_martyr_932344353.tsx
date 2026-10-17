// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_martyr_932344353: ClassModData = {
    key: 'martyr_932344353',
    name: `Martyr`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.1,
        disease: 0.1,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.7,
        trap: 0.05
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 61, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 68, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.06, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=932344353'
        }
    ],
    skills: [
        {
            name: `Touch of Judgment`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/74eae5ee4c2129c7.jpg',
        },
        {
            name: `Hand of Rapture`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/bb12fac4695146ec.jpg',
        },
        {
            name: `Blood of Martyr`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/74a8cc30580eae4d.jpg',
        },
        {
            name: `Bearer of Sin`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d0ce62053c432a00.jpg',
        },
        {
            name: `Sign of Stigma`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/be6eb9822cb38cb8.jpg',
        },
        {
            name: `Lazarus Gift`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/55b2cca733dfd575.jpg',
        },
        {
            name: `Iron Shroud`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7a9426aee22fa302.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e11c49426e406c7.jpg',
            'img/0687accc1fc8ed04.jpg',
            'img/130af7f06c7967bb.jpg',
            'img/209f4b4f5dbb1223.jpg',
            'img/e41ec380d831ca01.jpg',
        ],
        weapon: [
            'img/3f15411dfe1e54c1.jpg',
            'img/e9228252b7595e95.jpg',
            'img/88817d241519de9b.jpg',
            'img/6bb89ab55dbe166a.jpg',
            'img/00512879949c714e.jpg',
        ],
    },
    portrait: 'img/57b31267ea8d5e49.jpg',
}
