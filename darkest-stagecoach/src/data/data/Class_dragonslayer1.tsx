// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dragonslayer1: ClassModData = {
    key: 'dragonslayer1',
    name: `Dragonslayer`,
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
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1207974198'
        }
    ],
    skills: [
        {
            name: `Swift Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/755acb4a7cb3d394.jpg',
        },
        {
            name: `Lightning Spear`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e238784891579d1c.jpg',
        },
        {
            name: `Princess' Guard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e7f6bd41cb4fd56b.jpg',
        },
        {
            name: `Lightning Impale`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6c55634e2349f88f.jpg',
        },
        {
            name: `Lightning Dash`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/560e370527735a13.jpg',
        },
        {
            name: `Sacred Oath`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/57c00ae55be7f645.jpg',
        },
        {
            name: `Golden Glint`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/79b5bd166df65683.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6832f81066471bd6.jpg',
            'img/27290807ecf32e99.jpg',
            'img/dcaa9000c2ee645e.jpg',
            'img/08e32dfd4e4b1a4b.jpg',
            'img/9ccb00d5e495dec8.jpg',
        ],
        weapon: [
            'img/7fdbb35eeb862671.jpg',
            'img/d935e30954111361.jpg',
            'img/2b32ab7844c32113.jpg',
            'img/46eafa62b73bdd77.jpg',
            'img/27258c294906a254.jpg',
        ],
    },
    portrait: 'img/8df19eba26acdd62.jpg',
}
