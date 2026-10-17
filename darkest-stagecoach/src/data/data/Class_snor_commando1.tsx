// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_snor_commando1: ClassModData = {
    key: 'snor_commando1',
    name: `Survivor`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.87,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.06, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.11, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3301559781'
        }
    ],
    skills: [
        {
            name: `Single Tap`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/83cb0467b6e28b66.jpg',
        },
        {
            name: `Tri-Tip Stab`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2ce65638a47adf3d.jpg',
        },
        {
            name: `Suppressive Fire`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/b9794ea330e1e33f.jpg',
        },
        {
            name: `Primordial Cube`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/578120243a777bff.jpg',
        },
        {
            name: `Harvest`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/29f6ade0241df0d5.jpg',
        },
        {
            name: `Phase Shotgun`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/c00f510b9096f8fd.jpg',
        },
        {
            name: `Tactical Slide`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7896439e7b893835.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b767b24b83e931c0.jpg',
            'img/9a60ca8bf2935fd1.jpg',
            'img/e335cc139becaf3b.jpg',
            'img/9e8770c1498b5a81.jpg',
            'img/748b273be29c6c05.jpg',
        ],
        weapon: [
            'img/f6992411b7993d18.jpg',
            'img/65c2a6bfde3d7e85.jpg',
            'img/3e378e3cb1b7554c.jpg',
            'img/3bfa3c12bf600135.jpg',
            'img/0690721847fc4dfb.jpg',
        ],
    },
    portrait: 'img/36070b8782c913aa.jpg',
}
