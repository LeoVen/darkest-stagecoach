// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_mambo1: ClassModData = {
    key: 'mambo1',
    name: `Mambo`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.01, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.19, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1865154690'
        }
    ],
    skills: [
        {
            name: `Papa Ghede's Blessing`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/f6a67f6324daa5ed.jpg',
        },
        {
            name: `You Dare!?`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/5dbc26a10cb89098.jpg',
        },
        {
            name: `Baron Samedi's Tobacco`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3054169a3df46180.jpg',
        },
        {
            name: ` Papa Legba’s Shadow`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/0680062007b1b393.jpg',
        },
        {
            name: `Husband’s Embrace`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3ec84664e6a25fb6.jpg',
        },
        {
            name: `Baron Kriminel’s Whip`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a02bf15c12783d70.jpg',
        },
        {
            name: `A Little Pinprick`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/33ebafece0b4f379.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b6735ddc645e7f24.jpg',
            'img/d16d1dbe263bdbaf.jpg',
            'img/a42052209afce038.jpg',
            'img/78de399906e528f0.jpg',
            'img/f72f77931b1f8d40.jpg',
        ],
        weapon: [
            'img/dc1aa7fe7efd7568.jpg',
            'img/867aa7f1738c2314.jpg',
            'img/040be3bef64e50c5.jpg',
            'img/b3b17f852fedb295.jpg',
            'img/28a436cf8c9e6bfd.jpg',
        ],
    },
    portrait: 'img/c2800a3aa7f10155.jpg',
}
