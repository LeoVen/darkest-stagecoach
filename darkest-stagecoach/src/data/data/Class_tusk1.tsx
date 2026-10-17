// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tusk1: ClassModData = {
    key: 'tusk1',
    name: `Tusk`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.6,
        move: 0.4,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.4
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
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1123633838'
        }
    ],
    skills: [
        {
            name: `Big Game`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0581438ff3531cce.jpg',
        },
        {
            name: `Bite Me`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d6f6f8081526edbb.jpg',
        },
        {
            name: `Mastodon`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b1b48aa44d346e75.jpg',
        },
        {
            name: `Ram`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3e6f33af36616571.jpg',
        },
        {
            name: `Spit`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/f630827ac9ab4771.jpg',
        },
        {
            name: `Irascible`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7e5b09da979a1da1.jpg',
        },
        {
            name: `Trample`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/330c7ec80598ab0b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8b124f1546b6dd1f.jpg',
            'img/09b02da2fa24a1f4.jpg',
            'img/669eee533903dd13.jpg',
            'img/376c13abd2fc02f4.jpg',
            'img/64ef7e01f741adf2.jpg',
        ],
        weapon: [
            'img/fdba615377b7a1d7.jpg',
            'img/c1506f208e550988.jpg',
            'img/5fac3a3f0f8f3e7c.jpg',
            'img/f26c87cddb2c245d.jpg',
            'img/4d5451e06171e76d.jpg',
        ],
    },
    portrait: 'img/f58a08723ca2b7fb.jpg',
}
