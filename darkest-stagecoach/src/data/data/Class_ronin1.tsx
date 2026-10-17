// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ronin1: ClassModData = {
    key: 'ronin1',
    name: `Ronin`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.1,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.5,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 17.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 19.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 21.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 24.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=942851186'
        }
    ],
    skills: [
        {
            name: `Flashing Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3d7bcaea55520af5.jpg',
        },
        {
            name: `Swift Cuts`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/755fcca3a81deecd.jpg',
        },
        {
            name: `Battojutsu`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/870d1817ac969fe9.jpg',
        },
        {
            name: `Calming Zen`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8c82c8d8f852cd46.jpg',
        },
        {
            name: `Swallow's Return`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/306b01b239c3d6c5.jpg',
        },
        {
            name: `Guard Stance`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fe857dd2f6e9e009.jpg',
        },
        {
            name: `Shingan`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/197b4b80b83399e6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7bf060c931c56e02.jpg',
            'img/c5e28ed570f4cb68.jpg',
            'img/ca33b5db4b3a240a.jpg',
            'img/9ca97d52c7468b08.jpg',
            'img/d35fdd09918f1254.jpg',
        ],
        weapon: [
            'img/f1bae49271424e60.jpg',
            'img/f41036c8c84a1934.jpg',
            'img/43e56bc1e9831a3e.jpg',
            'img/d1b0502d450a7c1d.jpg',
            'img/546596aedaf948e3.jpg',
        ],
    },
    portrait: 'img/10417f0d4ccc37e0.jpg',
}
