// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nbb_owlwing1: ClassModData = {
    key: 'nbb_owlwing1',
    name: `Owlwing`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2497069197'
        }
    ],
    skills: [
        {
            name: `Bomba de fumaça`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2c38cd389a391b70.jpg',
        },
        {
            name: `Briga`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a503bfd9a07b46bb.jpg',
        },
        {
            name: `Cabo Atordoante`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3a9a2b15e8b42801.jpg',
        },
        {
            name: `Vontade de Vingança`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/afffdf369ceb4d59.jpg',
        },
        {
            name: `Gancho tiro rápido`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/0512e0451ee491a5.jpg',
        },
        {
            name: `Arranhão Oculi`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0fa215ab8c5296a4.jpg',
        },
        {
            name: `Owlarang`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/26c47026c144d65f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/57adb7e640fd9cf2.jpg',
            'img/37ed261c91ef07c5.jpg',
            'img/72f81f9eeaf2cdb3.jpg',
            'img/6366523b4fe2e970.jpg',
            'img/f9efb34fd62a8c4d.jpg',
        ],
        weapon: [
            'img/e1afd12bf1cf7069.jpg',
            'img/6130df0a93c23e1d.jpg',
            'img/49541112c67b03c8.jpg',
            'img/18bf0e820af5496a.jpg',
            'img/f57b1980b90980ca.jpg',
        ],
    },
    portrait: 'img/1d1f4395cb9ff942.jpg',
}
