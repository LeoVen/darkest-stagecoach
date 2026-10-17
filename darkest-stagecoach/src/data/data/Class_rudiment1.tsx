// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_rudiment1: ClassModData = {
    key: 'rudiment1',
    name: `Rudiment`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.6,
        bleed: 0.05,
        disease: 0.3,
        move: 0.6,
        debuff: 0.25,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.01, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.03, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 62, speed: 1 },
            { dodge: 0.15, prot: 0, hp: 70, speed: 1 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.01, speed: 1 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [11.0, 19.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [13.0, 21.0], crit: 0.04, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2615190806'
        }
    ],
    skills: [
        {
            name: `Heavy Impact`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0d3cceab2075e5dd.jpg',
        },
        {
            name: `Rage and Fear`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d2fee50d97212cd9.jpg',
        },
        {
            name: `Excellence`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/6f82ae959451061c.jpg',
        },
        {
            name: `Perilous Flesh`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e5020eb32fbb8bc7.jpg',
        },
        {
            name: `Who is Creator?`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/022b31774978ef4d.jpg',
        },
        {
            name: `Phlebotomy`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fbab465744dfb807.jpg',
        },
        {
            name: `Terrible Song`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c907cfea92474da0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/748d2184988bb3fa.jpg',
            'img/150bf6838d6a0d4a.jpg',
            'img/a0225fdce9bd25e2.jpg',
            'img/9456fc69ad8367b8.jpg',
            'img/23cbf2b47a8df637.jpg',
        ],
        weapon: [
            'img/d2f5acb33c0b43d9.jpg',
            'img/ceb88f7200dfa4f0.jpg',
            'img/344f4c6dfa5ce1c4.jpg',
            'img/2de1a41dc6657b7f.jpg',
            'img/aaf98f62e7d7a4f9.jpg',
        ],
    },
    portrait: 'img/6955e3a8db8a922f.jpg',
}
