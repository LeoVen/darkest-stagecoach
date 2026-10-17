// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_phantom1: ClassModData = {
    key: 'phantom1',
    name: `Phantom`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.55,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.13, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1445902568'
        }
    ],
    skills: [
        {
            name: `Assassinate`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/88f9bb9366e2a728.jpg',
        },
        {
            name: `Deatharang`,
            launch: [true,true,true,false],
            target: {
                targets: [true,false,false,true],
                mods: `~`,
            },
            image: 'img/d7bf48474af377f8.jpg',
        },
        {
            name: `Blind Throw`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/68abc127ab892233.jpg',
        },
        {
            name: `Vanishing Trick`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d6dcd53dc832d728.jpg',
        },
        {
            name: `Shadow Cloak`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0c01af5f67ce5303.jpg',
        },
        {
            name: `Marked Fate`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/3652f5fc059d6105.jpg',
        },
        {
            name: `Merciful Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/aeea619be40e10ac.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a18465b0ce00a82b.jpg',
            'img/0610ca0aee7c3ac8.jpg',
            'img/b170e9facd9c9eb9.jpg',
            'img/596d2155624553a3.jpg',
            'img/19c7699a74002e62.jpg',
        ],
        weapon: [
            'img/c8b500315bc3031d.jpg',
            'img/85e63a1a157eaf6d.jpg',
            'img/9deb293e0e5de9bc.jpg',
            'img/af03813db187a919.jpg',
            'img/6254f4983a017265.jpg',
        ],
    },
    portrait: 'img/013822ef5fc5431f.jpg',
}
