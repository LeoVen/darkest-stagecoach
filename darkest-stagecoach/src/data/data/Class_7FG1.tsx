// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_7FG1: ClassModData = {
    key: '7FG1',
    name: `Arch-Devil`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.5,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1439985666'
        }
    ],
    skills: [
        {
            name: `Stout Demon's Gigantic Arms`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/43b8e34d7852d3f1.jpg',
        },
        {
            name: `Hellfire Wall`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/b0ccb9514731273b.jpg',
        },
        {
            name: `Hellfire Mantle`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/6cf2a0fec436479a.jpg',
        },
        {
            name: `Tentacle Wings`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/88c8dccc497e603e.jpg',
        },
        {
            name: `Razor Sharp Claw`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5fabedb3dafd8c27.jpg',
        },
        {
            name: `Flame of Gehenna`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d234e146e8bd7ac1.jpg',
        },
        {
            name: `Meteor Fall`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6cf933132f95a059.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3aa690a8cff728aa.jpg',
            'img/a92e448e2bfe70e7.jpg',
            'img/5f1554c56f612779.jpg',
            'img/f3975ca3f54088d7.jpg',
            'img/8698631031b11e1d.jpg',
        ],
        weapon: [
            'img/2d7f608305c45105.jpg',
            'img/4beca385e91e94b4.jpg',
            'img/fb728478f5339f10.jpg',
            'img/a01b22497bb163d8.jpg',
            'img/c4febc5cbfa3712f.jpg',
        ],
    },
    portrait: 'img/438f8830a6d33f4b.jpg',
}
