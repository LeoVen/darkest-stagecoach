// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_babicka1: ClassModData = {
    key: 'babicka1',
    name: `Babička`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.2,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 53, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2389811450'
        }
    ],
    skills: [
        {
            name: `Practiced Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/fca06a725004f6db.jpg',
        },
        {
            name: `Shelling`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/6df6cb3655cdff98.jpg',
        },
        {
            name: `Scold`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f3125c24e097c55f.jpg',
        },
        {
            name: `Get Behind Me!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/409c0c561ee981bc.jpg',
        },
        {
            name: `Motherly Care`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/77b5be5a475fecfd.jpg',
        },
        {
            name: `Share Wisdom`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/c24b799d3d387b99.jpg',
        },
        {
            name: `Muzzle Flash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1dc76ca83f3aad79.jpg',
        },
    ],
    equip: {
        armour: [
            'img/85575a1b1c747b37.jpg',
            'img/a86bb9f317882a07.jpg',
            'img/129056cbe0f0f83a.jpg',
            'img/a6f36841d919375b.jpg',
            'img/f75b2430db9a0da8.jpg',
        ],
        weapon: [
            'img/4e9b5b2e39c9c48c.jpg',
            'img/37dda9b352fdb865.jpg',
            'img/73131b5bd0f5c57f.jpg',
            'img/7da993bcc3c46fe9.jpg',
            'img/b1fbb6798838fe53.jpg',
        ],
    },
    portrait: 'img/be9854a4f2fd22e4.jpg',
}
