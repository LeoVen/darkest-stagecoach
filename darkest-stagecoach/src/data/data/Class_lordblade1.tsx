// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lordblade1: ClassModData = {
    key: 'lordblade1',
    name: `Lord's Blade`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1433161277'
        }
    ],
    skills: [
        {
            name: `Mutilate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9fcc22ea5ddfdacc.jpg',
        },
        {
            name: `Backstab`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/29a60e3163de063f.jpg',
        },
        {
            name: `Golden Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3e781f2f3ece0b29.jpg',
        },
        {
            name: `Fast Roll`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/17100cf5bba194e9.jpg',
        },
        {
            name: `Thrown Tracer`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/0fa74307d1d51425.jpg',
        },
        {
            name: `Silver Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5d0cebbc118625ed.jpg',
        },
        {
            name: `Estus Brew`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a7a7b9a75e141e25.jpg',
        },
    ],
    equip: {
        armour: [
            'img/aee561fcb7372d81.jpg',
            'img/7abd4fa98e9ac3a1.jpg',
            'img/b05e5a7502b5cb7d.jpg',
            'img/f331f8bfd03c2cad.jpg',
            'img/20e16b62fa12cd73.jpg',
        ],
        weapon: [
            'img/930499ce8e0776ec.jpg',
            'img/bbced1222813c293.jpg',
            'img/c1dad5c360475a49.jpg',
            'img/ad4d82bca79a1d12.jpg',
            'img/574891290f25f8fc.jpg',
        ],
    },
    portrait: 'img/65df62e416c0edf4.jpg',
}
