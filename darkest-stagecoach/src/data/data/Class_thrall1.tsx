// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_thrall1: ClassModData = {
    key: 'thrall1',
    name: `Thrall`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 65, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0, speed: 0 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [12.0, 23.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [13.0, 26.0], crit: 0.04, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1175904375'
        }
    ],
    skills: [
        {
            name: `Maim`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/64f21b89b90a65c8.jpg',
        },
        {
            name: `Gore`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/73c08735848b8b9f.jpg',
        },
        {
            name: `Indomitable`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fc6845d205e600bd.jpg',
        },
        {
            name: `Menace`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/197921a046bb0515.jpg',
        },
        {
            name: `Cataclysm`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/1abec0dd0adeba41.jpg',
        },
        {
            name: `Trample`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/634a27fa06a0e212.jpg',
        },
        {
            name: `Tremor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/657c2702a00a1abe.jpg',
        },
    ],
    equip: {
        armour: [
            'img/eafd597d79bb053d.jpg',
            'img/59c77b5f3a972a26.jpg',
            'img/1eb201206ed62c6c.jpg',
            'img/6c70b1e86e4f241d.jpg',
            'img/028fa493383e00e2.jpg',
        ],
        weapon: [
            'img/c135a08950fce87f.jpg',
            'img/5feed51900e95193.jpg',
            'img/58c87f73dd31a1f6.jpg',
            'img/8930d2df1633c4a9.jpg',
            'img/554ba4aa8011590b.jpg',
        ],
    },
    portrait: 'img/39d610893d6061b7.jpg',
}
