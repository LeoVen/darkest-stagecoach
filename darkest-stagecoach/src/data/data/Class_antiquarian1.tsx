// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_antiquarian1: ClassModData = {
    key: 'antiquarian1',
    name: `Antiquarian`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.01, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Nervous Stab`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9c250d4dd649b8ef.jpg',
        },
        {
            name: `Festering Vapours`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/599c7b38c2acfa1f.jpg',
        },
        {
            name: `Get Down!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f8622aa7db407a01.jpg',
        },
        {
            name: `Flashpowder`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e188f06806e2ee59.jpg',
        },
        {
            name: `Fortifying Vapours`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c3327dc4204228b9.jpg',
        },
        {
            name: `Invigorating Vapours`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/099e48e8e6724067.jpg',
        },
        {
            name: `Protect Me`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6e7cb84e75f6a1f9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6236afd4cc418e19.jpg',
            'img/6da85ced87b34f00.jpg',
            'img/8a183bf9f62d06a1.jpg',
            'img/41d5bf982418aa70.jpg',
            'img/11e04d5c79911bc9.jpg',
        ],
        weapon: [
            'img/4161164484b9ab2a.jpg',
            'img/4dcfd498a777cc8d.jpg',
            'img/d58f66651c9f0b50.jpg',
            'img/1939772217a298d3.jpg',
            'img/65c4ce69dcc0efbf.jpg',
        ],
    },
    portrait: 'img/eb70f5d44f29f496.jpg',
}
