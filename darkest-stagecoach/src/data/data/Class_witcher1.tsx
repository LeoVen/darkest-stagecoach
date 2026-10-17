// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_witcher1: ClassModData = {
    key: 'witcher1',
    name: `Witcher`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.6,
        move: 0.3,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2773469293'
        }
    ],
    skills: [
        {
            name: `Bounty Hunt`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/deaf55bbda070a7e.jpg',
        },
        {
            name: `Swords Dance`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/08a89148d9aeac5b.jpg',
        },
        {
            name: `Samum·MoonDust`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/ca25ca7cfdba112a.jpg',
        },
        {
            name: `Vigor Outburst`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7abb27331f026fcc.jpg',
        },
        {
            name: `Sign of Axii`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5e91b2a0c0d87b6e.jpg',
        },
        {
            name: `Sign of Aard`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/3189aa1e1ba1d869.jpg',
        },
        {
            name: `Sign of Yrden`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d9d0fe594a5a1afd.jpg',
        },
        {
            name: `Sign of Quen`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7dbeafc9a1c53c68.jpg',
        },
        {
            name: `Sign of Igni`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/1d5bac5af0f9e103.jpg',
        },
    ],
    equip: {
        armour: [
            'img/15386b40435a0917.jpg',
            'img/3203c9425a40d6ff.jpg',
            'img/7b42122f09d2979c.jpg',
            'img/a9a6e2d77b867ae2.jpg',
            'img/91996a04d7c50255.jpg',
        ],
        weapon: [
            'img/f66470ab56ee685d.jpg',
            'img/7a3172390643e289.jpg',
            'img/c1a0910876ed5987.jpg',
            'img/65957352a753fe58.jpg',
            'img/8c2d5b8c1dfd53ad.jpg',
        ],
    },
    portrait: 'img/7a867bda7faba30c.jpg',
}
