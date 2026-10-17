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
            image: 'img/1cd156b11a7ef164.jpg',
        },
        {
            name: `Hurricane Spin`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/37222a3795ce3eea.jpg',
        },
        {
            name: `Steady Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/51dc7df327374993.jpg',
        },
        {
            name: `Courage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fbac57e9ad1c10e3.jpg',
        },
        {
            name: `Hookshot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/83d187257ed83f73.jpg',
        },
        {
            name: `Big Bomb`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/4be80cf86f85b5de.jpg',
        },
        {
            name: `Boomerang`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/5b91ea126e5548dd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c19758fc76e1630a.jpg',
            'img/2fd809eecfcd010c.jpg',
            'img/5e96278eb47d549c.jpg',
            'img/4aff4ca85adcd7cb.jpg',
            'img/0291f82762b71b19.jpg',
        ],
        weapon: [
            'img/6a398a2d86aaa428.jpg',
            'img/fa97a66c5ed1300f.jpg',
            'img/a2d3ebdebb704734.jpg',
            'img/6624f8409bd7e559.jpg',
            'img/15650316ea583ab1.jpg',
        ],
    },
    portrait: 'img/a528f9949cd1933b.jpg',
}
