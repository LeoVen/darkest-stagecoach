// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shieldbreaker: ClassModData = {
    key: 'shieldbreaker',
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
            image: 'img/25dc979a16006274.jpg',
        },
        {
            name: `Puncture`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/f31417ad8b28c639.jpg',
        },
        {
            name: `Adder's Kiss`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9e92ec501a780854.jpg',
        },
        {
            name: `Impale`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/337a441a3afd387d.jpg',
        },
        {
            name: `Expose`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f7845fbb9512aa15.jpg',
        },
        {
            name: `Captivate`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/d4d5bb5ba9a146f5.jpg',
        },
        {
            name: `Serpent Sway`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b7521a205cb5d55f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/31ee0847ca97eff5.jpg',
            'img/f90339938d47a0f1.jpg',
            'img/d1a191e40c2cb433.jpg',
            'img/58946723573fcdcb.jpg',
            'img/67028aa29ca3c026.jpg',
        ],
        weapon: [
            'img/e344029516659611.jpg',
            'img/e78ac7740fcc8cc0.jpg',
            'img/4c9c31ebfc7dc8f4.jpg',
            'img/ab3a030be2b1463f.jpg',
            'img/da2f59238196aaa2.jpg',
        ],
    },
    portrait: 'img/aefe6687d84b7cea.jpg',
}
