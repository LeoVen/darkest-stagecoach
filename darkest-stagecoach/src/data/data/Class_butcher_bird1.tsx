// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_butcher_bird1: ClassModData = {
    key: 'butcher_bird1',
    name: `Butcher Bird`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.13, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1447972888'
        }
    ],
    skills: [
        {
            name: `Basting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c2bdec570145e1bb.jpg',
        },
        {
            name: `Overcasting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/ab4e56f4882d7c8e.jpg',
        },
        {
            name: `Skewer`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/7e043b37ccca1dfb.jpg',
        },
        {
            name: `Swoop`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c73980459f52bd1e.jpg',
        },
        {
            name: `Rectify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/8c30938e0a8be899.jpg',
        },
        {
            name: `Devotion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/cab958250d490d26.jpg',
        },
        {
            name: `Scold`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/01df8f5ff24d1c6d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8a7a68fd0fd8fb94.jpg',
            'img/67b1dfab547587eb.jpg',
            'img/86029dfe4b332e69.jpg',
            'img/2b2fb2543eab01cb.jpg',
            'img/528bec2a876092ab.jpg',
        ],
        weapon: [
            'img/d06011c0a08a1e7a.jpg',
            'img/42329e4594fed07b.jpg',
            'img/422fff9ec8bf76bf.jpg',
            'img/9043651cbd930099.jpg',
            'img/8b657ed9c3c32075.jpg',
        ],
    },
    portrait: 'img/07b483774eba979d.jpg',
}
