// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_commander1: ClassModData = {
    key: 'commander1',
    name: `Magician`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.45,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.12, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2384801499'
        }
    ],
    skills: [
        {
            name: `Grasp of Death`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/09059be345081f8e.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Time acceleration`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/71f4faf7b2b07c68.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Reorganization`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/eb495379f0bd6032.jpg',
        },
        {
            name: `Chain of thunderbolts/The other side`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/ca1af03b986dbb0e.jpg',
        },
        {
            name: `Neutralization`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d331721b8902214e.jpg',
        },
        {
            name: `Mental oppression`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/77d1e394976959ef.jpg',
        },
        {
            name: `Tactical change`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4e81208bd9ce9f39.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8ff0b44da37d90c1.jpg',
            'img/9025e28503881cb0.jpg',
            'img/e4a0d260f933f6fc.jpg',
            'img/f34c5c81e63fa068.jpg',
            'img/d8c308f03659d462.jpg',
        ],
        weapon: [
            'img/99d6741f13c0f2a1.jpg',
            'img/8e9417d9b7a166a7.jpg',
            'img/4eddd30996076e82.jpg',
            'img/6d7eec7e2076c4db.jpg',
            'img/3fef1af3a3bb20e8.jpg',
        ],
    },
    portrait: 'img/0f190104e10baf1f.jpg',
}
