// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_fury_1100450515: ClassModData = {
    key: 'fury_1100450515',
    name: `Fury`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.035, speed: 5 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.045, speed: 6 },
            { accuracy: 0, damage: [13.0, 15.0], crit: 0.05, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1100450515'
        }
    ],
    skills: [
        {
            name: `Feral Impulse`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4aa70a6917125e92.jpg',
        },
        {
            name: `Composed Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5393d0e0d8fb18d7.jpg',
        },
        {
            name: `Disciplined Thrust`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3a959f9ac4af5f2d.jpg',
        },
        {
            name: `Poised Cleave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/964c0356ee6b1f83.jpg',
        },
        {
            name: `Raging Sunder`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7b50a35db80afd15.jpg',
        },
        {
            name: `Vicious Rip`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7c301a614f50c676.jpg',
        },
        {
            name: `Ferocious Laceration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b69acaaab8286eef.jpg',
        },
    ],
    equip: {
        armour: [
            'img/23aff303be832734.jpg',
            'img/b708605d33340e6a.jpg',
            'img/168df31d68bae080.jpg',
            'img/69838a3004b28e1e.jpg',
            'img/1b4d4ec504e9d1c5.jpg',
        ],
        weapon: [
            'img/a6ad4033967d0d03.jpg',
            'img/35838e0719f5933d.jpg',
            'img/6b19c76b2eddaae5.jpg',
            'img/101c208fc709d810.jpg',
            'img/a22950cc7c8bb7c0.jpg',
        ],
    },
    portrait: 'img/c43d0159e111d404.jpg',
}
