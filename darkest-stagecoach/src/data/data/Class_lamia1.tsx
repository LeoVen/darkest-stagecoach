// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lamia1: ClassModData = {
    key: 'lamia1',
    name: `Lamia`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        }
    ],
    skills: [
        {
            name: `The Veil`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/00d6a2f27b53e629.jpg',
        },
        {
            name: `Cleansing Tide`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c0997d6eab217ebc.jpg',
        },
        {
            name: `Arietta`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0ccafb1a9a3cad52.jpg',
        },
        {
            name: `Allure`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a48612f0023874b9.jpg',
        },
        {
            name: `Petrifying Gaze`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/709badfbc7ffb0ef.jpg',
        },
        {
            name: `Slither`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/14816085e581b17e.jpg',
        },
        {
            name: `Hiss`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/781433a841300362.jpg',
        },
    ],
    equip: {
        armour: [
            'img/78a67a95d9b6b6f8.jpg',
            'img/e3d9aa646f2e5841.jpg',
            'img/a401ab8ab04cffd8.jpg',
            'img/da52562df659b253.jpg',
            'img/966aec2fc614e711.jpg',
        ],
        weapon: [
            'img/1089e3cbe778a497.jpg',
            'img/86c94af67fe9f0c3.jpg',
            'img/d0d945b20fd0ec6c.jpg',
            'img/3173e5ba8bb44480.jpg',
            'img/db945b8625b46745.jpg',
        ],
    },
    portrait: 'img/d62e3ac2168f5db4.jpg',
}
