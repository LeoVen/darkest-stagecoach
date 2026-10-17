// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_reaver1: ClassModData = {
    key: 'reaver1',
    name: `Reaver`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 58, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.085, speed: 5 },
            { accuracy: 0, damage: [6.0, 16.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.095, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=948931447'
        }
    ],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/319d872e10b255a5.jpg',
        },
        {
            name: `Buckshot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/7004873825964999.jpg',
        },
        {
            name: `Raid Commander`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4722e61adf6f61f3.jpg',
        },
        {
            name: `Stand and Deliver`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/62c13efe3042049a.jpg',
        },
        {
            name: `Return Fire`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/a208422706b1b6f1.jpg',
        },
        {
            name: `Expose`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/eb87404de5ec1b20.jpg',
        },
        {
            name: `Cowering Fire`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ea9e0155dea6e399.jpg',
        },
    ],
    equip: {
        armour: [
            'img/084dc7ecad9c5677.jpg',
            'img/2fe17fc9bde9063a.jpg',
            'img/382dba797f8998ce.jpg',
            'img/cda8f2f92b5e965e.jpg',
            'img/464f2c5808cca721.jpg',
        ],
        weapon: [
            'img/358d9ce5da54bf1c.jpg',
            'img/241f78014835f61a.jpg',
            'img/f6ab69518c1ed723.jpg',
            'img/7d2dd1dc15b2b123.jpg',
            'img/58dfaea8f2b355cb.jpg',
        ],
    },
    portrait: 'img/9ede52ea0de2ff42.jpg',
}
