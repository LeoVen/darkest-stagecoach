// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_paladin_1332249328: ClassModData = {
    key: 'paladin_1332249328',
    name: `Paladin`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1332249328'
        }
    ],
    skills: [
        {
            name: `Crusader Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5e71e608e24c2f4e.jpg',
        },
        {
            name: `Holy Light`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2bf4ec54ddbc346d.jpg',
        },
        {
            name: `Judgment`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c1749beefbe3dfa1.jpg',
        },
        {
            name: `Sacred Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2612302ba2e439a4.jpg',
        },
        {
            name: `Divine Storm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/9b0144fcbe27e4e5.jpg',
        },
        {
            name: `Blessing of Freedom`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/492445d792b2eda2.jpg',
        },
        {
            name: `Hammer of Justice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/003e3c34c0cbb779.jpg',
        },
    ],
    equip: {
        armour: [
            'img/92f3d8e125f78935.jpg',
            'img/b117031e0090dacb.jpg',
            'img/bb3619d768760ae4.jpg',
            'img/be5916c7c07b91c8.jpg',
            'img/ebb2974f1b8d49b1.jpg',
        ],
        weapon: [
            'img/403ccd121e2b2027.jpg',
            'img/6618755101991b7d.jpg',
            'img/3ee5b840286f9029.jpg',
            'img/1a6e099ef9ae5d96.jpg',
            'img/9607811e1590041d.jpg',
        ],
    },
    portrait: 'img/12d8810fb575a02a.jpg',
}
