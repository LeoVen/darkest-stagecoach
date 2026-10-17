// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hierophant1: ClassModData = {
    key: 'hierophant1',
    name: `Hierophant`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.1,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 66, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.02, speed: 0 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [9.0, 19.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.05, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2299977419'
        }
    ],
    skills: [
        {
            name: `Condemn the Heretic`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2e3c880e97315814.jpg',
        },
        {
            name: `Holy Branding`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a3e0c0a186deb353.jpg',
        },
        {
            name: `Wrath of the Empyrean`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a376a80e0d898e2e.jpg',
        },
        {
            name: `Saint's Blessings`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/421f71a7efa5e3d6.jpg',
        },
        {
            name: `Celestial Restoration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/901f7c35d3778f32.jpg',
        },
        {
            name: `Divine Constitution`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6b6434878a044da3.jpg',
        },
        {
            name: `Righteous Vengeance`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/793b607c747e7a36.jpg',
        },
    ],
    equip: {
        armour: [
            'img/506e9263afd2a16b.jpg',
            'img/d609cb334a602950.jpg',
            'img/a54bb1679a2c388a.jpg',
            'img/be48a1c2defbd69e.jpg',
            'img/c5ad50e00041bdb0.jpg',
        ],
        weapon: [
            'img/e72e2aa618571d40.jpg',
            'img/bffb27f2ffdc80cc.jpg',
            'img/3c315396c2b7cc72.jpg',
            'img/35524aa1a37dde7e.jpg',
            'img/2944b758843ca8ef.jpg',
        ],
    },
    portrait: 'img/093c4aa41af1b8db.jpg',
}
