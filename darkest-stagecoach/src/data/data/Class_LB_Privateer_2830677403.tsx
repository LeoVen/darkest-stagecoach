// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_LB_Privateer_2830677403: ClassModData = {
    key: 'LB_Privateer_2830677403',
    name: `Privateer`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
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
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2830677403'
        }
    ],
    skills: [
        {
            name: `Strike Them Down!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8bb0a0977ee57064.jpg',
        },
        {
            name: `Hunt Them Down`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ac007b3f1e7e88b8.jpg',
        },
        {
            name: `Bottle O' Rum`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9016f3a761911a42.jpg',
        },
        {
            name: `Dead Ahead`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/39b1cee46b3425ba.jpg',
        },
        {
            name: `The Duckfoot`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/b1d7a8801e85736e.jpg',
        },
        {
            name: `Barrel O' Gunpowder`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/03bb105a82d68c9e.jpg',
        },
        {
            name: `Flames of the Sea`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8f0dc8e80a29f7d3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2ecd5f8b98934e1a.jpg',
            'img/e316df28fc58c7f3.jpg',
            'img/05f607668c965dc5.jpg',
            'img/7f049603118f3021.jpg',
            'img/4159667205bdd949.jpg',
        ],
        weapon: [
            'img/384415d8d94f1c2c.jpg',
            'img/af5d516b8e30f7bd.jpg',
            'img/7752cd1f5e5a6067.jpg',
            'img/e0b9c1baa4b532e5.jpg',
            'img/04f02c6bb9d7a453.jpg',
        ],
    },
    portrait: 'img/803d64753348e4cb.jpg',
}
