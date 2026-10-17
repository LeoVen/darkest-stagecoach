// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_chaplain11: ClassModData = {
    key: 'chaplain11',
    name: `Chaplain`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.08, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2321328188'
        }
    ],
    skills: [
        {
            name: `Thrust`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/132fb5fb4b036ee1.jpg',
        },
        {
            name: `Mordhau`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b483cebddfda8b50.jpg',
        },
        {
            name: `Heavenly Wrath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/12dffea95e17a625.jpg',
        },
        {
            name: `Radiance`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/207160331e1f45e3.jpg',
        },
        {
            name: `Fortify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a1e59b25aaca624f.jpg',
        },
        {
            name: `Paragon's Pact`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ae3cef2c21bf7961.jpg',
        },
        {
            name: `Martyr's Brand`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5ff29225e1aa607e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/22f3f89249e5e41a.jpg',
            'img/12a9132b03899b15.jpg',
            'img/75ddb522a32457b6.jpg',
            'img/3007faef375ab5d0.jpg',
            'img/bee5adbe79728517.jpg',
        ],
        weapon: [
            'img/95e586713957cb6c.jpg',
            'img/79721d4766d1c12a.jpg',
            'img/d7610928a3b5a203.jpg',
            'img/ea35eb33ce8e7556.jpg',
            'img/d248e5ffa8bfe7ba.jpg',
        ],
    },
    portrait: 'img/95e236ef7368f6c8.jpg',
}
