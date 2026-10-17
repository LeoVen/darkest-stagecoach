// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_guqin_1446914431: ClassModData = {
    key: 'guqin_1446914431',
    name: `Guqin`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.02, speed: -2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: -2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: -1 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.05, speed: -1 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.06, speed: 0 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1446914431'
        }
    ],
    skills: [
        {
            name: `Longbow`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d1ae9c222254dc05.jpg',
        },
        {
            name: `Blitz`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/db6c66661866d476.jpg',
        },
        {
            name: `Countersong`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1edb9fb8e94aeb79.jpg',
        },
        {
            name: `Lullaby`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5aff2cd91de65fd4.jpg',
        },
        {
            name: `Harpoon`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/94cf4562ca7314c2.jpg',
        },
        {
            name: `Leechbolt`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/cf218a3159f34d9e.jpg',
        },
        {
            name: `Dissonance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5ec8c06631fa5d97.jpg',
        },
    ],
    equip: {
        armour: [
            'img/316e7f970fb0c2b9.jpg',
            'img/5a179a5d49c197ea.jpg',
            'img/4097f8f3007165e3.jpg',
            'img/2790f78c8a2f0016.jpg',
            'img/6fd5ca688eff6788.jpg',
        ],
        weapon: [
            'img/d5e15a697eb60abc.jpg',
            'img/a897d3f7a1822abd.jpg',
            'img/e9533fd6b3bfc271.jpg',
            'img/682770bc8cc06ce4.jpg',
            'img/979ddb470207313d.jpg',
        ],
    },
    portrait: 'img/0da7034d82d67ecb.jpg',
}
