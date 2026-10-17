// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_land_dweller1: ClassModData = {
    key: 'land_dweller1',
    name: `Land Dweller`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.1,
        disease: 0.4,
        move: 0.8,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2599623558'
        }
    ],
    skills: [
        {
            name: `Slimed Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9f38f907b031d6c5.jpg',
        },
        {
            name: `Gale Thrust`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/40c48a6eacdebcbd.jpg',
        },
        {
            name: `Dissolving Liquid`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5ff0c136f596ec26.jpg',
        },
        {
            name: `Poison Breath`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/35f45cd511261069.jpg',
        },
        {
            name: `Sticky Mucus`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/5df0d7abea9de09e.jpg',
        },
        {
            name: `Slime Counter`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6a4615a8381fcb57.jpg',
        },
        {
            name: `Lettuce!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4be088fb40572a9c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6c1778bf57783e99.jpg',
            'img/2e19818f1e6f40da.jpg',
            'img/3b46d70a8b697f8e.jpg',
            'img/7402f7ae13bed432.jpg',
            'img/3c66bf7d9e7fed56.jpg',
        ],
        weapon: [
            'img/1b2d97e2dd040031.jpg',
            'img/dab5e479f2e9710a.jpg',
            'img/caf9f3a68b9a589a.jpg',
            'img/ed17f66e7494f0c9.jpg',
            'img/c7546a80d0e1688d.jpg',
        ],
    },
    portrait: 'img/c159f740f20ecbeb.jpg',
}
