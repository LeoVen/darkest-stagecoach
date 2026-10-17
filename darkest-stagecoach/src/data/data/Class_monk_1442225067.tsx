// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_monk_1442225067: ClassModData = {
    key: 'monk_1442225067',
    name: `Monk`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0.1, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0.1, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0.1, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.01, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 8 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1442225067'
        }
    ],
    skills: [
        {
            name: `Dragon Tail`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8f976f4ee911ea5c.jpg',
        },
        {
            name: `Howling Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5a8f7ec465e0561d.jpg',
        },
        {
            name: `Iron Mountain`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7a3f7e9f5d93c320.jpg',
        },
        {
            name: `Sweeping Kick`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0c691eb868875dc9.jpg',
        },
        {
            name: `Transfer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/05bdb5427c18d421.jpg',
        },
        {
            name: `Mantram`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/a7f9f039ca01a73e.jpg',
        },
        {
            name: `Inner Fire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e71fe33d98de2c59.jpg',
        },
    ],
    equip: {
        armour: [
            'img/173af4b1ac5e00a6.jpg',
            'img/c0d7da11bf46c9cb.jpg',
            'img/2535db46b2b729c3.jpg',
            'img/7713d5cb8c2800d3.jpg',
            'img/547eae1aa10fc759.jpg',
        ],
        weapon: [
            'img/2eab2e09044269f2.jpg',
            'img/ccc453f102fe332f.jpg',
            'img/db1f6dd3296fafb1.jpg',
            'img/128ec750b73a192a.jpg',
            'img/a04bbb7bd1e67731.jpg',
        ],
    },
    portrait: 'img/492c63717168f644.jpg',
}
