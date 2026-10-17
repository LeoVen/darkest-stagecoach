// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_buried1: ClassModData = {
    key: 'buried1',
    name: `Buried`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.35,
        blight: 0.5,
        bleed: 0.2,
        disease: 0.35,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.72,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2403716352'
        }
    ],
    skills: [
        {
            name: `Paranoid Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/c5138307cd4b0262.jpg',
        },
        {
            name: `Bitter Blade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0ba2187c71aeba2f.jpg',
        },
        {
            name: `The Old Way`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/73fcd5ba042143b3.jpg',
        },
        {
            name: `Hide From Them`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1cf9fdf1db481475.jpg',
        },
        {
            name: `Feral Lunge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/d6851e7317ba4c75.jpg',
        },
        {
            name: `Reeling Rake`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/49e9ab733c05beb7.jpg',
        },
        {
            name: `Otherworldly Wail`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/acf52172528c0afc.jpg',
        },
        {
            name: `Clarity`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/239f64af34992554.jpg',
        },
    ],
    equip: {
        armour: [
            'img/324069689ddd2a40.jpg',
            'img/2c8c8d6bee681e63.jpg',
            'img/6aeb79d6fa76eebf.jpg',
            'img/030ee35d74ff944c.jpg',
            'img/9768df44b2b32e48.jpg',
        ],
        weapon: [
            'img/f1cea1e97b679622.jpg',
            'img/f2eb8bcd4b4e7b71.jpg',
            'img/cd5266fe8e1fd2e7.jpg',
            'img/bcedd112ded0649a.jpg',
            'img/852271892f7e791f.jpg',
        ],
    },
    portrait: 'img/a5cab91e4604bb55.jpg',
}
