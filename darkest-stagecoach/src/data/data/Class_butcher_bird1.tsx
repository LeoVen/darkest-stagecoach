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
            image: 'img/6be15c50272ac5ce.jpg',
        },
        {
            name: `Overcasting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/2d5a04e02ce1e9f7.jpg',
        },
        {
            name: `Skewer`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/bddacbfdee489255.jpg',
        },
        {
            name: `Swoop`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c26faa0c62d30628.jpg',
        },
        {
            name: `Rectify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/53aaece271df095a.jpg',
        },
        {
            name: `Devotion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e672198e2fd1fb7e.jpg',
        },
        {
            name: `Scold`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/509f9ed6bffe22ab.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fdbeb081884c8c46.jpg',
            'img/18628191580b1ad4.jpg',
            'img/37127cb34f86efcb.jpg',
            'img/b2f2518e48a74e15.jpg',
            'img/d70f237bf371eb63.jpg',
        ],
        weapon: [
            'img/c870fdb43fa722e9.jpg',
            'img/1e245b9b47687d3f.jpg',
            'img/ee16871ff9fdd752.jpg',
            'img/2b8f142f217357ae.jpg',
            'img/d885db79f0b6441d.jpg',
        ],
    },
    portrait: 'img/4df1bdcc2f8fe241.jpg',
}
