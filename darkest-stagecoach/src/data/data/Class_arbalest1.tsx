// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arbalest1: ClassModData = {
    key: 'arbalest1',
    name: `Arbalest`,
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
            name: `Sniper Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4f2b02ee7381bd60.jpg',
        },
        {
            name: `Suppressing Fire`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/95c0a8e748744f05.jpg',
        },
        {
            name: `Sniper's Mark`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `Bola`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d54ed28f854cc80c.jpg',
        },
        {
            name: `Blindfire`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/493d427f8736f8ee.jpg',
        },
        {
            name: `Battlefield Bandage`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/59bf3516dd30b07f.jpg',
        },
        {
            name: `Rallying Flare`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6e32e21fd05e70da.jpg',
        },
    ],
    equip: {
        armour: [
            'img/81f4de7d86c35942.jpg',
            'img/718aee4b1e014903.jpg',
            'img/d30e12a718040854.jpg',
            'img/8a3d1bdf813b3536.jpg',
            'img/a5a5f4845d5ff3d2.jpg',
        ],
        weapon: [
            'img/675827e651d33fc7.jpg',
            'img/ffd28626174ec490.jpg',
            'img/29b5ac0465d70039.jpg',
            'img/7fabc93a6b1f2ca1.jpg',
            'img/71cf4f50e7460ae7.jpg',
        ],
    },
    portrait: 'img/9c1ecdf5e226482f.jpg',
}
