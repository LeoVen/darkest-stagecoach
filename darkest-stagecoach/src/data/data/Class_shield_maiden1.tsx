// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shield_maiden1: ClassModData = {
    key: 'shield_maiden1',
    name: `Shield Maiden`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.7,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0.05, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 39, speed: 0 },
            { dodge: 0.15, prot: 0.07, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0.07, hp: 53, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=963658853'
        }
    ],
    skills: [
        {
            name: `Cross Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6f079dc1ef162e53.jpg',
        },
        {
            name: `Front Guard`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `@~`,
            },
            image: 'img/bd65b51a7260007f.jpg',
        },
        {
            name: `Ram Shield`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/84e6a3d0f1a8c494.jpg',
        },
        {
            name: `Avenger`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7d84777b667ea65b.jpg',
        },
        {
            name: `Guardian`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/34aa7c39db005e66.jpg',
        },
        {
            name: `Mending Touch`,
            launch: [false,false,false,true],
            target: {
                targets: [false,true,true,false],
                mods: `@`,
            },
            image: 'img/4687b50bd378b0be.jpg',
        },
        {
            name: `Indomitable`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7bd0f971e4a6caee.jpg',
        },
    ],
    equip: {
        armour: [
            'img/628d84ebcc5aab94.jpg',
            'img/30d1424a10ba9913.jpg',
            'img/1c97319bfdc492c9.jpg',
            'img/dd968aca6d54bec9.jpg',
            'img/4fad0c295b99eb7b.jpg',
        ],
        weapon: [
            'img/73fbbdb2e23752d8.jpg',
            'img/22b82479ed965ecb.jpg',
            'img/26039d194d344538.jpg',
            'img/24fcb6f881ac4e48.jpg',
            'img/d3abb96404bad4b8.jpg',
        ],
    },
    portrait: 'img/f44c276dbe7edde3.jpg',
}
