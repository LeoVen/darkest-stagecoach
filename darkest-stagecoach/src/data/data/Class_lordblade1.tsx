// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lordblade1: ClassModData = {
    key: 'lordblade1',
    name: `Lord's Blade`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1433161277'
        }
    ],
    skills: [
        {
            name: `Mutilate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ad9bb500c52e2dfe.jpg',
        },
        {
            name: `Backstab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c0b70fd97e6a5734.jpg',
        },
        {
            name: `Golden Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/21d3f4bbefaf760a.jpg',
        },
        {
            name: `Fast Roll`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/464f4d9079d53705.jpg',
        },
        {
            name: `Thrown Tracer`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/cce4df09d53eea23.jpg',
        },
        {
            name: `Silver Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/096878481e318a5a.jpg',
        },
        {
            name: `Estus Brew`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/62f0e8fd5aac43b3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5eaaadfc8313c2d0.jpg',
            'img/b970ce88ecca2d40.jpg',
            'img/bb57f7dbe1db0004.jpg',
            'img/43fca70cde782b8b.jpg',
            'img/81cd741d18e9e47f.jpg',
        ],
        weapon: [
            'img/a7605280e7128116.jpg',
            'img/00d0258be33c88c1.jpg',
            'img/70e4c9d0bf16066e.jpg',
            'img/ebd259e65e975313.jpg',
            'img/278db3c16b065ed1.jpg',
        ],
    },
    portrait: 'img/c40c7c20615bc6f5.jpg',
}
