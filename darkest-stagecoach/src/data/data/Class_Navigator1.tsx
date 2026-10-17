// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_Navigator1: ClassModData = {
    key: 'Navigator1',
    name: `Navigator`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
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
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3232729723'
        }
    ],
    skills: [
        {
            name: `Behead`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c49dbddcbe982b3c.jpg',
        },
        {
            name: `Whirlwind`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1d398c448900d683.jpg',
        },
        {
            name: `Broadside`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a45a4cb40519fa2c.jpg',
        },
        {
            name: `Disrupt`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2c0c9ff3610e6e64.jpg',
        },
        {
            name: `Nullify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fd5e8a9c2a7a3f0a.jpg',
        },
        {
            name: `Singularity`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/54139e30888ac5f8.jpg',
        },
        {
            name: `Shooting Stars`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/58008827d9e9869c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fe03a57af36fb51d.jpg',
            'img/047b2011ac5c9822.jpg',
            'img/125d8dbe4c1f8593.jpg',
            'img/6ec7d87a3791cbc3.jpg',
            'img/009d68928833af6e.jpg',
        ],
        weapon: [
            'img/033c1f1ab7ea16ec.jpg',
            'img/9bf84e6252766119.jpg',
            'img/f4198f89aee3cbe6.jpg',
            'img/84ab0d0291408606.jpg',
            'img/cb38130d0cd8b370.jpg',
        ],
    },
    portrait: 'img/c3cefdcb15bb45aa.jpg',
}
