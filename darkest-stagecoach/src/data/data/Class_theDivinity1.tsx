// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_theDivinity1: ClassModData = {
    key: 'theDivinity1',
    name: `Divinity`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 1.1,
        blight: 11,
        bleed: 11,
        disease: 1.01,
        move: 10,
        debuff: 0,
        deathBlow: 0.67,
        trap: 1.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: -101, speed: 10 },
            { dodge: 0.12, prot: 0, hp: -101, speed: 30 },
            { dodge: 0.15, prot: 0, hp: -101, speed: 30 },
            { dodge: 0.17, prot: 0, hp: -101, speed: 30 },
            { dodge: 0.2, prot: 0, hp: -101, speed: 30 }
        ],
        weapons: [
            { accuracy: 0, damage: [0.0, 0.0], crit: 0, speed: 11 },
            { accuracy: 0, damage: [0.0, 0.0], crit: 0, speed: 100 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.01, speed: 40 },
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.015, speed: 40 },
            { accuracy: 0.2, damage: [5.0, 7.0], crit: 0.02, speed: 50 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1845068884'
        }
    ],
    skills: [
        {
            name: `Reality Binding`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/93836c81ba752c13.jpg',
        },
        {
            name: `Assumptio`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/858001ecf0bd947e.jpg',
        },
        {
            name: `Kyrie Eleison`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,false,false],
                mods: `~@`,
            },
            image: 'img/8e36facb34951c07.jpg',
        },
        {
            name: `Metropathy`,
            launch: [true,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ebb07ce2bca6d057.jpg',
        },
        {
            name: `Rule of Nature`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: `?`,
            },
            image: 'img/2aa9cf383617db80.jpg',
        },
        {
            name: `Oblation`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/25018475927b9443.jpg',
        },
        {
            name: `Redemptio`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9f6099fe1e3d41b5.jpg',
        },
        {
            name: `Equilibrium`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ef15b919396610a7.jpg',
        },
        {
            name: `Awakening`,
            launch: [true,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a9656020fc59e23f.jpg',
        },
        {
            name: `Martyrize`,
            launch: [true,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fa53571ae367ba32.jpg',
        },
    ],
    equip: {
        armour: [
            'img/20bd53fe7d455f8c.jpg',
            'img/0a04067b06858ffe.jpg',
            'img/e98c28fbcc157a8a.jpg',
            'img/848c239ceb544104.jpg',
            'img/d0945b8f6a40daf8.jpg',
        ],
        weapon: [
            'img/557272c4ddf7942c.jpg',
            'img/8033305b8ec7ae76.jpg',
            'img/bd97e6636233c06d.jpg',
            'img/6429b99a5814e2d1.jpg',
            'img/6f813862ce28e508.jpg',
        ],
    },
    portrait: 'img/2d61272cb61ba729.jpg',
}
