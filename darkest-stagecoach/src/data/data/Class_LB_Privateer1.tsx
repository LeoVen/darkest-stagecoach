// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_LB_Privateer1: ClassModData = {
    key: 'LB_Privateer1',
    name: `Privateer`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2830677403'
        }
    ],
    skills: [
        {
            name: `Strike Them Down!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/438c5bdbaa7d8977.jpg',
        },
        {
            name: `Hunt Them Down`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0e1bb7a6c0f4f779.jpg',
        },
        {
            name: `Bottle O' Rum`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8e27d1ed9c1e4c2d.jpg',
        },
        {
            name: `Dead Ahead`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/14498644eca15e95.jpg',
        },
        {
            name: `The Duckfoot`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/5efa9e90f0e045f4.jpg',
        },
        {
            name: `Barrel O' Gunpowder`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/c5e35239beeb9a5d.jpg',
        },
        {
            name: `Flames of the Sea`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/29fb037cf82cbcc2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/10aca5318b99d453.jpg',
            'img/b072ecf8f53bd268.jpg',
            'img/cc45e1fd4d1bc933.jpg',
            'img/93958cdcf109c817.jpg',
            'img/286f41cc29aa1f2f.jpg',
        ],
        weapon: [
            'img/7b680ee5142de8a7.jpg',
            'img/a773c85885a74844.jpg',
            'img/96299bbb0ec3bf0c.jpg',
            'img/7a7b1424cf6a7783.jpg',
            'img/d103ff78e487685e.jpg',
        ],
    },
    portrait: 'img/c6bee748663cab79.jpg',
}
