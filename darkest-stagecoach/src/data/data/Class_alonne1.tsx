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
            image: 'img/9126508ae19a3864.jpg',
        },
        {
            name: `Backslash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3d61db6c2116fc08.jpg',
        },
        {
            name: `Gliding Stab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d47981a509ae7c33.jpg',
        },
        {
            name: `Bewitched Bloodthirst`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2c846da172117b11.jpg',
        },
        {
            name: `Piercing Assault`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9bb00667cc432a52.jpg',
        },
        {
            name: `Zen`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f24007c4114265c8.jpg',
        },
        {
            name: `Lunge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f4a942eeaa9cb8b5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1a743af31bbaccc1.jpg',
            'img/32f37925db0cf64d.jpg',
            'img/4044bee8a43f9c1d.jpg',
            'img/9f34fd548dbea1fa.jpg',
            'img/7159e19cf07d43ce.jpg',
        ],
        weapon: [
            'img/119ec9514121c4c9.jpg',
            'img/a37b1037c8491632.jpg',
            'img/c4c85569ed5245a9.jpg',
            'img/fa381da683ed3f37.jpg',
            'img/8ab5694859f40109.jpg',
        ],
    },
    portrait: 'img/13491b1ef7135336.jpg',
}
