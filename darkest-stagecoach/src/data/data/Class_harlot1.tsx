// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_harlot1: ClassModData = {
    key: 'harlot1',
    name: `Harlot`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1860840141'
        }
    ],
    skills: [
        {
            name: `Hands Off!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/31e575954958483d.jpg',
        },
        {
            name: `Silk Hiding Steel`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/b7f7ae8ee196cd85.jpg',
        },
        {
            name: `Kiss of Death`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4449bef7fca2075e.jpg',
        },
        {
            name: `Heart of Gold`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a3b60840e874ecf2.jpg',
        },
        {
            name: `Flashin' the Goods`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/e5d994271cb8de21.jpg',
        },
        {
            name: `Hold Me Close`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/252c0af98a28ad29.jpg',
        },
        {
            name: `On the Prowl`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/10f42debfe644b2c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/13e034ba0da41c10.jpg',
            'img/4852a689f73c9a45.jpg',
            'img/40c6962f2446aa24.jpg',
            'img/86cd67cde720c292.jpg',
            'img/623db98e37ab6948.jpg',
        ],
        weapon: [
            'img/34b18fbfe75ae910.jpg',
            'img/4a024a517d98c9d4.jpg',
            'img/90fed8baa251d353.jpg',
            'img/b2ff16bd72bfd132.jpg',
            'img/85b7dc0bd1c399ac.jpg',
        ],
    },
    portrait: 'img/f845d86d09743497.jpg',
}
