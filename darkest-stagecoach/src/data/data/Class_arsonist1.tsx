// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arsonist1: ClassModData = {
    key: 'arsonist1',
    name: `Arsonist`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2255822193'
        }
    ],
    skills: [
        {
            name: `Slashing Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f2c1b017e23380ef.jpg',
        },
        {
            name: `Molotov Cocktail`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d44fc48ffb9b5ded.jpg',
        },
        {
            name: `Incinerate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/86964dfd87e19a25.jpg',
        },
        {
            name: `Hot-headed!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/507af6c88269ed38.jpg',
        },
        {
            name: `Smoke Bomb`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d6133e9c18b921a0.jpg',
        },
        {
            name: `Cleansing Fire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d7a5ee87a7383390.jpg',
        },
        {
            name: `Red Hot Poker`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/34e9dab6e9fb9279.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1766c6f2260ed9db.jpg',
            'img/12735ec1f09fbe02.jpg',
            'img/661f69386bb01f29.jpg',
            'img/1a9829641b5129e3.jpg',
            'img/53fa2e4214d45d15.jpg',
        ],
        weapon: [
            'img/8ac9a53181167367.jpg',
            'img/7db31cbd25ba380d.jpg',
            'img/de9dad60d3b84ccc.jpg',
            'img/b7500ce3323bf532.jpg',
            'img/61add4760ab83593.jpg',
        ],
    },
    portrait: 'img/0bbd3a8606a81241.jpg',
}
