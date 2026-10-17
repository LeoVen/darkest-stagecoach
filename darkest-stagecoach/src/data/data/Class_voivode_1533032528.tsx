// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_voivode_1533032528: ClassModData = {
    key: 'voivode_1533032528',
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
            image: 'img/936b2ca404928487.jpg',
        },
        {
            name: `Flock of Bats`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/29b4da52fe26e89a.jpg',
        },
        {
            name: `Obey!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3c7e485600ad8429.jpg',
        },
        {
            name: `Shadowplay`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b64fa632bca49d23.jpg',
        },
        {
            name: `Soulfeast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/48c050b7a806a75e.jpg',
        },
        {
            name: `Rising`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/c8449c4cef23bd54.jpg',
        },
        {
            name: `Echolocate`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a9c6a8aa753f5074.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dac2b3831ae440d6.jpg',
            'img/50cd66d393a1e63a.jpg',
            'img/d50329393f29d2d7.jpg',
            'img/2a61df071329eb19.jpg',
            'img/00f4b6f1228ff6c4.jpg',
        ],
        weapon: [
            'img/21fde912c10ccb66.jpg',
            'img/a3f12d83c7122903.jpg',
            'img/639aa93a2c397068.jpg',
            'img/14c3c85f95c9b400.jpg',
            'img/fd3d0f4c51aaaa84.jpg',
        ],
    },
    portrait: 'img/40e8127d87f0c201.jpg',
}
