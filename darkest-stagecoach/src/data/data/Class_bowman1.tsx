// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bowman1: ClassModData = {
    key: 'bowman1',
    name: `Bowman`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.2,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2549725341'
        }
    ],
    skills: [
        {
            name: `Change Arsenal`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/788cafaea2f1951b.jpg',
        },
        {
            name: `Sureshot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/b7f4b5201abb43ec.jpg',
        },
        {
            name: `Piercing Arrow`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/54712b84a28300ad.jpg',
        },
        {
            name: `Vital Snipe`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5f08c43e7b2c1c6d.jpg',
        },
        {
            name: `Limb Snipe`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d39337e4d603e30c.jpg',
        },
        {
            name: `Powder Arrow`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/e8ad9b3f6f60374b.jpg',
        },
        {
            name: `The Kill`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/919ad72c90ea43ca.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6180fcc2fce3dc1b.jpg',
            'img/3fdfb280fe8879ea.jpg',
            'img/ce8fcad386df3c9a.jpg',
            'img/1f88ac9f5cb421a7.jpg',
            'img/b426932f51dd7a6c.jpg',
        ],
        weapon: [
            'img/bf91e88622942269.jpg',
            'img/c818ac6d873e1e1b.jpg',
            'img/232929ca027abc5b.jpg',
            'img/1ea7174f4dc5d36e.jpg',
            'img/d239ee68f64712ab.jpg',
        ],
    },
    portrait: 'img/69a1c17e60ffc7d9.jpg',
}
