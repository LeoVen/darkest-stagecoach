// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dis_trapper1: ClassModData = {
    key: 'dis_trapper1',
    name: `Trapper`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3362800212'
        }
    ],
    skills: [
        {
            name: `Fungal Claw`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d62f13f0172c4b4f.jpg',
        },
        {
            name: `From Above`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/fe66f1bdaeaf45a3.jpg',
        },
        {
            name: `Confusion Spores`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ed1103af7843c5cb.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Defensive Traps`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2cf40ca8a22f4075.jpg',
        },
        {
            name: `Skin Prey`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a5d8bef2024f3454.jpg',
        },
        {
            name: `Slink Back`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ac91fd8954639a25.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Medicinal Spores`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/cc9d00f7331e666b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/716b29345a7fcc66.jpg',
            'img/d60179851d813f93.jpg',
            'img/f8d0fc10467ea026.jpg',
            'img/00307e9e09b11ddd.jpg',
            'img/7e8febb6505336ef.jpg',
        ],
        weapon: [
            'img/552e7f2ef63b4e06.jpg',
            'img/c64ce285af8920bf.jpg',
            'img/586b2b2490b52d9d.jpg',
            'img/891d10118f9da980.jpg',
            'img/ea4dc22322f597bf.jpg',
        ],
    },
    portrait: 'img/0eab02857b641821.jpg',
}
