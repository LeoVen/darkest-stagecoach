// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_armor1: ClassModData = {
    key: 'armor1',
    name: `Armor`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 2,
        disease: 2,
        move: 0.3,
        debuff: 0,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.2, hp: 25, speed: 0 },
            { dodge: 0, prot: 0.25, hp: 27, speed: 0 },
            { dodge: 0, prot: 0.3, hp: 29, speed: 0 },
            { dodge: 0, prot: 0.35, hp: 31, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 33, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 0 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.07, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2931052996'
        }
    ],
    skills: [
        {
            name: `Execute`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ab21bb2f95a0f719.jpg',
        },
        {
            name: `Chop`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1538094f86b3bed7.jpg',
        },
        {
            name: `Offensive Gesture`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/15fbd0f85419e1fc.jpg',
        },
        {
            name: `Staring`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/197145a062039835.jpg',
        },
        {
            name: `Repair`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/310a4ac546245677.jpg',
        },
        {
            name: `Dizzying Light`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d902d205a52c0809.jpg',
        },
        {
            name: `Defensive Gesture`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c164190edd749ef1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8ce9b6a0b7738ac0.jpg',
            'img/0bef4a3357d0bb89.jpg',
            'img/40ce861815f2a5d2.jpg',
            'img/ccb95667c3b576a1.jpg',
            'img/9fef94cacd1d748a.jpg',
        ],
        weapon: [
            'img/38fc3f000da10c33.jpg',
            'img/012b1fca7553d602.jpg',
            'img/1f67dddfa2a43871.jpg',
            'img/f421de1335260486.jpg',
            'img/e2474f4fd3a1645c.jpg',
        ],
    },
    portrait: 'img/7dc400606f1beb12.jpg',
}
