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
            image: 'img/4b314fc6fc8aefd8.jpg',
        },
        {
            name: `"Get Up There!"`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `@`,
            },
            image: 'img/ba6bc831944020c7.jpg',
        },
        {
            name: `"Fall Back!"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/b604d464a85b5dd2.jpg',
        },
        {
            name: `"Stand Your Ground!"`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/6e7cb84e75f6a1f9.jpg',
        },
        {
            name: `"Charge!"`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3c5a18e67c10d9da.jpg',
        },
        {
            name: `"Medic!"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/59bf3516dd30b07f.jpg',
        },
        {
            name: `Inspire Courage`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `@`,
            },
            image: 'img/19de64e70db36097.jpg',
        },
    ],
    equip: {
        armour: [
            'img/51a7b76f5440786e.jpg',
            'img/6821f93144e30c18.jpg',
            'img/6fec6be66c73c272.jpg',
            'img/15b9ba5bad3edd38.jpg',
            'img/ad7881655437489f.jpg',
        ],
        weapon: [
            'img/0217fec22bc693e5.jpg',
            'img/278b4011f159f75b.jpg',
            'img/a00736a2f607560b.jpg',
            'img/c3b172c81393b2c7.jpg',
            'img/ea2f347cdd8df590.jpg',
        ],
    },
    portrait: 'img/6383145df2ec05ff.jpg',
}
