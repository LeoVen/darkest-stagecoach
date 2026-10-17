// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_vigilante1: ClassModData = {
    key: 'vigilante1',
    name: `Vigilante`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2738094975'
        }
    ],
    skills: [
        {
            name: `Execute`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ac7993ba8c0aa401.jpg',
        },
        {
            name: `Anticipation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4a1f9e72364bf109.jpg',
        },
        {
            name: `Free action
Cooldown: 1 rd
Wind Up`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e7257e9d69b8c883.jpg',
        },
        {
            name: `Combo Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f3f401bc66673458.jpg',
        },
        {
            name: `Combo Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/dd6393ea085dfa69.jpg',
        },
        {
            name: `Combo Chop`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/0ddfcce3e888c4e0.jpg',
        },
        {
            name: `Combo Throw`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4da073ca69fea851.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6e75d06220c0f848.jpg',
            'img/4df8ed22e11dce78.jpg',
            'img/41d373fe250a88d9.jpg',
            'img/8a0b914a892082af.jpg',
            'img/e1cef63b44bf1101.jpg',
        ],
        weapon: [
            'img/6f5240f0c774ffb9.jpg',
            'img/57e35de2fafca3d1.jpg',
            'img/3c28fb084de0fe35.jpg',
            'img/d6392232397ac26b.jpg',
            'img/b23d1e5319c84398.jpg',
        ],
    },
    portrait: 'img/9d89922de2ed7327.jpg',
}
