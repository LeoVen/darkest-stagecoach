// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_falconer1: ClassModData = {
    key: 'falconer1',
    name: `Falconer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.25,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.1, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.11, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1089257023'
        }
    ],
    skills: [
        {
            name: `Quickshot / Crippling Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/725e732661d9801f.jpg',
        },
        {
            name: `Eyethief / Ravage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3d348c952bf894c4.jpg',
        },
        {
            name: `Flank / Gouge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/69acfe216b2be459.jpg',
        },
        {
            name: `Volley Fire / Flurry`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/ebafd67f5a5bb168.jpg',
        },
        {
            name: `Spirited Cry / Stalk`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/842f4763ebdc4edb.jpg',
        },
        {
            name: `Fleeting Escape / Harrier`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e386750d822d155f.jpg',
        },
        {
            name: `Adapt`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e4ddd1fc97efbed3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/83c37b2b46d75303.jpg',
            'img/9c668e26697bed37.jpg',
            'img/76e234b8895e9ce0.jpg',
            'img/ac527cebfe14f12c.jpg',
            'img/3c701e17a5af6993.jpg',
        ],
        weapon: [
            'img/0c11ddf2c726193b.jpg',
            'img/61d3a280d154c92f.jpg',
            'img/1cf8dae1c8eb093e.jpg',
            'img/d4c3565b1ebcc872.jpg',
            'img/13df479125ea0cf4.jpg',
        ],
    },
    portrait: 'img/07b9603bac377133.jpg',
}
