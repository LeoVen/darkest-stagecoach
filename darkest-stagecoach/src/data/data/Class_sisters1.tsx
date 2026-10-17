// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_sisters1: ClassModData = {
    key: 'sisters1',
    name: `Sisters`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1440822424'
        }
    ],
    skills: [
        {
            name: `Possession`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fdbdf58870f7b2c8.jpg',
        },
        {
            name: `Weed Out`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/92d58f965a9f11a5.jpg',
        },
        {
            name: `Blossom`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6a6b24fb235a5629.jpg',
        },
        {
            name: `Bramble`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ac8f41dc7512be87.jpg',
        },
        {
            name: `Trespass`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7827e9feef3d0789.jpg',
        },
        {
            name: `Shroud`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3ad3a935e307ef1c.jpg',
        },
        {
            name: `Crimson Dance`,
            launch: [false,true,false,true],
            target: {
                targets: [true,false,true,false],
                mods: `~`,
            },
            image: 'img/b3ea654aa4bb82e5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/13b9adad8cc9bf5a.jpg',
            'img/7e35048cc913bfed.jpg',
            'img/c46102425f38262a.jpg',
            'img/26f717217e097bb2.jpg',
            'img/2e263708f20be920.jpg',
        ],
        weapon: [
            'img/cec8082eeac93878.jpg',
            'img/8e7ec44a55450cbb.jpg',
            'img/2dfeafc3a29e78c6.jpg',
            'img/a5ac9406f8887b07.jpg',
            'img/3529530e0dbf8567.jpg',
        ],
    },
    portrait: 'img/1d6c21dd033dfcc2.jpg',
}
