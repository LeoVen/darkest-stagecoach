// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_kheir1: ClassModData = {
    key: 'kheir1',
    name: `Heir`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1649053641'
        }
    ],
    skills: [
        {
            name: `Letter Opener`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/99a32bc4cc52324a.jpg',
        },
        {
            name: `Panic!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/50098f5d80a5b017.jpg',
        },
        {
            name: `Have a taste!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ef6b421c66cfcb36.jpg',
        },
        {
            name: `A Snifter to Share`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/33d7bb2233ac9f36.jpg',
        },
        {
            name: `Drown My Sorrows`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0c09d1c531e3ebe1.jpg',
        },
        {
            name: `Research`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c028973f41fe716b.jpg',
        },
        {
            name: `Promotion`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a1e82ad0ef496b83.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0842f3be7c2d0c6e.jpg',
            'img/c2a8ba6f69d42ce6.jpg',
            'img/eea0a57637b566b1.jpg',
            'img/b89e41b49b319333.jpg',
            'img/4fde63fef42fce27.jpg',
        ],
        weapon: [
            'img/e47c228e3519fdb4.jpg',
            'img/cc4931f775a69656.jpg',
            'img/ada6c03360c78394.jpg',
            'img/e6f4f7063b44283c.jpg',
            'img/e551631a76c02e71.jpg',
        ],
    },
    portrait: 'img/33d4187ff669de46.jpg',
}
