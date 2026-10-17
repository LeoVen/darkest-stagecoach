// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_maid1: ClassModData = {
    key: 'maid1',
    name: `Maid`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.1,
        blight: 0.3,
        bleed: 0.6,
        disease: 0.6,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2207614474'
        }
    ],
    skills: [
        {
            name: `Soul Sculpture`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/fb8de22b106e0338.jpg',
        },
        {
            name: `Killer Doll`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6b2fc2261cae83d0.jpg',
        },
        {
            name: `Indiscriminate`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/7729887d56b662ef.jpg',
        },
        {
            name: `Misdirection`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d84049caca0fa93f.jpg',
        },
        {
            name: `Eternal Meek`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/c1436982c9bfc422.jpg',
        },
        {
            name: `Ludo Bile`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/c64c2b02618fc20a.jpg',
        },
        {
            name: `The World`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d8cf33063987e49e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/35deb69f3902190f.jpg',
            'img/fed202e96cb32f58.jpg',
            'img/5b911ce4a525bb54.jpg',
            'img/e96d778a052d0677.jpg',
            'img/05be2ec22bdebb63.jpg',
        ],
        weapon: [
            'img/3f2d8b67bf9c7d02.jpg',
            'img/03cbf5f0cca88635.jpg',
            'img/457a48644a90bf21.jpg',
            'img/3e27f0fd1e98ce13.jpg',
            'img/425db3c48a70af48.jpg',
        ],
    },
    portrait: 'img/583a7ae15db45d6c.jpg',
}
