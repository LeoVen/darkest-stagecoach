// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shinobi1: ClassModData = {
    key: 'shinobi1',
    name: `Shinobi`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.11, speed: 9 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.12, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2579320730'
        }
    ],
    skills: [
        {
            name: `Ascending Wind`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8e7b2ae631ed0308.jpg',
        },
        {
            name: `Backbiter`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/eac01d93a9576607.jpg',
        },
        {
            name: `Serpent's Coil`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3e36f8e9d04fc0d7.jpg',
        },
        {
            name: `Piercing Tendrils`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2664b4cc66464e97.jpg',
        },
        {
            name: `Withering Hail`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/0794dbd59896d08f.jpg',
        },
        {
            name: `Storm's Descent`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e718663cc7c3681f.jpg',
        },
        {
            name: `Dusk Veil`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/19293cc5f2d5a5cf.jpg',
        },
    ],
    equip: {
        armour: [
            'img/db45e3c9f758e473.jpg',
            'img/dbd2c6fa3ac3a2cc.jpg',
            'img/f4186516e0933cb1.jpg',
            'img/d341af4d27780717.jpg',
            'img/72d431961dbe1512.jpg',
        ],
        weapon: [
            'img/9396223f26f6ec21.jpg',
            'img/cf43982fee5d03cb.jpg',
            'img/b0394b4fe73fd31e.jpg',
            'img/ee990f31d5c06d52.jpg',
            'img/2d17649c766ebc62.jpg',
        ],
    },
    portrait: 'img/08f1ab42f855630e.jpg',
}
