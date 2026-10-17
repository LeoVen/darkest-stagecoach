// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dragonslayers1: ClassModData = {
    key: 'dragonslayers1',
    name: `Dragonslayer Knight`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1209578556'
        }
    ],
    skills: [
        {
            name: `Lunge`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/695c9b72e25ae163.jpg',
        },
        {
            name: `Swift Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/25e4fa683415ab7f.jpg',
        },
        {
            name: `Charging Stab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3b54a0fc5353e62e.jpg',
        },
        {
            name: `Lightning Spear`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7bb5d8a36ca1ab00.jpg',
        },
        {
            name: `Nimble Defense`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e668fc9ef4548fa0.jpg',
        },
        {
            name: `Thundering Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2b0d80d2b3a6e59d.jpg',
        },
        {
            name: `Shocking Impale`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b27016d3f5ced93d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9f6ba3081c5d6ccb.jpg',
            'img/daa24b3bdc54bd47.jpg',
            'img/d6dada132d04c6a0.jpg',
            'img/2f1a01fdfc96c785.jpg',
            'img/74a73a0eb54a5dbb.jpg',
        ],
        weapon: [
            'img/b26e9148eb8766b6.jpg',
            'img/5cf1775954d663dd.jpg',
            'img/93f366ea2f5d8b90.jpg',
            'img/32bb48117c7e6c87.jpg',
            'img/3cc9ae47abe7dce0.jpg',
        ],
    },
    portrait: 'img/b31bd3d832464a61.jpg',
}
