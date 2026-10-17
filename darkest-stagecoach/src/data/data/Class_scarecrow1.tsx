// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_scarecrow1: ClassModData = {
    key: 'scarecrow1',
    name: `Scarecrow`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.1,
        bleed: 2.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2104150657'
        }
    ],
    skills: [
        {
            name: `Flail the Crops`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7d2f2a181b6b05a0.jpg',
        },
        {
            name: `Stinging Flick`,
            launch: [false,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d95285ecb9d42289.jpg',
        },
        {
            name: `Roots`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/557c46f2c1189257.jpg',
        },
        {
            name: `Eldritch Light`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/b67f4c730c3ec5f5.jpg',
        },
        {
            name: `Crystal Powder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/428f0f3cad1c2f34.jpg',
        },
        {
            name: `Shard of Growth`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f3ac5d32e5b1bcc6.jpg',
        },
        {
            name: `Iridescence`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/acaf2c618f659b3f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e1253ce351772f0.jpg',
            'img/12cb621f6e5ba569.jpg',
            'img/ecbf09b461c1ef2f.jpg',
            'img/53e779eaf2193548.jpg',
            'img/ec562ccd5a477608.jpg',
        ],
        weapon: [
            'img/9c79ec863419a591.jpg',
            'img/d731ed38aafc4efe.jpg',
            'img/6e44f8949a40e48b.jpg',
            'img/75b096278421dae8.jpg',
            'img/a0e952a3bef94278.jpg',
        ],
    },
    portrait: 'img/a1e592a874be3f69.jpg',
}
