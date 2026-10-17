// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_fawn1: ClassModData = {
    key: 'fawn1',
    name: `Fawn`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.7,
        bleed: 0.1,
        disease: 0.4,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.03, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.11, speed: 9 },
            { accuracy: 0, damage: [10.0, 13.0], crit: 0.12, speed: 9 },
            { accuracy: 0, damage: [11.0, 15.0], crit: 0.13, speed: 10 },
            { accuracy: 0, damage: [13.0, 17.0], crit: 0.14, speed: 10 },
            { accuracy: 0, damage: [14.0, 19.0], crit: 0.15, speed: 11 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1109179698'
        }
    ],
    skills: [
        {
            name: `Gouge`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/aced087092be244e.jpg',
        },
        {
            name: `Eviscerate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3528f6c4e231878c.jpg',
        },
        {
            name: `Throat Skewer`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d4a0667979a6c146.jpg',
        },
        {
            name: `Drill`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/266facd0058f3812.jpg',
        },
        {
            name: `Maim`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/dde0671415ce49f1.jpg',
        },
        {
            name: `Moon Hoof`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/50f0ed88a0174f05.jpg',
        },
        {
            name: `Refresh`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/28e687465bcf12ab.jpg',
        },
    ],
    equip: {
        armour: [
            'img/bef7248178f35eab.jpg',
            'img/5b584669f05a9192.jpg',
            'img/efe598280d917137.jpg',
            'img/735392a331c9f02d.jpg',
            'img/61c6736ed588ff37.jpg',
        ],
        weapon: [
            'img/6a13a76a97b5c30c.jpg',
            'img/7ed895d40884c956.jpg',
            'img/26c3a8855c91ef62.jpg',
            'img/36f33359118ff74d.jpg',
            'img/583848783b0370bb.jpg',
        ],
    },
    portrait: 'img/766e80050ffdd546.jpg',
}
