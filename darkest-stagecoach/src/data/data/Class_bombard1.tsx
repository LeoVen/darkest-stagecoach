// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bombard1: ClassModData = {
    key: 'bombard1',
    name: `Bombardeiro`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [10.0, 12.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.08, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2678438842'
        }
    ],
    skills: [
        {
            name: `Carga de Rompimento`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/dc269e3972129131.jpg',
        },
        {
            name: `Armado / KABUM!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/5bc97c9151b3eaf2.jpg',
        },
        {
            name: `Explosão Concussiva`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1691cb46f3420609.jpg',
        },
        {
            name: `Fogo no Buraco`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/db3151eb2477fd9b.jpg',
        },
        {
            name: `Rearmamento`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/90965880551b3429.jpg',
        },
        {
            name: `Clarão`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/03632e3ffb4e922b.jpg',
        },
        {
            name: `Cabeçada`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fa05e97ebdfe85a8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8fb9b5e9f3fcafc5.jpg',
            'img/43ee800d1b708631.jpg',
            'img/bc75e3bc43c726b4.jpg',
            'img/024914ac97af2219.jpg',
            'img/9846088ff187d297.jpg',
        ],
        weapon: [
            'img/be544b8bc5668fd6.jpg',
            'img/72a2daa55d942c0d.jpg',
            'img/9fb207c82dabc1c4.jpg',
            'img/6b46119743877f5f.jpg',
            'img/0faa6fe80944ee2c.jpg',
        ],
    },
    portrait: 'img/3c32c8dec23d5970.jpg',
}
