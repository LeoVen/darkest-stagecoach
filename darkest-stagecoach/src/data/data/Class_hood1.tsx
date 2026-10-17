// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hood1: ClassModData = {
    key: 'hood1',
    name: `Hood`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.3,
        disease: 0.3,
        move: -0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.2, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.39, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.45, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [3.0, 4.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.015, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.015, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1157520643'
        }
    ],
    skills: [
        {
            name: `The Bag`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f2b0cdafca7e6e96.jpg',
        },
        {
            name: `Pssst!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fd1283266c40907b.jpg',
        },
        {
            name: `What is this ?`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9c3315a9bfb0cc91.jpg',
        },
        {
            name: `Piece of Cake`,
            launch: [true,false,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f70c7f06dbd9fb47.jpg',
        },
        {
            name: `Sip of Wine`,
            launch: [false,true,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/691eddfb64637577.jpg',
        },
        {
            name: `There's a Cat`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8ad78be37df64816.jpg',
        },
        {
            name: `A Butterfly !`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4f7e2f5f327bf6ca.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3d61b6dcd8bafe01.jpg',
            'img/3eed82891e7a0177.jpg',
            'img/292bbb77f77d9f54.jpg',
            'img/669384432a090d0b.jpg',
            'img/41d797642186b152.jpg',
        ],
        weapon: [
            'img/286d80750f6daef3.jpg',
            'img/2ec195b6e285e0eb.jpg',
            'img/2e713db0cc344beb.jpg',
            'img/d0ff83e31bd878cc.jpg',
            'img/c50fc7282ca4b3c2.jpg',
        ],
    },
    portrait: 'img/b107e5f059461a78.jpg',
}
