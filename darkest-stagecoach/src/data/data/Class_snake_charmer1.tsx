// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_snake_charmer1: ClassModData = {
    key: 'snake_charmer1',
    name: `Encantador de Serpentes`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [3.0, 9.0], crit: 0.1, speed: 4 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.11, speed: 5 },
            { accuracy: 0, damage: [4.0, 12.0], crit: 0.12, speed: 5 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.13, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1456853110'
        }
    ],
    skills: [
        {
            name: `Presas Venenosas`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8d5be299fda5ed6a.jpg',
        },
        {
            name: `Dança da Mamba`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e8e7b03e2bc4f98e.jpg',
        },
        {
            name: `Banquete`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a09b3fe31e932b57.jpg',
        },
        {
            name: `Constrição`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/bced7859c43fb6e4.jpg',
        },
        {
            name: `Armadilha de Chocalho`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/442e7a02925ff2c7.jpg',
        },
        {
            name: `Charme Vicioso`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/74e01966fe14815d.jpg',
        },
        {
            name: `Toxina Calmante`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c7ba3e73468c77ec.jpg',
        },
    ],
    equip: {
        armour: [
            'img/23256254d7418670.jpg',
            'img/01203af5e7bf0fc0.jpg',
            'img/3edccccf757450b6.jpg',
            'img/f065daceeb08a2fb.jpg',
            'img/0a53b498d2d89a00.jpg',
        ],
        weapon: [
            'img/091caa3bfa447e82.jpg',
            'img/35d24916c6d56f20.jpg',
            'img/7053110683957788.jpg',
            'img/f1b4b00a8ae612a4.jpg',
            'img/9b4d1cf1932843a1.jpg',
        ],
    },
    portrait: 'img/20ac46828fda3e8e.jpg',
}
