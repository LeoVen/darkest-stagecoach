// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_twilight_knight1: ClassModData = {
    key: 'twilight_knight1',
    name: `Twilight Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [11.0, 17.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [12.0, 18.0], crit: 0.08, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1154908982'
        }
    ],
    skills: [
        {
            name: `Soothing Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e52118964c50136b.jpg',
        },
        {
            name: `Whirlwind Attack`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/bd144a20872b41a6.jpg',
        },
        {
            name: `Slay the Beast`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f45559753c5c9a92.jpg',
        },
        {
            name: `Strike to Stun`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e4cf1b8ffda2460e.jpg',
        },
        {
            name: `Glimmer of Hope`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/377863e80e121024.jpg',
        },
        {
            name: `Anticipation`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9107d9bc6e188aa7.jpg',
        },
        {
            name: `Leap of Faith`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/801d04f6c659fdb1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/597affe1fa38836a.jpg',
            'img/9434dce693dc3a24.jpg',
            'img/64d23367a962dde2.jpg',
            'img/086d8cc23a3989ce.jpg',
            'img/495325803fd0daab.jpg',
        ],
        weapon: [
            'img/c5cc500a09a6e9a5.jpg',
            'img/9123ba79fcfe31d5.jpg',
            'img/774c3d666dc42807.jpg',
            'img/a1a670a7d728aeb6.jpg',
            'img/6762f38d2e778837.jpg',
        ],
    },
    portrait: 'img/fa9da9782cd2cb51.jpg',
}
