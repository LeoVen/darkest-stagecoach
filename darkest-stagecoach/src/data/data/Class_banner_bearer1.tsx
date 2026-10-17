// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_banner_bearer1: ClassModData = {
    key: 'banner_bearer1',
    name: `Banner Bearer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0.05, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0.1, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2464921617'
        }
    ],
    skills: [
        {
            name: `Ready, Aim, Loose!`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/dc5a4e2c6397cd78.jpg',
        },
        {
            name: `Charge!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `@~`,
            },
            image: 'img/49256117e86ab841.jpg',
        },
        {
            name: `Rally!`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b05e3ca8e409f9ca.jpg',
        },
        {
            name: `Cover The Flanks!`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `@~`,
            },
            image: 'img/a60b974913e34e5d.jpg',
        },
        {
            name: `Coordinate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4f3c02d3815154b4.jpg',
        },
        {
            name: `Reinforce`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/98ad4ba52de6fbdb.jpg',
        },
        {
            name: `All Ranks, Fire!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b85af60646f45c13.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3b88236127afcccc.jpg',
            'img/51025e6a12f37cff.jpg',
            'img/c873daf424d39c9c.jpg',
            'img/06b2756dd8183499.jpg',
            'img/2bb35dddaf01bcc8.jpg',
        ],
        weapon: [
            'img/0534974bd6a9ec74.jpg',
            'img/299b3174ec6ecb12.jpg',
            'img/a14f914d31eb58ff.jpg',
            'img/945a8a59d36f7965.jpg',
            'img/e165ce94841e8a9d.jpg',
        ],
    },
    portrait: 'img/35a1c78672526bf4.jpg',
}
