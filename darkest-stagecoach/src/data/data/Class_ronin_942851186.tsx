// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ronin_942851186: ClassModData = {
    key: 'ronin_942851186',
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
            image: 'img/1e69e851bfcdee10.jpg',
        },
        {
            name: `Swift Cuts`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/48f6687b80c9c9de.jpg',
        },
        {
            name: `Battojutsu`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/577743bed1fc6332.jpg',
        },
        {
            name: `Calming Zen`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/98fa551c756365f9.jpg',
        },
        {
            name: `Swallow's Return`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a92cb475da976df1.jpg',
        },
        {
            name: `Guard Stance`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/edf77d499138ce8c.jpg',
        },
        {
            name: `Shingan`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a630a2892785faf1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/64a5d8858ccbc38b.jpg',
            'img/96ffffbdb1f94b85.jpg',
            'img/673d22cc63eb1b47.jpg',
            'img/9372cb31241e98e9.jpg',
            'img/4de463318d4a200e.jpg',
        ],
        weapon: [
            'img/711d6e7788202281.jpg',
            'img/84dd680e5c6c237a.jpg',
            'img/ae76510730f26c1b.jpg',
            'img/f5ed6c71585f6ab0.jpg',
            'img/d075ebb3fb0d47ff.jpg',
        ],
    },
    portrait: 'img/a7194f31d8c19402.jpg',
}
