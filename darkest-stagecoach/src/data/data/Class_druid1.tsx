// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_druid1: ClassModData = {
    key: 'druid1',
    name: `Druid`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1110338003'
        }
    ],
    skills: [
        {
            name: `Drain Life`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a29ccd401add390a.jpg',
        },
        {
            name: `Healing Mist`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/33301be155101705.jpg',
        },
        {
            name: `Tremors`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/0df92ea4b99af46f.jpg',
        },
        {
            name: `Summon Thorn`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/738c26332ab7f31b.jpg',
        },
        {
            name: `Rejuvenate`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bd69587fce3947d2.jpg',
        },
        {
            name: `Cleansing Rain`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/99ca005dc6e1e727.jpg',
        },
        {
            name: `Entangle`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3df6d20c9b120534.jpg',
        },
    ],
    equip: {
        armour: [
            'img/23c8d17fca45968a.jpg',
            'img/f51aa816a79f0df6.jpg',
            'img/b50e07922009fd48.jpg',
            'img/048ab26e64a09cc1.jpg',
            'img/9cfb5cd3c667662e.jpg',
        ],
        weapon: [
            'img/e3eb56d45116a638.jpg',
            'img/6994a31a017ed7d4.jpg',
            'img/efd426668fade38c.jpg',
            'img/70e5ea055d726b3e.jpg',
            'img/fc214827e9769eb9.jpg',
        ],
    },
    portrait: 'img/659cc5fd5ce2c784.jpg',
}
