// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warlord1: ClassModData = {
    key: 'warlord1',
    name: `Warlord`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.8,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 58, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2826625720'
        }
    ],
    skills: [
        {
            name: `Brutal Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3ebefeda228fa8d2.jpg',
        },
        {
            name: `Horn Rush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6e9186256b7142fa.jpg',
        },
        {
            name: `Trampling Withdrawal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fbdbdf152886ffd8.jpg',
        },
        {
            name: `Sentinel`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `@~`,
            },
            image: 'img/0c574ed3c653f381.jpg',
        },
        {
            name: `Who’s Next?`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/703cbc2cd9742133.jpg',
        },
        {
            name: `Triumph`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f599c8218a7c6d10.jpg',
        },
        {
            name: `Advance / Retreat`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ae9b5ad9821a0029.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2a3c71d183f075b9.jpg',
            'img/4986d4473d15da8d.jpg',
            'img/345deb9b0e4b2449.jpg',
            'img/cbbd1586d55a9363.jpg',
            'img/30cf6166473eb34d.jpg',
        ],
        weapon: [
            'img/c88e73894f543370.jpg',
            'img/a9339d90a7225ded.jpg',
            'img/b0dbac56daecc426.jpg',
            'img/d2b5fe12290ce718.jpg',
            'img/aa7bc4d92a3b9b21.jpg',
        ],
    },
    portrait: 'img/2fd40343fc8fbf29.jpg',
}
