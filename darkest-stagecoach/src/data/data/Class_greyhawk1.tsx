// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_greyhawk1: ClassModData = {
    key: 'greyhawk1',
    name: `灰鹰`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.08, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 57, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 64, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2564785375'
        }
    ],
    skills: [
        {
            name: `异牙穿刺`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/baddd2af3938594c.jpg',
        },
        {
            name: `银鬃扑杀`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/f695f03c9378917c.jpg',
        },
        {
            name: `灰鹰狩猎`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/df939ca782df5c06.jpg',
        },
        {
            name: `化神一击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b9bcc0e3f84536e7.jpg',
        },
        {
            name: `凤凰恩典`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/40d40159e7e73509.jpg',
        },
        {
            name: `堡垒庇护`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ce19edc8f69e413e.jpg',
        },
        {
            name: `执政官狂怒`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7113c11cca7138cd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ab35d3fbc1d13b03.jpg',
            'img/125a895a27e777c7.jpg',
            'img/34f280a59a1daa68.jpg',
            'img/b324eb9b7e9d1bb7.jpg',
            'img/b12bfa46dbfcdfff.jpg',
        ],
        weapon: [
            'img/0e86861f4336fcdd.jpg',
            'img/2c261135e7207d7f.jpg',
            'img/d61f6318b55c1b09.jpg',
            'img/f11acaf118370a30.jpg',
            'img/51edf5fabd117482.jpg',
        ],
    },
    portrait: 'img/bef690270568aee7.jpg',
}
