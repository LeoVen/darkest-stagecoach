// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_beastmaster1: ClassModData = {
    key: 'beastmaster1',
    name: `Beastmaster`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [10.0, 13.0], crit: 0.09, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1747389796'
        }
    ],
    skills: [
        {
            name: `Feral Cuts`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d363b902cc115a96.jpg',
        },
        {
            name: `Unwavering`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/cb370fc65f78d41b.jpg',
        },
        {
            name: `Ravenous`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e78eb6fb18724bfa.jpg',
        },
        {
            name: `Cycle of Life`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1242a3f2a5127237.jpg',
        },
        {
            name: `Cougar's Leap`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/38c8a91a4525117b.jpg',
        },
        {
            name: `Bird of Prey`,
            launch: [false,false,false,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7f393769bb62e5e0.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Spirit of the Hunt`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4383a7d8a64cef00.jpg',
        },
    ],
    equip: {
        armour: [
            'img/26b9ae0ac62efd07.jpg',
            'img/8af3aacef24d0996.jpg',
            'img/8ecf3bbc6f2e8906.jpg',
            'img/a49683193927c0cc.jpg',
            'img/c7ed33ba5003bb8f.jpg',
        ],
        weapon: [
            'img/2036c660eeaf0d7c.jpg',
            'img/20b69057e534d1c0.jpg',
            'img/48a8c5ffda8c284c.jpg',
            'img/11c150c16a051e95.jpg',
            'img/f3e3b43d76227729.jpg',
        ],
    },
    portrait: 'img/2cfdc2f79e4576f4.jpg',
}
