// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_darkwraith1: ClassModData = {
    key: 'darkwraith1',
    name: `Darkwraith`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.6,
        disease: 0.4,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1825622538'
        }
    ],
    skills: [
        {
            name: `Darksword`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d87c19eaf6e8b5a8.jpg',
        },
        {
            name: `Undying Rage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/10bc86b9fb93a2ea.jpg',
        },
        {
            name: `Unholy Bastion`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ebb5bf43c22da6e5.jpg',
        },
        {
            name: `Unmaking`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b8b808160dd378f9.jpg',
        },
        {
            name: `Firebomb`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/edf25215111ac458.jpg',
        },
        {
            name: `Lifedrain`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4ab3023fddb894be.jpg',
        },
        {
            name: `Grim Reflection`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1ee34fd07001887b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2d01c6290dabc1b4.jpg',
            'img/b124a402f21de8d7.jpg',
            'img/b1a85ce729a18b0a.jpg',
            'img/8245af05c6d61de5.jpg',
            'img/5777a4dbc4eac384.jpg',
        ],
        weapon: [
            'img/7f0875114942b6b6.jpg',
            'img/d70e913881873521.jpg',
            'img/9e83c2a4ffb65be7.jpg',
            'img/d6d861d030e3e739.jpg',
            'img/db4d82ee5accc214.jpg',
        ],
    },
    portrait: 'img/2cbdb7e4dfeadaaf.jpg',
}
