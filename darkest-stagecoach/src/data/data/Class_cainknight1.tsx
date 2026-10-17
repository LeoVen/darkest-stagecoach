// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cainknight1: ClassModData = {
    key: 'cainknight1',
    name: `Knight of Cain`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.6,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2606931475'
        }
    ],
    skills: [
        {
            name: `Double-edged blade`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/917d9f4505ec45d2.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/99a7cf6c6796ef88.jpg',
        },
        {
            name: `Replenish Bullets`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f9997cc2fec26dbe.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/481bc171b1ef705c.jpg',
        },
        {
            name: `Cut Off`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ab66524eec23dee1.jpg',
        },
        {
            name: `Iai`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/37c1cff8cebdf9c0.jpg',
        },
        {
            name: `Numbing Mist`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a891d653e6ad11dc.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e3ae7d6661e8d94.jpg',
            'img/898f15b1346310c3.jpg',
            'img/3b2c4089452fd3cb.jpg',
            'img/bd7fd46011adc725.jpg',
            'img/f1625f3718d1e05c.jpg',
        ],
        weapon: [
            'img/2de349e51ffc215f.jpg',
            'img/5d1e2e5dad9accba.jpg',
            'img/b7fa7bbb91f8f69c.jpg',
            'img/5051120d29b62ced.jpg',
            'img/3bd1940cd10c704e.jpg',
        ],
    },
    portrait: 'img/45f62914970d763a.jpg',
}
