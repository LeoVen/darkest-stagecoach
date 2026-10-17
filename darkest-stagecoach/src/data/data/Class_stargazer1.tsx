// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_stargazer1: ClassModData = {
    key: 'stargazer1',
    name: `Stargazer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.1,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2363387321'
        }
    ],
    skills: [
        {
            name: `Flux`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ef964f4125abe119.jpg',
        },
        {
            name: `Conjunction`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6c9e8909f6332231.jpg',
        },
        {
            name: `Enlightenment`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ac0824976ed8bdfc.jpg',
        },
        {
            name: `Singularity`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7d70f3c335e64c6e.jpg',
        },
        {
            name: `Void Manifestation`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/484ea5e5ee144966.jpg',
        },
        {
            name: `Call From Beyond`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/0a64ea534f77baa0.jpg',
        },
        {
            name: `Lucidity`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/256a6e370308fc4a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1d4f6175b441dcf0.jpg',
            'img/4cea2a8223d2b725.jpg',
            'img/0f50bf689d7832a7.jpg',
            'img/4784edfea4287d04.jpg',
            'img/12ab7d9aaf8f2f2c.jpg',
        ],
        weapon: [
            'img/e8eb3e5aeb472c58.jpg',
            'img/64b63c8153e4bd99.jpg',
            'img/19d60e3c1b9b05f1.jpg',
            'img/3d274f6bb27664fc.jpg',
            'img/f4b90477b5d71233.jpg',
        ],
    },
    portrait: 'img/0ab914cc141c8213.jpg',
}
