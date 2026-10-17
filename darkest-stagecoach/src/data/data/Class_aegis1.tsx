// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_aegis1: ClassModData = {
    key: 'aegis1',
    name: `Royal Aegis`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [12.0, 22.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1391514231'
        }
    ],
    skills: [
        {
            name: `Two Handed Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/72f70c2b45fda924.jpg',
        },
        {
            name: `Overhead Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2559365822a82fdf.jpg',
        },
        {
            name: `Multi-Hit`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/adcb9033d19b723d.jpg',
        },
        {
            name: `Dark Solace`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e4f869e254991716.jpg',
        },
        {
            name: `Launch`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/a3d0e969e7bcd648.jpg',
        },
        {
            name: `Oath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a6340eb1d6236733.jpg',
        },
        {
            name: `Dark Barrage`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/cfbaf129b1d397cc.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4772ce162b0bcbc3.jpg',
            'img/a6cb299233ee1a38.jpg',
            'img/931f36076a4400a9.jpg',
            'img/130db05355ba8a54.jpg',
            'img/ca75b5dd6bf0990d.jpg',
        ],
        weapon: [
            'img/239ab39ff3e5421b.jpg',
            'img/ef1db3127b2f87fb.jpg',
            'img/182874f4b08c57aa.jpg',
            'img/1be3d668d5b4067d.jpg',
            'img/4b7c3f1c6618cd74.jpg',
        ],
    },
    portrait: 'img/41eb1b92314b545e.jpg',
}
