// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_guardsman1: ClassModData = {
    key: 'guardsman1',
    name: `Guardsman`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.25,
        bleed: 0.25,
        disease: 0.25,
        move: 0.35,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.04, prot: 0.05, hp: 33, speed: 0 },
            { dodge: 0.08, prot: 0.07, hp: 38, speed: 0 },
            { dodge: 0.12, prot: 0.1, hp: 43, speed: 0 },
            { dodge: 0.16, prot: 0.14, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.075, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.085, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1195632927'
        }
    ],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/7878b3a6baf71916.jpg',
        },
        {
            name: `Blind Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/9b8211aeec989779.jpg',
        },
        {
            name: `Frag Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/34de9dc097ecd473.jpg',
        },
        {
            name: `Krak Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5ee79234874bded8.jpg',
        },
        {
            name: `Photon Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/2c62979c0731b3ca.jpg',
        },
        {
            name: `Firm Faith`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0c95844761a00020.jpg',
        },
        {
            name: `Reload`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/30522349842050c2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f7084beb4d132df0.jpg',
            'img/4a2683cc15794703.jpg',
            'img/edfd34d4b7b74d6d.jpg',
            'img/22553c62a706a588.jpg',
            'img/a822a88045263d1d.jpg',
        ],
        weapon: [
            'img/54cf7147087d21a3.jpg',
            'img/fc9147c006c72656.jpg',
            'img/9750e037d4d635b8.jpg',
            'img/72ae2e0bfcced9dc.jpg',
            'img/9131eb362208b9aa.jpg',
        ],
    },
    portrait: 'img/fe8ba0a7fb77c084.jpg',
}
