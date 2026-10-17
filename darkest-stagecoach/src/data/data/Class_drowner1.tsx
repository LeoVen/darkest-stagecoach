// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_drowner1: ClassModData = {
    key: 'drowner1',
    name: `drowner`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 14.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 19.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [10.0, 22.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1595760408'
        }
    ],
    skills: [
        {
            name: `bite`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8490f592651a1fc5.jpg',
        },
        {
            name: `Assault`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d6b54988693cb073.jpg',
        },
        {
            name: `Exodia`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3d4c81db5a63b9b8.jpg',
        },
        {
            name: `bombard`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8b7c778cf37d4605.jpg',
        },
        {
            name: `Hammer`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/279de6adbb224223.jpg',
        },
        {
            name: `Contagion`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/07a6b90b89eb8842.jpg',
        },
        {
            name: `Purify`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/278d54d8b97fdeb2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/72182a156254b585.jpg',
            'img/3b853fae56f332ad.jpg',
            'img/b82615c6c22106f4.jpg',
            'img/00373ceef1b1e0f2.jpg',
            'img/7aae5c953c141a53.jpg',
        ],
        weapon: [
            'img/452cc1dc32eb2104.jpg',
            'img/23f4671f89f585f5.jpg',
            'img/23e0b51de2df1d44.jpg',
            'img/a2b70cbbe2e3d8a8.jpg',
            'img/56d8daac68f300b4.jpg',
        ],
    },
    portrait: 'img/a0a2b1fe92dd86c8.jpg',
}
