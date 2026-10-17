// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arachnid_1205784606: ClassModData = {
    key: 'arachnid_1205784606',
    name: `Arachnid`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.6,
        move: 0.3,
        debuff: 0.35,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.035, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.045, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.055, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1205784606'
        }
    ],
    skills: [
        {
            name: `Impale`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/91aba004a6868696.jpg',
        },
        {
            name: `Sting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3edab9afe4a9d6a2.jpg',
        },
        {
            name: `Capture`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d2ad552f1a12e5e0.jpg',
        },
        {
            name: `Own Territory`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~@`,
            },
            image: 'img/6d5e392444ae4784.jpg',
        },
        {
            name: `Chrysalis`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f0007124fc4c0dd5.jpg',
        },
        {
            name: `Dark Ritual`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/416e036d77d8788e.jpg',
        },
        {
            name: `Perception`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/04f24b7fc6c50dc8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/21ab890c934befcf.jpg',
            'img/4bce494ed265ff57.jpg',
            'img/45d8a5d3dce99ae1.jpg',
            'img/38271ebf3c82c1b6.jpg',
            'img/7f05b38764457581.jpg',
        ],
        weapon: [
            'img/0000f522de65fad8.jpg',
            'img/8511450ce93ace86.jpg',
            'img/307c22acc9cbe753.jpg',
            'img/28fffd90c6b95b2f.jpg',
            'img/be588699d63a8769.jpg',
        ],
    },
    portrait: 'img/92881d3e4cc21ab3.jpg',
}
