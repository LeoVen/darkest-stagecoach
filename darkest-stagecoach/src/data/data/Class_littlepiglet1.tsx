// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_littlepiglet1: ClassModData = {
    key: 'littlepiglet1',
    name: `Piglet`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0,
        bleed: 0,
        disease: 2,
        move: 0,
        debuff: 0,
        deathBlow: 0,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.24, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.31, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.38, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 1.0], crit: 0, speed: 20 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0, speed: 20 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 21 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 21 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 22 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1835702185'
        }
    ],
    skills: [
        {
            name: `Squeal`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/dec0278f00db5cde.jpg',
        },
        {
            name: `End This One`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `End These Two`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1e3f07bffe35ccd7.jpg',
        },
        {
            name: `Bit o' Squeal`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6f46a6f4f9a95aab.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0cc6438964745363.jpg',
            'img/5f5d5e4f60001982.jpg',
            'img/c514beb10003b23a.jpg',
            'img/a678d467132bb576.jpg',
            'img/35c03a7a5fc86f19.jpg',
        ],
        weapon: [
            'img/1701c737b893aaa9.jpg',
            'img/71e9fd14a24df2e5.jpg',
            'img/2ebc9611678e47ae.jpg',
            'img/affae49485bafdba.jpg',
            'img/b66f30ea235797b4.jpg',
        ],
    },
    portrait: 'img/9d1231ae66f013ea.jpg',
}
