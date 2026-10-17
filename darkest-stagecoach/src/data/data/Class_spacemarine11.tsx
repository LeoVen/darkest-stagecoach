// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spacemarine11: ClassModData = {
    key: 'spacemarine11',
    name: `星际战士`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.55,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.05
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.02, prot: 0.02, hp: 39, speed: 0 },
            { dodge: 0.04, prot: 0.04, hp: 45, speed: 0 },
            { dodge: 0.06, prot: 0.06, hp: 51, speed: 0 },
            { dodge: 0.08, prot: 0.08, hp: 57, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.0375, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.0425, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.0475, speed: 3 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.0525, speed: 3 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.0575, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1247612309'
        }
    ],
    skills: [
        {
            name: `战斧劈击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4567c3844b8fe36b.jpg',
        },
        {
            name: `爆弹手枪`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d02c28091368e027.jpg',
        },
        {
            name: `警惕`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2bd1615f0af8422d.jpg',
        },
        {
            name: `盾牌猛击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9224bfef5c82958d.jpg',
        },
        {
            name: `退后!`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/efc696659898e0b1.jpg',
        },
        {
            name: `全力一击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a1f5d847a72e13f4.jpg',
        },
        {
            name: `坚守阵线`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/efde434ca9d23404.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a930a7c0ed0caff8.jpg',
            'img/4ea9b36cc846eafa.jpg',
            'img/c4a3033ddc937f69.jpg',
            'img/e0646b67892070e3.jpg',
            'img/9ecb2adc61d4d456.jpg',
        ],
        weapon: [
            'img/d2d579ba0faf2140.jpg',
            'img/8322f513a58d9477.jpg',
            'img/90ce192e5945bdff.jpg',
            'img/2be013559125b9ec.jpg',
            'img/ee6668cf1844f385.jpg',
        ],
    },
    portrait: 'img/fecd9a3e5a98f298.jpg',
}
