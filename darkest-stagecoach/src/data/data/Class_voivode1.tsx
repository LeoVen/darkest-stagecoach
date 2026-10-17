// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_voivode1: ClassModData = {
    key: 'voivode1',
    name: `Voivode`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.5,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: -0.6
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 12.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1533032528'
        }
    ],
    skills: [
        {
            name: `Transform`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1a284898ad87705d.jpg',
        },
        {
            name: `Flock of Bats`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1cd5db69aba6cfc6.jpg',
        },
        {
            name: `Obey!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/38d867a57de7bb4d.jpg',
        },
        {
            name: `Shadowplay`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/03d3c9db89f44140.jpg',
        },
        {
            name: `Soulfeast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f0e25ecb53a26b3b.jpg',
        },
        {
            name: `Rising`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/9ec24a1dfeda2d98.jpg',
        },
        {
            name: `Echolocate`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1c87f0edf2f33df8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dea65d270ff438e8.jpg',
            'img/bd7fe79d9a4c7bc2.jpg',
            'img/238108d532e17cd4.jpg',
            'img/3dc3758569410bd6.jpg',
            'img/29982fe6ddc0f201.jpg',
        ],
        weapon: [
            'img/3b9e079fac120118.jpg',
            'img/606488e0022c4037.jpg',
            'img/479633655e4cda4c.jpg',
            'img/6f3664134d0789df.jpg',
            'img/069cef9474ecf6dc.jpg',
        ],
    },
    portrait: 'img/e40ecc07f4d3b3b9.jpg',
}
