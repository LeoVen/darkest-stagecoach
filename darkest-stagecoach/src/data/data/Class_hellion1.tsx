// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hellion1: ClassModData = {
    key: 'hellion1',
    name: `Hellion`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Wicked Hack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4c852a6d13ce2646.jpg',
        },
        {
            name: `Iron Swan`,
            launch: [true,false,false,false],
            target: {
                targets: [false,false,false,true],
                mods: ``,
            },
            image: 'img/6c55634e2349f88f.jpg',
        },
        {
            name: `Barbaric YAWP!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e86385bf5daccc9f.jpg',
        },
        {
            name: `If It Bleeds`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/5a9a1983e9e26229.jpg',
        },
        {
            name: `Breakthrough`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/dade7e220fef3550.jpg',
        },
        {
            name: `Adrenaline Rush`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2cef4beb48ca3b89.jpg',
        },
        {
            name: `Bleed Out`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/25f224972c208bdc.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c4c5788e36caba52.jpg',
            'img/6febe44145bd79d3.jpg',
            'img/74a704de60084eaa.jpg',
            'img/cc64cf3d9918c314.jpg',
            'img/040b36b1c080f38b.jpg',
        ],
        weapon: [
            'img/5e141398519e97f0.jpg',
            'img/571f2968b3807070.jpg',
            'img/ceb5a07b3a65ec9a.jpg',
            'img/6291c0a1e5eb4e45.jpg',
            'img/f896269e92823687.jpg',
        ],
    },
    portrait: 'img/b28a9631c236a2fb.jpg',
}
