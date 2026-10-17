// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_keeper1: ClassModData = {
    key: 'keeper1',
    name: `Keeper`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1688250816'
        }
    ],
    skills: [
        {
            name: `Writhe`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/bb339d9cf62074b2.jpg',
        },
        {
            name: `Convalescence`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/21b2882ad80dfa7c.jpg',
        },
        {
            name: `Rebirth`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f447d61602ade37d.jpg',
        },
        {
            name: `Daemon's Yoke`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3269ca50932a50cf.jpg',
        },
        {
            name: `Phantom Wail`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/54adf6185b51432f.jpg',
        },
        {
            name: `Cacophony`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/279100fbdc31c635.jpg',
        },
        {
            name: `Sacrifice`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/aec3ff572df06d38.jpg',
        },
    ],
    equip: {
        armour: [
            'img/17a186b32620c137.jpg',
            'img/3d01c9bf2abec097.jpg',
            'img/23ae908598434f7b.jpg',
            'img/2a4637892fe6df01.jpg',
            'img/1e6c0709e554ff9b.jpg',
        ],
        weapon: [
            'img/e30cdc29ca4486b5.jpg',
            'img/dfb4e7c4e7487d91.jpg',
            'img/b270298b84a962a0.jpg',
            'img/2480dd681d89cf84.jpg',
            'img/691ba8576c50db45.jpg',
        ],
    },
    portrait: 'img/713614dcac52f1fc.jpg',
}
