// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_blackswordman1: ClassModData = {
    key: 'blackswordman1',
    name: `Black Swordman`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.3,
        debuff: 0.1,
        deathBlow: 0.75,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 67, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [15.0, 25.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [17.0, 29.0], crit: 0.09, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1425243237'
        }
    ],
    skills: [
        {
            name: `Chop`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3be6173f4452fe11.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/098ce75f556868f2.jpg',
        },
        {
            name: `Anger`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e974fbbbde3826ee.jpg',
        },
        {
            name: `Repeated Crossbow`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/e859a104cc83d3ab.jpg',
        },
        {
            name: `Brand of Sacrifice`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e3da632c9020842f.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/dad2213867d59a33.jpg',
        },
        {
            name: `Cannon Arm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9afc0fc4a6b11495.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7914db0afced3019.jpg',
            'img/242285de05f92bd6.jpg',
            'img/52a919d09d2bdbd4.jpg',
            'img/79fdaa1f751ae701.jpg',
            'img/d5c937fcbf50d632.jpg',
        ],
        weapon: [
            'img/f6999947127f2bb1.jpg',
            'img/26fe90dde4c48944.jpg',
            'img/0938dfe4ef973c93.jpg',
            'img/d1c70c22060cffd9.jpg',
            'img/4660761417654348.jpg',
        ],
    },
    portrait: 'img/a79b7de9136d06ec.jpg',
}
