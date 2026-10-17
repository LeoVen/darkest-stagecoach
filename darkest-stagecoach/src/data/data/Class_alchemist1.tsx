// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_alchemist1: ClassModData = {
    key: 'alchemist1',
    name: `Alchemist`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2001406494'
        }
    ],
    skills: [
        {
            name: `Putrefaction`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3b5071c56753629f.jpg',
        },
        {
            name: `Decay`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/275b0a564c9657eb.jpg',
        },
        {
            name: `Algernon`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/5fae75eb1752e439.jpg',
        },
        {
            name: `Rupture`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0e91274453b72e2e.jpg',
        },
        {
            name: `Infusion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/311b9ab88d94bb18.jpg',
        },
        {
            name: `Homunculus`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8c7cee0b3e5c019a.jpg',
        },
        {
            name: `Blood Decoction`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d384235245340a0b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8ffd236bb214a52c.jpg',
            'img/63056b93e2ae5d39.jpg',
            'img/0c7f411a9e4d457b.jpg',
            'img/792eba03dd49082b.jpg',
            'img/8e1006051a349e3f.jpg',
        ],
        weapon: [
            'img/940f93e96b358ec0.jpg',
            'img/3e4e8475b34c7dc0.jpg',
            'img/32bf313b7060ee06.jpg',
            'img/1c32734e794eac8c.jpg',
            'img/b4037f8a21305578.jpg',
        ],
    },
    portrait: 'img/fee0ccf23847bc6d.jpg',
}
