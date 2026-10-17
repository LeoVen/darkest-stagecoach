// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spacemarine1_1247612309: ClassModData = {
    key: 'spacemarine1_1247612309',
    name: `Space marine`,
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
            name: `Axe blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b3426006709e9fbb.jpg',
        },
        {
            name: `Bolt pistol`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/98b8c149b7c12e53.jpg',
        },
        {
            name: `On guard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/625765de960864b3.jpg',
        },
        {
            name: `Shield blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e85ab2d2278334d7.jpg',
        },
        {
            name: `Get back`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/948335082d41d998.jpg',
        },
        {
            name: `Power strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/74e47fdc8895dede.jpg',
        },
        {
            name: `Hold the line`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/d2ee530cfb60d4d8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6bee518195dc3887.jpg',
            'img/38fa2806af353bbf.jpg',
            'img/20c7d51f357606d8.jpg',
            'img/0ffdb1a0f1d92d61.jpg',
            'img/f70afd2e52cba309.jpg',
        ],
        weapon: [
            'img/7cdabea6240e8499.jpg',
            'img/e82547c037747345.jpg',
            'img/1f139a20d0515237.jpg',
            'img/0250ac417042fc43.jpg',
            'img/cf69726bed458c8f.jpg',
        ],
    },
    portrait: 'img/951e693fe687c552.jpg',
}
