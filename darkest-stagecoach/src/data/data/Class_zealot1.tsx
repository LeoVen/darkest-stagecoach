// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_zealot1: ClassModData = {
    key: 'zealot1',
    name: `Zealot`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1129127265'
        }
    ],
    skills: [
        {
            name: `Hateful Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cc3414c7e0e11295.jpg',
        },
        {
            name: `Condemnation`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/38788a7d6d2a788b.jpg',
        },
        {
            name: `Consecrate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a6158730d3b04989.jpg',
        },
        {
            name: `Ardent Hammer`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/7ae8a235d81d8241.jpg',
        },
        {
            name: `Burning Brand`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/745afd8342b1ae2d.jpg',
        },
        {
            name: `Sentence The Guilty`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d1f8f16aadb37d86.jpg',
        },
        {
            name: `Seethe`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/91dedbcc3c9bc9c9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/80bf248584bf7ebf.jpg',
            'img/2c129787ee028c89.jpg',
            'img/e24ef3c7ef1fb037.jpg',
            'img/0d8cb34c072a367e.jpg',
            'img/114af12f2af7ae61.jpg',
        ],
        weapon: [
            'img/88320934fbb9c53d.jpg',
            'img/4f2e5ac6071943b3.jpg',
            'img/6a1cd3418172bb0d.jpg',
            'img/f10e90a5e96d0cfc.jpg',
            'img/ec8d7d50a6e8fb69.jpg',
        ],
    },
    portrait: 'img/e042d58a6309a75f.jpg',
}
