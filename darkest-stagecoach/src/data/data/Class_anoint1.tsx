// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_anoint1: ClassModData = {
    key: 'anoint1',
    name: `Anointed`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2378584809'
        }
    ],
    skills: [
        {
            name: `Sacred Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/095fd65399d07967.jpg',
        },
        {
            name: `Zealous Ire`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f7dddfbc9763674b.jpg',
        },
        {
            name: `Admonish`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e00f75cc0030b914.jpg',
        },
        {
            name: `Condemn`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/65930272312f9ba2.jpg',
        },
        {
            name: `Renew`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/44a19dad72496602.jpg',
        },
        {
            name: `Holy Obligation`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ce7a7e6000fbb49f.jpg',
        },
        {
            name: `Safeguard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4c16022b91a9b5fd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/82cbac962bcfd6ae.jpg',
            'img/1afdc813a57ff4a7.jpg',
            'img/30d96cc6cc0017f4.jpg',
            'img/7eca5bf6ba42ee7c.jpg',
            'img/04edaebf437f0541.jpg',
        ],
        weapon: [
            'img/e186b44d9def889c.jpg',
            'img/259480d9e1cdbe81.jpg',
            'img/c888422cfa8d6e8f.jpg',
            'img/fc1693891ae6fefc.jpg',
            'img/ee1c73ce729aaf41.jpg',
        ],
    },
    portrait: 'img/4b8d0aecce9383d9.jpg',
}
