// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_alonne1: ClassModData = {
    key: 'alonne1',
    name: `Samurai`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1558105232'
        }
    ],
    skills: [
        {
            name: `Elegant Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5507a595b81be7d3.jpg',
        },
        {
            name: `Backslash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/28b51b7f938ef836.jpg',
        },
        {
            name: `Gliding Stab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/197c621e67668dc0.jpg',
        },
        {
            name: `Bewitched Bloodthirst`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5a9a1983e9e26229.jpg',
        },
        {
            name: `Piercing Assault`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1685d1873b0a38db.jpg',
        },
        {
            name: `Zen`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b347ca401e89f169.jpg',
        },
        {
            name: `Lunge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e8382b5bf6bba026.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a45b6fba5e3a7b47.jpg',
            'img/f99733276a4c9b99.jpg',
            'img/9b942802c4003744.jpg',
            'img/0053cea66f9ae29f.jpg',
            'img/ec53d0ac572329a9.jpg',
        ],
        weapon: [
            'img/b5be7fe81ac5fd8c.jpg',
            'img/cd6885d35463e637.jpg',
            'img/e539a33c310140cd.jpg',
            'img/f3e826f23d3a714f.jpg',
            'img/8f3818bb3850e700.jpg',
        ],
    },
    portrait: 'img/1626008c6bec1164.jpg',
}
