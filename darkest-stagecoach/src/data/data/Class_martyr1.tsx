// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_martyr1: ClassModData = {
    key: 'martyr1',
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
            image: 'img/900ce1f53bf925e5.jpg',
        },
        {
            name: `Hand of Rapture`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/c4162bca0ae80630.jpg',
        },
        {
            name: `Blood of Martyr`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/80c42b8e539e2a93.jpg',
        },
        {
            name: `Bearer of Sin`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9f708cd29e21389c.jpg',
        },
        {
            name: `Sign of Stigma`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/10202dac5efd980e.jpg',
        },
        {
            name: `Lazarus Gift`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5df71f7918dc0f19.jpg',
        },
        {
            name: `Iron Shroud`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/30b9165b3af3871b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ae944690c80be483.jpg',
            'img/3d508a6078f504f7.jpg',
            'img/dcb86f85da38b5af.jpg',
            'img/d98554d5baa6c1e1.jpg',
            'img/734244fe6f5f4ec1.jpg',
        ],
        weapon: [
            'img/323a1fb3c1510f0b.jpg',
            'img/30485874e182c479.jpg',
            'img/64140e58fe0f4b9e.jpg',
            'img/a54c7b10654f1ef0.jpg',
            'img/32ad3cac131be422.jpg',
        ],
    },
    portrait: 'img/33f4940a94f7d9eb.jpg',
}
