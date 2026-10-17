// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shieldbreaker1: ClassModData = {
    key: 'shieldbreaker1',
    name: `Shieldbreaker`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Pierce`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ae0f29a0233092cd.jpg',
        },
        {
            name: `Puncture`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/093735f4f1965a85.jpg',
        },
        {
            name: `Adder's Kiss`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/90c16368a047b3f2.jpg',
        },
        {
            name: `Impale`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8713b6e998f94b7e.jpg',
        },
        {
            name: `Expose`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4af24d5421560496.jpg',
        },
        {
            name: `Captivate`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/b310f6752b342702.jpg',
        },
        {
            name: `Serpent Sway`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a3eca62924823358.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1f36e5e5af1835a1.jpg',
            'img/2160488f0c73a8a6.jpg',
            'img/b0a87b0acc7ca2cb.jpg',
            'img/0eebfc0c3459e66a.jpg',
            'img/53d9ea35c44c15f7.jpg',
        ],
        weapon: [
            'img/f84bee1fa43ecf11.jpg',
            'img/604e7c4ac3609a37.jpg',
            'img/06d88d4574afd4d3.jpg',
            'img/a340d4a14fc4182d.jpg',
            'img/63585f7fc9250783.jpg',
        ],
    },
    portrait: 'img/fc691f4a02ff84a1.jpg',
}
