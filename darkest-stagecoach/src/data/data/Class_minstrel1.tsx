// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_minstrel1: ClassModData = {
    key: 'minstrel1',
    name: `minstrel`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.06, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2122287782'
        }
    ],
    skills: [
        {
            name: `Star meteor`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/912d7e4c8953c00b.jpg',
        },
        {
            name: `Stab lunam`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7e4fa5c8b1ba774a.jpg',
        },
        {
            name: `Reed plain`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1b8129f909ae5747.jpg',
        },
        {
            name: `Last Stand`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/aa44f6789a67e533.jpg',
        },
        {
            name: `Ebriety`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2a818c89cc5b386d.jpg',
        },
        {
            name: `Early Spring`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/3439fc9502504b7d.jpg',
        },
        {
            name: `Birdsong`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/c0b46f712a24f405.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3c24a71b30d9addb.jpg',
            'img/4ba33a8ecb232211.jpg',
            'img/d98a1dcd7b4aaa2c.jpg',
            'img/9b74244e1e18f2c8.jpg',
            'img/21270f4fc6c1451e.jpg',
        ],
        weapon: [
            'img/cd071907e1ccbda7.jpg',
            'img/b3d331502e438fa4.jpg',
            'img/de0b121cf21adc5a.jpg',
            'img/6c9c3622257fda51.jpg',
            'img/a9afdaf88170032a.jpg',
        ],
    },
    portrait: 'img/851a2e3ac69c84a5.jpg',
}
