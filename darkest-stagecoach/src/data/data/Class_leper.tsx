// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_leper: ClassModData = {
    key: 'leper',
    name: `Leper`,
    originalHero: true,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [12.0, 23.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [13.0, 26.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Chop`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6bf3d9f9f369ab84.jpg',
        },
        {
            name: `Hew`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/a3cc30176f69fad1.jpg',
        },
        {
            name: `Purge`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/161383270d1cd1c2.jpg',
        },
        {
            name: `Revenge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/65cd4a0ee4dedb25.jpg',
        },
        {
            name: `Solemnity`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/98484d92c6e28fc2.jpg',
        },
        {
            name: `Withstand`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5b05165de00efe66.jpg',
        },
        {
            name: `Intimidate`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/48c2dd634cf66e87.jpg',
        },
    ],
    equip: {
        armour: [
            'img/93197e7d1d466101.jpg',
            'img/4f1706eda567fb3b.jpg',
            'img/5e0a3340b7a9313d.jpg',
            'img/e3ff3e5d748a080a.jpg',
            'img/29f9462db9cd6381.jpg',
        ],
        weapon: [
            'img/e271ebb0c95b1dc8.jpg',
            'img/df6256c47ee62617.jpg',
            'img/7f8411ab1e9f76eb.jpg',
            'img/c7198320331d6941.jpg',
            'img/524401550d1eaf43.jpg',
        ],
    },
    portrait: 'img/decd644ee89efe7b.jpg',
}
