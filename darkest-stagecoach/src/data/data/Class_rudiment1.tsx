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
            image: 'img/183cce872172831c.jpg',
        },
        {
            name: `Rage and Fear`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0c5b51002266e8e0.jpg',
        },
        {
            name: `Excellence`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/6b80bbc214c89e47.jpg',
        },
        {
            name: `Perilous Flesh`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5540d07d75bbf972.jpg',
        },
        {
            name: `Who is Creator?`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/13f669fa6bf69c35.jpg',
        },
        {
            name: `Phlebotomy`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/90b1cf2e29b40b16.jpg',
        },
        {
            name: `Terrible Song`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/7243b52cdb0f5820.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fec480b28267ba46.jpg',
            'img/bce268f074f29bb7.jpg',
            'img/4372c327bb7d64ad.jpg',
            'img/efde6297cbfbffc7.jpg',
            'img/7a8700da1261488d.jpg',
        ],
        weapon: [
            'img/7ae2bcf328e7d9d9.jpg',
            'img/a7ec6d9233bdbd7e.jpg',
            'img/c89e4eb213f5f3f8.jpg',
            'img/a73eb7b17a108299.jpg',
            'img/ef12ba9be3a827ad.jpg',
        ],
    },
    portrait: 'img/668afe6ed7972565.jpg',
}
