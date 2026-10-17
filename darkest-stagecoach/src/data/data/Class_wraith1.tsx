// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wraith1: ClassModData = {
    key: 'wraith1',
    name: `Wraith`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.6,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.76,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1441036778'
        }
    ],
    skills: [
        {
            name: `Phantom Strike`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8e873c08a89f15d9.jpg',
        },
        {
            name: `Reaping Evisceration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/61e8bea6d20672e3.jpg',
        },
        {
            name: `Sinister Flurry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/9a8ab46e0eda3817.jpg',
        },
        {
            name: `Devious Ambush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/332e7b0347d4e46d.jpg',
        },
        {
            name: `Scattering Dread`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/9b6afdc1048d33a9.jpg',
        },
        {
            name: `Soul Harvest`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e769c17f0c090d79.jpg',
        },
        {
            name: `Grim Shade`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8ab30fadf9e32f4d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/44328e31b6753873.jpg',
            'img/77576528d17a6336.jpg',
            'img/309b180e3ecd8e63.jpg',
            'img/7b39043b9bac6625.jpg',
            'img/952c924798ffd34b.jpg',
        ],
        weapon: [
            'img/617f08d4be6f8c84.jpg',
            'img/370a97639d5ed14e.jpg',
            'img/6f42bf856763c98c.jpg',
            'img/a307a557ed6e58ab.jpg',
            'img/cd6eeeaba2e6f639.jpg',
        ],
    },
    portrait: 'img/ef4c058c35b5b78e.jpg',
}
