// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_anoint1: ClassModData = {
    key: 'anoint1',
    name: `Anointed`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2378584809'
        }
    ],
    skills: [
        {
            name: `Sacred Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9dbd55f656abe88e.jpg',
        },
        {
            name: `Zealous Ire`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ca5c7dcf33ac8978.jpg',
        },
        {
            name: `Admonish`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/65f12c492002404c.jpg',
        },
        {
            name: `Condemn`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9cda9ce07adc0073.jpg',
        },
        {
            name: `Renew`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/a94684c2a35de67e.jpg',
        },
        {
            name: `Holy Obligation`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/80ab66d29fd9102d.jpg',
        },
        {
            name: `Safeguard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/93de6b4b6eeaf956.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a2301a5e956dd35d.jpg',
            'img/480696e42f4035d5.jpg',
            'img/7df8edd5f5dc0059.jpg',
            'img/16d67ce47f6f797d.jpg',
            'img/a26f254815e6e7f4.jpg',
        ],
        weapon: [
            'img/5bdb29d5d5644a09.jpg',
            'img/ecb4172212fcc31a.jpg',
            'img/793f0017698ef3a3.jpg',
            'img/00bb76891aa692f2.jpg',
            'img/9b6ed396f53dbbed.jpg',
        ],
    },
    portrait: 'img/8ee41ed6d6676948.jpg',
}
