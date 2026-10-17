// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_MP40_2537722480: ClassModData = {
    key: 'MP40_2537722480',
    name: `MP40`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.3, prot: 0.1, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.09, speed: 7 },
            { accuracy: 0.05, damage: [9.0, 16.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2537722480'
        }
    ],
    skills: [
        {
            name: `点射`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e060c7c70a932487.jpg',
        },
        {
            name: `扫射`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/4c21a01a429750a7.jpg',
        },
        {
            name: `烟雾弹`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/edd6e59ee97fd310.jpg',
        },
        {
            name: `燃烧弹`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/ccfd1ffbe9130ff5.jpg',
        },
        {
            name: `木柄手榴弹`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/1139072eba7f4721.jpg',
        },
        {
            name: `铁拳火箭筒`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/aea8f73a8f55ae3b.jpg',
        },
        {
            name: `战地急救`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ff606fea2dcd2071.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6d940342a2b6c98c.jpg',
            'img/1d43eed1db12d644.jpg',
            'img/5b18f00dd6f68cd2.jpg',
            'img/35361dea587448e0.jpg',
            'img/342c699172b83828.jpg',
        ],
        weapon: [
            'img/395686a310dfb854.jpg',
            'img/4b9b7b4bfe6c7352.jpg',
            'img/d75a1157c8afd079.jpg',
            'img/09220a47451465bc.jpg',
            'img/9ee701a2e8a7345e.jpg',
        ],
    },
    portrait: 'img/c92dfa4670468499.jpg',
}
