// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_abomination1: ClassModData = {
    key: 'abomination1',
    name: `Abomination`,
    originalHero: true,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Transform`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5764e427e8008e3e.jpg',
        },
        {
            name: `Manacles`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/27e04ca5f7494a89.jpg',
        },
        {
            name: `Beast's Bile`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/79cfb5b6e9fb9150.jpg',
        },
        {
            name: `Absolution`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/520cc0725217a29e.jpg',
        },
        {
            name: `Rake`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2e2e587fc804f65b.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6c1e3da0718a0997.jpg',
        },
        {
            name: `Slam`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9bb0ebcee8be15c7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ae944690c80be483.jpg',
            'img/3d508a6078f504f7.jpg',
            'img/dcb86f85da38b5af.jpg',
            'img/d98554d5baa6c1e1.jpg',
            'img/734244fe6f5f4ec1.jpg',
        ],
        weapon: [
            'img/0cb05ef007a72111.jpg',
            'img/2f25942d409f24ee.jpg',
            'img/133b482b35941e53.jpg',
            'img/7a4355a5679d447c.jpg',
            'img/48163827f016e2a7.jpg',
        ],
    },
    portrait: 'img/b8ca028645f132db.jpg',
}
