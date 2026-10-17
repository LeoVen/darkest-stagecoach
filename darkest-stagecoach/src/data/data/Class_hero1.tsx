// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hero1: ClassModData = {
    key: 'hero1',
    name: `Hero`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1586965131'
        }
    ],
    skills: [
        {
            name: `Thrust`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7a07270d10f63693.jpg',
        },
        {
            name: `Hurricane Spin`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ce0860dafe61a691.jpg',
        },
        {
            name: `Steady Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/62545edc1ca0e427.jpg',
        },
        {
            name: `Courage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4ab832aebb05c54d.jpg',
        },
        {
            name: `Hookshot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1dfb17b044c561bf.jpg',
        },
        {
            name: `Big Bomb`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/97c986086dfedcdc.jpg',
        },
        {
            name: `Boomerang`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fb830145bf2268a6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c6215f210a04fcce.jpg',
            'img/26ddfbe5a3fa36e1.jpg',
            'img/5b571371b649d99a.jpg',
            'img/af3ce808e2561797.jpg',
            'img/c0aba12cb3961c7a.jpg',
        ],
        weapon: [
            'img/d8f764f1df55f7f0.jpg',
            'img/14024c5aadf65630.jpg',
            'img/193c7a45859aaad1.jpg',
            'img/7e84120b6741d6d2.jpg',
            'img/652704fce9e2a791.jpg',
        ],
    },
    portrait: 'img/82a92a51d425fe9f.jpg',
}
