// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bluesman_bet1: ClassModData = {
    key: 'bluesman_bet1',
    name: `Bluesman`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 4.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [2.0, 5.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2085895105'
        }
    ],
    skills: [
        {
            name: `Close Shave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/740b83c71807e17d.jpg',
        },
        {
            name: `Singin’ the Blues`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/5d8ed2d3eb616380.jpg',
        },
        {
            name: `The Crossroads`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/852ab7839693c898.jpg',
        },
        {
            name: `Move Yo’ Feet`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/184139a3110b82b1.jpg',
        },
        {
            name: `From the Otherside`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/90b6ab92b24e3334.jpg',
        },
        {
            name: `I See Said...`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2883648adc26915f.jpg',
        },
        {
            name: `StaggerLee Slash`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/312d471dc168800b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e99e7edf809f8873.jpg',
            'img/65b1f6ccccbc9e93.jpg',
            'img/1a62697dd4b4a944.jpg',
            'img/6c0f7ecddcec2567.jpg',
            'img/b672bb9aeac7db1d.jpg',
        ],
        weapon: [
            'img/188fdaa361e6196a.jpg',
            'img/35e49bfb2f4bf5ea.jpg',
            'img/5bcb2c019a7117bf.jpg',
            'img/e5a52b37118a8cb7.jpg',
            'img/a694e3c800df13b8.jpg',
        ],
    },
    portrait: 'img/bdc0ee1f9b73584f.jpg',
}
