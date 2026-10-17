// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_helli1: ClassModData = {
    key: 'helli1',
    name: `Lupine`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.45,
        blight: 0.25,
        bleed: 0.5,
        disease: 0.35,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1890263557'
        }
    ],
    skills: [
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/eb309ced38966f4a.jpg',
        },
        {
            name: `Hold and Draw`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a77113c657406ea0.jpg',
        },
        {
            name: `Forestall`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/34d441f16c7d0cd3.jpg',
        },
        {
            name: `Hook where it hurts`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/868a8074b5f078d5.jpg',
        },
        {
            name: `Pierce`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/72560d4ecc6d67a7.jpg',
        },
        {
            name: `Accelerate`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/827e1c505f84889d.jpg',
        },
        {
            name: `Shining Ray`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ce5951a842b467b1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c4c5788e36caba52.jpg',
            'img/6febe44145bd79d3.jpg',
            'img/74a704de60084eaa.jpg',
            'img/cc64cf3d9918c314.jpg',
            'img/040b36b1c080f38b.jpg',
        ],
        weapon: [
            'img/ecfec964ada66479.jpg',
            'img/ef654f3744b65c9b.jpg',
            'img/c781053bbec6ff7a.jpg',
            'img/eda6808461e12999.jpg',
            'img/6853ed40ea5bb13f.jpg',
        ],
    },
    portrait: 'img/f66aa1475d83c142.jpg',
}
