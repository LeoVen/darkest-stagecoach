// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cainknight1: ClassModData = {
    key: 'cainknight1',
    name: `Knight of Cain`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.6,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2606931475'
        }
    ],
    skills: [
        {
            name: `Double-edged blade`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2b985320568e4145.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2a8bad1300b40306.jpg',
        },
        {
            name: `Replenish Bullets`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8e9965ecbc89957e.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4add1600cf4a318e.jpg',
        },
        {
            name: `Cut Off`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4e769e67a583596c.jpg',
        },
        {
            name: `Iai`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d7c6e2427fc793b7.jpg',
        },
        {
            name: `Numbing Mist`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/45a6956c10071df9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e50ce3e55754d8e.jpg',
            'img/f97440e830690adc.jpg',
            'img/4732fd991fc09322.jpg',
            'img/79b0ffdc61880a6f.jpg',
            'img/804e9d0feae23a99.jpg',
        ],
        weapon: [
            'img/16422cc0318f414b.jpg',
            'img/bdc53250a0942d79.jpg',
            'img/eed7acbb4f0c8bf4.jpg',
            'img/f584297f95d2bae9.jpg',
            'img/bd2b0b80a2e2ce2d.jpg',
        ],
    },
    portrait: 'img/45f62914970d763a.jpg',
}
