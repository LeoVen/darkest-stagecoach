// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_meister1: ClassModData = {
    key: 'meister1',
    name: `Meister`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2575427235'
        }
    ],
    skills: [
        {
            name: `Preheat`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/70b8cfc9fab90788.jpg',
        },
        {
            name: `Fury of the Beast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/dd838d505893dffd.jpg',
        },
        {
            name: `Open Fire!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/aebba1c401a371dc.jpg',
        },
        {
            name: `Acupuncture`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/caf88e6fee1b0b8f.jpg',
        },
        {
            name: `Spray Gunpowder`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/4a6b5cc9e780fa77.jpg',
        },
        {
            name: `Smokebomb`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/26a104699e9d8c8e.jpg',
        },
        {
            name: `Iron Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9262fb30a4fcf74b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/32a467a0ffb75876.jpg',
            'img/56891cd1c86f9014.jpg',
            'img/3ea75d252ef2dae4.jpg',
            'img/66f25be85c4aecb0.jpg',
            'img/c8980dce3fc05b49.jpg',
        ],
        weapon: [
            'img/b0bf298ee44ca205.jpg',
            'img/da6269bd5668d56b.jpg',
            'img/8c7cabd8500bc847.jpg',
            'img/4ebe51a286a21a13.jpg',
            'img/9f8a37d49d95129e.jpg',
        ],
    },
    portrait: 'img/f4ad254ac901d2ac.jpg',
}
