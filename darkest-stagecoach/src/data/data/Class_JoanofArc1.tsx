// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_JoanofArc1: ClassModData = {
    key: 'JoanofArc1',
    name: `Ruler`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1596685165'
        }
    ],
    skills: [
        {
            name: `Smite`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/deaf55bbda070a7e.jpg',
        },
        {
            name: `Holy Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/62015604cb3094e7.jpg',
        },
        {
            name: `Protection`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a11876f3019d6663.jpg',
        },
        {
            name: `Arc Of Light`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ef2e80c886282b6e.jpg',
        },
        {
            name: `Holy Lance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e6134a6deb3cd8bf.jpg',
        },
        {
            name: `Holy Light`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/243a35dadb73c3c7.jpg',
        },
        {
            name: `Redemption`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/81e114758996db8b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3b88236127afcccc.jpg',
            'img/51025e6a12f37cff.jpg',
            'img/c873daf424d39c9c.jpg',
            'img/06b2756dd8183499.jpg',
            'img/2bb35dddaf01bcc8.jpg',
        ],
        weapon: [
            'img/3fe87cfdbe40a4f8.jpg',
            'img/a9d409548bc97f21.jpg',
            'img/8f84d04918b6a223.jpg',
            'img/b80b1ec7f927217a.jpg',
            'img/b1c53a93add1dbab.jpg',
        ],
    },
    portrait: 'img/d176dfc742f87349.jpg',
}
