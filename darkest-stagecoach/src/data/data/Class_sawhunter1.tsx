// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_sawhunter1: ClassModData = {
    key: 'sawhunter1',
    name: `Saw Hunter`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2525329346'
        }
    ],
    skills: [
        {
            name: `Blood-letting Teeth`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6560d42ec19aee03.jpg',
        },
        {
            name: `Into the Wound`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a48cdda3c6769980.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/948351992d1b70b4.jpg',
        },
        {
            name: `Hunter's Salutation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/40f66febfb9824ef.jpg',
        },
        {
            name: `Augur of Ebrietas`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b3e2da4575c11635.jpg',
        },
        {
            name: `Heckling Gunshot`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/737b3c0b1fd79b24.jpg',
        },
        {
            name: `Serrated Knife`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/deca1e8952e10e84.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ff56b92ae67123c6.jpg',
            'img/87a988d2093a4ce5.jpg',
            'img/2b35d0d450299830.jpg',
            'img/2d421607c6e895f1.jpg',
            'img/64473cf1aa2b16c2.jpg',
        ],
        weapon: [
            'img/926b7aa03524b919.jpg',
            'img/49ddbd18fe2f249d.jpg',
            'img/a0c186f62f72e4a1.jpg',
            'img/1b869318168c75e9.jpg',
            'img/1690137746529d23.jpg',
        ],
    },
    portrait: 'img/d9e71aee9502a587.jpg',
}
