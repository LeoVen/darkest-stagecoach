// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_vigilante1: ClassModData = {
    key: 'vigilante1',
    name: `Vigilante`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2738094975'
        }
    ],
    skills: [
        {
            name: `Execute`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b65b74c2c9769b3b.jpg',
        },
        {
            name: `Anticipation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5abd5750846fd409.jpg',
        },
        {
            name: `Free action
Cooldown: 1 rd
Wind Up`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/89b0e133a785472d.jpg',
        },
        {
            name: `Combo Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7845ed81d9167416.jpg',
        },
        {
            name: `Combo Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/2b5e1842e199d5e3.jpg',
        },
        {
            name: `Combo Chop`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f3feac63270d7fba.jpg',
        },
        {
            name: `Combo Throw`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/bae1f74f41931132.jpg',
        },
    ],
    equip: {
        armour: [
            'img/34b9077d87b99ee0.jpg',
            'img/70bd385d8269df95.jpg',
            'img/cf6be3fd50dc43de.jpg',
            'img/7294d4bede7d0853.jpg',
            'img/da28128c2e620a50.jpg',
        ],
        weapon: [
            'img/5a872ee5c4f45519.jpg',
            'img/28170f98bbd2d594.jpg',
            'img/4437ff67515c0e70.jpg',
            'img/e1c867251b8a786a.jpg',
            'img/ec3de186f0b758e6.jpg',
        ],
    },
    portrait: 'img/dc1d4d199c170fbb.jpg',
}
