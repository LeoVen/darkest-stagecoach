// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_herald1: ClassModData = {
    key: 'herald1',
    name: `Herald`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0,
        bleed: 5,
        disease: 2,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.87,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 58, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 0 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.07, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2341439121'
        }
    ],
    skills: [
        {
            name: `Sever`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a9c238917e2d6484.jpg',
        },
        {
            name: `Perforate`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/a0e4aaf954029a49.jpg',
        },
        {
            name: `Cull`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/378050aed4b9025c.jpg',
        },
        {
            name: `Coalesce`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/314f82b828ee57c1.jpg',
        },
        {
            name: `Sacrifice`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f8b7bfc1de44929b.jpg',
        },
        {
            name: `Embrace`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0bf4244328952002.jpg',
        },
        {
            name: `Maledict`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/78e9abc2532b0214.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8a7f6192b93d6cdc.jpg',
            'img/3365c41310231c42.jpg',
            'img/67fe73306e014825.jpg',
            'img/53d2f63aa0e1093c.jpg',
            'img/214eb93f85c9e8fd.jpg',
        ],
        weapon: [
            'img/1f05f9abacdaba42.jpg',
            'img/b7eb0b4ec75918a2.jpg',
            'img/e572b87cdd74b0f0.jpg',
            'img/3ddcc9830410ad14.jpg',
            'img/775b182fd91579fb.jpg',
        ],
    },
    portrait: 'img/54df86c718b0d921.jpg',
}
