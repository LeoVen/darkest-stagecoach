// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arbalest: ClassModData = {
    key: 'arbalest',
    name: `Arbalest`,
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
            name: `Sniper Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/1d3092d1c0db5b55.jpg',
        },
        {
            name: `Suppressing Fire`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/40a8201b6108d14c.jpg',
        },
        {
            name: `Sniper's Mark`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `Bola`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/082a7cbd082d327c.jpg',
        },
        {
            name: `Blindfire`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/e859a104cc83d3ab.jpg',
        },
        {
            name: `Battlefield Bandage`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2f2ca07a0e9015ff.jpg',
        },
        {
            name: `Rallying Flare`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b6bd704b5d6cfc15.jpg',
        },
    ],
    equip: {
        armour: [
            'img/74cac02b540098e6.jpg',
            'img/0f8adbb6acaec08e.jpg',
            'img/929ee449f3320515.jpg',
            'img/f402aec22685f2f5.jpg',
            'img/01055e5c34550fe2.jpg',
        ],
        weapon: [
            'img/8daec1bdaae6a4c8.jpg',
            'img/5030fe18593fe8d8.jpg',
            'img/fb088b296985d27b.jpg',
            'img/43e2d33ef23b714e.jpg',
            'img/d0cc691ed01687ed.jpg',
        ],
    },
    portrait: 'img/be5f047bafd3a3e5.jpg',
}
