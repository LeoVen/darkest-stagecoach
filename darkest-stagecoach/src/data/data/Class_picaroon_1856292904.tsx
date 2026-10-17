// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_picaroon_1856292904: ClassModData = {
    key: 'picaroon_1856292904',
    name: `Picaroon`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.32, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1856292904'
        }
    ],
    skills: [
        {
            name: `Dancing Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ad6606e5e197186d.jpg',
        },
        {
            name: `Piercing Volley`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/700f8a57cc1e751d.jpg',
        },
        {
            name: `Tumultuous Cannon`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/b11682599609ec24.jpg',
        },
        {
            name: `Shredding Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/91614ec63ec615da.jpg',
        },
        {
            name: `Noxious Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/f1c9135336e81330.jpg',
        },
        {
            name: `For The Sunken`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/390dfe14b7ad6cd0.jpg',
        },
        {
            name: `Prurient Kiss`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3ce7b933175592c0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0939088ecfaef5ef.jpg',
            'img/c9098889a9463d5e.jpg',
            'img/f12077d7092290fb.jpg',
            'img/0d86556416b9cad0.jpg',
            'img/67a343c311080628.jpg',
        ],
        weapon: [
            'img/aad55cd78c61e27a.jpg',
            'img/b26bcb4c2f947559.jpg',
            'img/1d1f68aca3691c1a.jpg',
            'img/9a6f351daf235e8b.jpg',
            'img/22bf0a9eeb5d33ac.jpg',
        ],
    },
    portrait: 'img/5b16172db3cd0276.jpg',
}
