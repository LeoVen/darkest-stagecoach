// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_plague_doctor1: ClassModData = {
    key: 'plague_doctor1',
    name: `Plague Doctor`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Noxious Blast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fc812accf811f28e.jpg',
        },
        {
            name: `Plague Grenade`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/5578c34022c37477.jpg',
        },
        {
            name: `Blinding Gas`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/9b9be7d87706b0b2.jpg',
        },
        {
            name: `Incision`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3f8630794e5fb86c.jpg',
        },
        {
            name: `Battlefield Medicine`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/cd5ce0282954f4a1.jpg',
        },
        {
            name: `Emboldening Vapours`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/375831d950d67be6.jpg',
        },
        {
            name: `Disorienting Blast`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/730d90029bff7b5a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dc5558a4abfe1514.jpg',
            'img/336a6eeb77dde966.jpg',
            'img/487111715a9d7ddc.jpg',
            'img/c28384554a492b98.jpg',
            'img/a16037ab8252d5d6.jpg',
        ],
        weapon: [
            'img/d2d6d2eeb3251647.jpg',
            'img/0a9324c8143cb524.jpg',
            'img/1e5b3532213337a0.jpg',
            'img/2ea68424987bd4cc.jpg',
            'img/94ec64a228456347.jpg',
        ],
    },
    portrait: 'img/ae26d4da1f04d171.jpg',
}
