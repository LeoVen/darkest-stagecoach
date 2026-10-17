// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spas1: ClassModData = {
    key: 'spas1',
    name: `Goblin Huntress`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.03, hp: 35, speed: 0 },
            { dodge: 0.04, prot: 0.04, hp: 42, speed: 0 },
            { dodge: 0.06, prot: 0.08, hp: 49, speed: 0 },
            { dodge: 0.08, prot: 0.16, hp: 56, speed: 0 },
            { dodge: 0.1, prot: 0.21, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2268360314'
        }
    ],
    skills: [
        {
            name: `Buck Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/acbfd1f1c1a0263a.jpg',
        },
        {
            name: `Slug Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/f3c236b39fea2ed6.jpg',
        },
        {
            name: `Riot Control`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b74e79257c3e0c15.jpg',
        },
        {
            name: `Decimate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b3f050ae3108d0e8.jpg',
        },
        {
            name: `Data Link`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `~@`,
            },
            image: 'img/0ff88f3f21a15403.jpg',
        },
        {
            name: `Damage Focus SG`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/04cbf3caa511ffed.jpg',
        },
        {
            name: `Suppression`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/f7eddb6d977bd34b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/874fc5e7a8d35525.jpg',
            'img/738af1b8afb434c7.jpg',
            'img/02b367b103869818.jpg',
            'img/703e5929865a4e82.jpg',
            'img/3efac6d8f6cf8a9d.jpg',
        ],
        weapon: [
            'img/c886259e68157565.jpg',
            'img/a35828bc9bdeeafe.jpg',
            'img/cccf17305a9e4ab2.jpg',
            'img/87dcd7789fe68004.jpg',
            'img/f029d178f863768a.jpg',
        ],
    },
    portrait: 'img/aa4d4238187b104c.jpg',
}
