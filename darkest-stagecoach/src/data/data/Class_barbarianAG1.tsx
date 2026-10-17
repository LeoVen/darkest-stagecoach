// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_barbarianAG1: ClassModData = {
    key: 'barbarianAG1',
    name: `Barbarian`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 1,
        blight: 0,
        bleed: 0,
        disease: 0,
        move: 1,
        debuff: 0,
        deathBlow: 0.5,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 38, speed: 0 },
            { dodge: 0, prot: 0, hp: 45, speed: 0 },
            { dodge: 0, prot: 0, hp: 52, speed: 0 },
            { dodge: 0, prot: 0, hp: 59, speed: 0 },
            { dodge: 0, prot: 0, hp: 66, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 18.0], crit: 0.005, speed: 2 },
            { accuracy: 0, damage: [3.0, 21.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [4.0, 24.0], crit: 0.015, speed: 3 },
            { accuracy: 0, damage: [5.0, 27.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 30.0], crit: 0.025, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1686591937'
        }
    ],
    skills: [
        {
            name: `Carve`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6f3afe4bf2e87c57.jpg',
        },
        {
            name: `Sunder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/dd25d5e3e0d34db7.jpg',
        },
        {
            name: `Cleave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c7c80ac0131d1e8b.jpg',
        },
        {
            name: `Claw`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/db20ea22b09ba450.jpg',
        },
        {
            name: `Trample`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3c3a839b4c956de3.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c4aa0b30500bb791.jpg',
        },
        {
            name: `Iron Flesh`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/61c3afb3069068b0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e2480bb0b970972c.jpg',
            'img/f93e5f03f7017d54.jpg',
            'img/0ca09f5ef3309295.jpg',
            'img/92b422d9be5432cd.jpg',
            'img/4a5136c1d0eeb8a5.jpg',
        ],
        weapon: [
            'img/c07284fd0e58d758.jpg',
            'img/77d78be49834d53a.jpg',
            'img/9156d3100536db0e.jpg',
            'img/a96c4e8580d9baaa.jpg',
            'img/bae14fd257de3c57.jpg',
        ],
    },
    portrait: 'img/806061eafb2e8995.jpg',
}
