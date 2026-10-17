// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shrapnel1: ClassModData = {
    key: 'shrapnel1',
    name: `Shrapnel`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.6,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: -0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [11.0, 15.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1203645088'
        }
    ],
    skills: [
        {
            name: `Vent`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d9e5135b8716805f.jpg',
        },
        {
            name: `Overclocking`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fd1357a06b382db1.jpg',
        },
        {
            name: `Entrenchement`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b6a9542c07ebdb0c.jpg',
        },
        {
            name: `Fragmentation`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e6fc5bb1539d2f46.jpg',
        },
        {
            name: `Flush Out`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ff264e607e432f48.jpg',
        },
        {
            name: `Mow Down`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/d1bac5aa7ef6424f.jpg',
        },
        {
            name: `Expunge`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6294180ecceb8dce.jpg',
        },
    ],
    equip: {
        armour: [
            'img/94823e74fda5a0ee.jpg',
            'img/ca7b7404682062fc.jpg',
            'img/0b19d0336f7df522.jpg',
            'img/77cad73529ef93a6.jpg',
            'img/b4d8e8c6112624aa.jpg',
        ],
        weapon: [
            'img/fa87ebd16fdc38f3.jpg',
            'img/d7364c2fb345e07b.jpg',
            'img/9517677c78a49977.jpg',
            'img/de5afc7bdde3cabd.jpg',
            'img/0175a7f9b282a37c.jpg',
        ],
    },
    portrait: 'img/3efe202fbc7f1367.jpg',
}
