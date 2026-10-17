// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cleric_errant1: ClassModData = {
    key: 'cleric_errant1',
    name: `Cleric Errant`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.08, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2518583774'
        }
    ],
    skills: [
        {
            name: `Hammer of Faith`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/39cb403760af927b.jpg',
        },
        {
            name: `Shield Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/afe1b709095a6733.jpg',
        },
        {
            name: `Blinding Glare`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/452ec7bfc4d73394.jpg',
        },
        {
            name: `Orison`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/f51c686537583042.jpg',
        },
        {
            name: `Intercession`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a3f684de2b4f5caa.jpg',
        },
        {
            name: `Knight's Vow`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/85789aca5aea4fed.jpg',
        },
        {
            name: `Sanctification`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/21c10f2009118a32.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2f2e23dfb030bec0.jpg',
            'img/827d53b7a6d57546.jpg',
            'img/482ed6748f0c728b.jpg',
            'img/623a014f5b5b6ab9.jpg',
            'img/b074447a573f4727.jpg',
        ],
        weapon: [
            'img/d9716a64fe537d53.jpg',
            'img/e9625d90636cfe09.jpg',
            'img/6cfd8a58986f7cd8.jpg',
            'img/731f8394140a89fe.jpg',
            'img/5c1b19ef29ce9dbf.jpg',
        ],
    },
    portrait: 'img/ae62957cb3cf624b.jpg',
}
