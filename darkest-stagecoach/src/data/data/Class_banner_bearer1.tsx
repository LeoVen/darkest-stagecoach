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
            image: 'img/1fc6b4a12015c2bf.jpg',
        },
        {
            name: `Charge!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `@~`,
            },
            image: 'img/17a2cea4f0dad88c.jpg',
        },
        {
            name: `Rally!`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0c3def166383ca60.jpg',
        },
        {
            name: `Cover The Flanks!`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `@~`,
            },
            image: 'img/f0b46a792c10ae63.jpg',
        },
        {
            name: `Coordinate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b038ac65a1940672.jpg',
        },
        {
            name: `Reinforce`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9a4f71decdc0f5e4.jpg',
        },
        {
            name: `All Ranks, Fire!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/677aaae9f78a6071.jpg',
        },
    ],
    equip: {
        armour: [
            'img/22f3f89249e5e41a.jpg',
            'img/12a9132b03899b15.jpg',
            'img/75ddb522a32457b6.jpg',
            'img/3007faef375ab5d0.jpg',
            'img/bee5adbe79728517.jpg',
        ],
        weapon: [
            'img/90a80b97aa5b1d38.jpg',
            'img/13c670693c13cf74.jpg',
            'img/95f47d19dffc4d55.jpg',
            'img/75126c17d0b89d04.jpg',
            'img/b317450821d3e7e1.jpg',
        ],
    },
    portrait: 'img/8a1c94a41231457a.jpg',
}
