// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_graveborn1: ClassModData = {
    key: 'graveborn1',
    name: `Graveborn`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.75,
        disease: 0.5,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2737382067'
        }
    ],
    skills: [
        {
            name: `Grim Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/03424ae8202a1b28.jpg',
        },
        {
            name: `From the Grave`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/bbb33828c3dc970b.jpg',
        },
        {
            name: `Withering Grasp`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0498f447bdc64384.jpg',
        },
        {
            name: `Grave Guard`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: `~@`,
            },
            image: 'img/984dbcc729dfa922.jpg',
        },
        {
            name: `Dead Light`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/137bb1bfd9ff1dca.jpg',
        },
        {
            name: `Revenant's Curse`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e5415a83fdc6e700.jpg',
        },
        {
            name: `Drive Them Back`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/a9ebbf8e729c5c11.jpg',
        },
    ],
    equip: {
        armour: [
            'img/419e6ecdf6703a50.jpg',
            'img/d11ae8bfe8267f68.jpg',
            'img/795bdd398c851d0f.jpg',
            'img/7763328955251427.jpg',
            'img/2acbfebe14891161.jpg',
        ],
        weapon: [
            'img/a7d433f4132a5969.jpg',
            'img/41e9b636a2f64171.jpg',
            'img/e29194f7349a44c0.jpg',
            'img/1ce774b3f7f1f289.jpg',
            'img/83b2254d2f4ccf7f.jpg',
        ],
    },
    portrait: 'img/11c6fce3d18f6662.jpg',
}
