// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_flagellant1: ClassModData = {
    key: 'flagellant1',
    name: `Flagellant`,
    originalHero: true,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.65,
        disease: 0.4,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Punish`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b2c07ac071d1825a.jpg',
        },
        {
            name: `Rain of Sorrows`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/93e71befab9bd34c.jpg',
        },
        {
            name: `Exsanguinate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/65d17a46b7ed19f1.jpg',
        },
        {
            name: `Reclaim`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/546fed7a4a6750be.jpg',
        },
        {
            name: `Redeem`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bcc7939c385ffb08.jpg',
        },
        {
            name: `Endure`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/12f706db6c8f0a31.jpg',
        },
        {
            name: `Suffer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a73ef6d8116c1524.jpg',
        },
    ],
    equip: {
        armour: [
            'img/179fb0222703940b.jpg',
            'img/b0b1680b544e55ec.jpg',
            'img/96c772b2b0eb1f46.jpg',
            'img/25642a055ed77730.jpg',
            'img/4097e6c8f4da8279.jpg',
        ],
        weapon: [
            'img/05d59cca85363be1.jpg',
            'img/bf684284bb14533a.jpg',
            'img/0c2bfc8c047b056f.jpg',
            'img/a7a74446c9ce7f0f.jpg',
            'img/263d37b04d8a2012.jpg',
        ],
    },
    portrait: 'img/a44c7696dc32d712.jpg',
}
