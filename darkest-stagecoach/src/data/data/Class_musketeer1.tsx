// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_musketeer1: ClassModData = {
    key: 'musketeer1',
    name: `Musketeer`,
    originalHero: true,
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
            { dodge: 0, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e9b60eee7dd860c4.jpg',
        },
        {
            name: `Smokescreen`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/cb3865f63acdee6f.jpg',
        },
        {
            name: `Call the Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `Buckshot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7004873825964999.jpg',
        },
        {
            name: `Sidearm`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/2fc8ec84177c5656.jpg',
        },
        {
            name: `Patch Up`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/59bf3516dd30b07f.jpg',
        },
        {
            name: `Skeet Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e0a4122cd61756ab.jpg',
        },
    ],
    equip: {
        armour: [
            'img/488e84384df8d37c.jpg',
            'img/20533b111ed2a247.jpg',
            'img/c873227bbce696f3.jpg',
            'img/328a34b88ce4030a.jpg',
            'img/6140b7efbb3490ba.jpg',
        ],
        weapon: [
            'img/358d9ce5da54bf1c.jpg',
            'img/241f78014835f61a.jpg',
            'img/f6ab69518c1ed723.jpg',
            'img/7d2dd1dc15b2b123.jpg',
            'img/58dfaea8f2b355cb.jpg',
        ],
    },
    portrait: 'img/3b0127ba229ca0cc.jpg',
}
