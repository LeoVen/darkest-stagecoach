// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_commissar1: ClassModData = {
    key: 'commissar1',
    name: `Commissar`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=955795133'
        }
    ],
    skills: [
        {
            name: `Pistol Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c5e0176c31c31cae.jpg',
        },
        {
            name: `"Get Up There!"`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `@`,
            },
            image: 'img/be45310f78fd070f.jpg',
        },
        {
            name: `"Fall Back!"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/adbe10319653c5ec.jpg',
        },
        {
            name: `"Stand Your Ground!"`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/5b05165de00efe66.jpg',
        },
        {
            name: `"Charge!"`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/58bb00ab284a1005.jpg',
        },
        {
            name: `"Medic!"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2f2ca07a0e9015ff.jpg',
        },
        {
            name: `Inspire Courage`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `@`,
            },
            image: 'img/ae8fc0bb519bde24.jpg',
        },
    ],
    equip: {
        armour: [
            'img/09960f7135ea0384.jpg',
            'img/ce3fba90d4a5a620.jpg',
            'img/d6704c7cd64e39a8.jpg',
            'img/0582ded3f2745d1b.jpg',
            'img/b985102d6ef3489c.jpg',
        ],
        weapon: [
            'img/12bfac08385fb93f.jpg',
            'img/8c2796bbb22dfe80.jpg',
            'img/8449dda47b443387.jpg',
            'img/525902a79d8c7857.jpg',
            'img/5a3f32f4bf474c9d.jpg',
        ],
    },
    portrait: 'img/45ba440b3bdd858a.jpg',
}
