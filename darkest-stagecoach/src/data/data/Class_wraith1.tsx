// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wraith1: ClassModData = {
    key: 'wraith1',
    name: `Wraith`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.6,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.76,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1441036778'
        }
    ],
    skills: [
        {
            name: `Phantom Strike`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/89d374f1346981ba.jpg',
        },
        {
            name: `Reaping Evisceration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7ecd2afe494a7540.jpg',
        },
        {
            name: `Sinister Flurry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/2f74f9d0aca2f6ea.jpg',
        },
        {
            name: `Devious Ambush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0ef54ffa5eca763f.jpg',
        },
        {
            name: `Scattering Dread`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/eab526670f4bad7f.jpg',
        },
        {
            name: `Soul Harvest`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fc70b9944b181442.jpg',
        },
        {
            name: `Grim Shade`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1b75c6b69d0b9547.jpg',
        },
    ],
    equip: {
        armour: [
            'img/05b56815cbbf0177.jpg',
            'img/5c1d914c081f4ee8.jpg',
            'img/54257c451c4116d8.jpg',
            'img/96a7acb55ace4043.jpg',
            'img/d3e6e6a7702a1108.jpg',
        ],
        weapon: [
            'img/104f9c3ef03db69f.jpg',
            'img/9b54e25df67dfa5b.jpg',
            'img/488292e1c3251da7.jpg',
            'img/62ce9f1b24642d46.jpg',
            'img/997eb351585a33e6.jpg',
        ],
    },
    portrait: 'img/2ed60e9fe9c777d4.jpg',
}
