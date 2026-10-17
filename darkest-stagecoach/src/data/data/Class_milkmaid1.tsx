// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_milkmaid1: ClassModData = {
    key: 'milkmaid1',
    name: `Milkmaid`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 3,
        disease: 0,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2389396590'
        }
    ],
    skills: [
        {
            name: `Cosmic Trident`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1f906f7a7b8d2b3d.jpg',
        },
        {
            name: `Celestial Javelin`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/bf28c5a30c816d8a.jpg',
        },
        {
            name: `  ¤ ¤ ¤ ¤
Comet's Kindness`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b16a968dbc7326fc.jpg',
        },
        {
            name: ` ¤ ¤ ¤¦¤
Dust Breath`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~@`,
            },
            image: 'img/9b97f92db7042dd5.jpg',
        },
        {
            name: `  ¤¦¤ ¤ ¤
Dust Downwind`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `~@`,
            },
            image: 'img/0b61a7a7935ce0b0.jpg',
        },
        {
            name: `  ¤ ¤ ¤ ¤
Glimmering Butterfly`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/aab1fb40340de0b8.jpg',
        },
        {
            name: `Crystalizing Talon`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1182ff97f600449b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d2e475f9c720c16a.jpg',
            'img/f258fa881d7e360e.jpg',
            'img/54659f8df36a6ec3.jpg',
            'img/e537a6256f0af4c1.jpg',
            'img/848d56c39bda0688.jpg',
        ],
        weapon: [
            'img/1b04005c78d48380.jpg',
            'img/038a9f9beb433874.jpg',
            'img/73b6a6a63f59ea7d.jpg',
            'img/a70c2a9b39fcf727.jpg',
            'img/b428f99425b00212.jpg',
        ],
    },
    portrait: 'img/9056f31f1ebe54e3.jpg',
}
