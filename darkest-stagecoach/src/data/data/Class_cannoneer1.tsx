// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cannoneer1: ClassModData = {
    key: 'cannoneer1',
    name: `Cannoneer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 7.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [3.0, 8.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.07, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=912030977'
        }
    ],
    skills: [
        {
            name: `Light the Fuse`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5ea0891b1e48423f.jpg',
        },
        {
            name: `Kaboom`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7004873825964999.jpg',
        },
        {
            name: `Rocket Jump`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/221ba10426819f70.jpg',
        },
        {
            name: `Bombardment`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/dd6e2dbf4d4d6c30.jpg',
        },
        {
            name: `Shrapnel Blast`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a035a9d079b35f4c.jpg',
        },
        {
            name: `Minefield`,
            launch: [true,true,true,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/456b258adc60eb3c.jpg',
        },
        {
            name: `"On My Mark"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d15e041b76931257.jpg',
            'img/0242304559530f30.jpg',
            'img/883e00f554532500.jpg',
            'img/19136e6353d4c6f7.jpg',
            'img/d6e6785abbca2400.jpg',
        ],
        weapon: [
            'img/e9112ac830641851.jpg',
            'img/0492b7ad269fed3b.jpg',
            'img/29122c31276a4d41.jpg',
            'img/b70b32dc75b80f34.jpg',
            'img/85aaae4c46a24664.jpg',
        ],
    },
    portrait: 'img/70a6d9770715b673.jpg',
}
