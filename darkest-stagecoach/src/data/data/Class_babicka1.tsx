// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_babicka1: ClassModData = {
    key: 'babicka1',
    name: `Babička`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.2,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 53, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2389811450'
        }
    ],
    skills: [
        {
            name: `Practiced Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/56e8b73e05b5a8c2.jpg',
        },
        {
            name: `Shelling`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/b7dfb8ed0eb8756d.jpg',
        },
        {
            name: `Scold`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e18ad4297cbe5df1.jpg',
        },
        {
            name: `Get Behind Me!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7183e71dec5ec5e6.jpg',
        },
        {
            name: `Motherly Care`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9acfb8d3fa89e6d5.jpg',
        },
        {
            name: `Share Wisdom`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/5ad31021cc813e05.jpg',
        },
        {
            name: `Muzzle Flash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9e8213ecdde8c9ce.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4e8b63408aed6c21.jpg',
            'img/c3eac6bea44335d4.jpg',
            'img/d588396018039db0.jpg',
            'img/4718f96cd1685575.jpg',
            'img/fa44e289412fc9b1.jpg',
        ],
        weapon: [
            'img/202ee42ca32edccb.jpg',
            'img/9d5c26e39adb976e.jpg',
            'img/53372456ac12c0a6.jpg',
            'img/788fae9d8b3ad808.jpg',
            'img/b39cae75b7c876f2.jpg',
        ],
    },
    portrait: 'img/06e9c26afdb32dad.jpg',
}
