// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_janissary1: ClassModData = {
    key: 'janissary1',
    name: `Janissary`,
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
            { dodge: 0.07, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2377934884'
        }
    ],
    skills: [
        {
            name: `Arquebus Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d22b7f8ac91af4dc.jpg',
        },
        {
            name: `Thin the Herd`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/afb5e050829d1c86.jpg',
        },
        {
            name: `Tempered Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/dcf9e61728009320.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
   Brothers in Arms`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4d4aefd01c895c74.jpg',
        },
        {
            name: `Brace the Gun`,
            launch: [false,false,false,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/588d449a977f16a0.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
   Song of Valor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/f5813333ca2b44ea.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
   One Man Band`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/07f497d3a4d74659.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9bd49d3cfa4b81c1.jpg',
            'img/31ca92d77ddf7499.jpg',
            'img/3f4264645484ecf4.jpg',
            'img/a1f91eb0846f2c6c.jpg',
            'img/7f7a32c7abae4f71.jpg',
        ],
        weapon: [
            'img/9d2e6ac5cb0c9b6b.jpg',
            'img/eb89f5688501402f.jpg',
            'img/896682bb38832899.jpg',
            'img/664536a469518174.jpg',
            'img/5f9e32de211948db.jpg',
        ],
    },
    portrait: 'img/233533b00c4da688.jpg',
}
