// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shadow_walker1: ClassModData = {
    key: 'shadow_walker1',
    name: `Shadow Walker`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.45,
        blight: 0.5,
        bleed: 0.25,
        disease: 0.2,
        move: 0.15,
        debuff: 0.25,
        deathBlow: 0.7,
        trap: 0.9
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.24, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1542315540'
        }
    ],
    skills: [
        {
            name: `Ken-Jutsu (Katana Strike)`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b11aaee1e620b322.jpg',
        },
        {
            name: `Blood Boil`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/58ab4176c6d5089b.jpg',
        },
        {
            name: `Kiai-Jutsu (Chain Entangle)`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/40b0a163162aa1eb.jpg',
        },
        {
            name: `Kuji-Kiri (Gesture Slap)`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3c7217f385f39486.jpg',
        },
        {
            name: `Venom-Tipped Shurikens`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/80c0492fa53bb2e1.jpg',
        },
        {
            name: `Pressure Point`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0878bf73aa698f5f.jpg',
        },
        {
            name: `Shadow Slide`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a380cc02f587c165.jpg',
        },
    ],
    equip: {
        armour: [
            'img/161b9592ab30caaf.jpg',
            'img/780a9010bc96c798.jpg',
            'img/24bd394b73dc780d.jpg',
            'img/f0992cfdb6e67163.jpg',
            'img/4c64c72bd0e70e36.jpg',
        ],
        weapon: [
            'img/e4cab45d49b129b9.jpg',
            'img/93fde4ae3c8a74d9.jpg',
            'img/3ab05a48594b381b.jpg',
            'img/e65680504bab0ebb.jpg',
            'img/3955a097937bd6b0.jpg',
        ],
    },
    portrait: 'img/a58c21f31139e06e.jpg',
}
