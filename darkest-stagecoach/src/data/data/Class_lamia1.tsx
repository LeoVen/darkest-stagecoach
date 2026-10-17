// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lamia1: ClassModData = {
    key: 'lamia1',
    name: `Lamia`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        }
    ],
    skills: [
        {
            name: `The Veil`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/81e39bbb22db25fa.jpg',
        },
        {
            name: `Cleansing Tide`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f036d6784ec06d8d.jpg',
        },
        {
            name: `Arietta`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3c38868a7f144f8c.jpg',
        },
        {
            name: `Allure`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a1b04e5b375c4dfd.jpg',
        },
        {
            name: `Petrifying Gaze`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/543e5ae1421a08a5.jpg',
        },
        {
            name: `Slither`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/735aef5f8f35f4b2.jpg',
        },
        {
            name: `Hiss`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d26e2e9df81c87ce.jpg',
        },
    ],
    equip: {
        armour: [
            'img/56c99ba85ad6df40.jpg',
            'img/b290ea9a1a78029e.jpg',
            'img/666d4786ba4ad99d.jpg',
            'img/583415e34219173f.jpg',
            'img/cc2a0270703249f9.jpg',
        ],
        weapon: [
            'img/6b8b3602ce3e1d69.jpg',
            'img/b4df8af269d71dc8.jpg',
            'img/ad383d0ee7b74cc2.jpg',
            'img/c3a3551d830179f2.jpg',
            'img/5ff2d2110f1ed624.jpg',
        ],
    },
    portrait: 'img/396eb701bdea4e8b.jpg',
}
