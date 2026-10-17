// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lancer1: ClassModData = {
    key: 'lancer1',
    name: `Spirit Lancer`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1836051076'
        }
    ],
    skills: [
        {
            name: `Exonerate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/876aa1b04d15a0bc.jpg',
        },
        {
            name: `Perforate`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a85c543eed9413c1.jpg',
        },
        {
            name: `Serrate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,false,true,false],
                mods: ``,
            },
            image: 'img/aae18290a9b0076f.jpg',
        },
        {
            name: `Debilitate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/20885d55af1924f1.jpg',
        },
        {
            name: `Agitate`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,false,true],
                mods: ``,
            },
            image: 'img/e8e0535179fd0055.jpg',
        },
        {
            name: `Eradicate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/0254115dee387826.jpg',
        },
        {
            name: `Actuate`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e45f39898a5bfc57.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c61fc68a0078f759.jpg',
            'img/5ade02a1e6c3f65d.jpg',
            'img/0fb258e07cc5037e.jpg',
            'img/2d78adff68507253.jpg',
            'img/516b710542194b61.jpg',
        ],
        weapon: [
            'img/1889018a4ec44a82.jpg',
            'img/686e7635a5254434.jpg',
            'img/99bdd3233bb995fb.jpg',
            'img/ae7b58d294815315.jpg',
            'img/4dcc635a12b21c8b.jpg',
        ],
    },
    portrait: 'img/762579419fde73d5.jpg',
}
