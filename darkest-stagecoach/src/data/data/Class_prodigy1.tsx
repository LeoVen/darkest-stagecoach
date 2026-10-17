// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_prodigy1: ClassModData = {
    key: 'prodigy1',
    name: `Prodigy`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.06, speed: 9 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.07, speed: 9 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.08, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=924245318'
        }
    ],
    skills: [
        {
            name: `Spirit Shift`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3bf99f5b7b7911d4.jpg',
        },
        {
            name: `Paralysing Palm`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/13421530c906512c.jpg',
        },
        {
            name: `Hallowed Kick`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/c9585be2a2fd9dbb.jpg',
        },
        {
            name: `Righteous Fist`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b8530f461110d927.jpg',
        },
        {
            name: `Sacred Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/8c262f274573f871.jpg',
        },
        {
            name: `Heavenly Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/76967a865b4eb47a.jpg',
        },
        {
            name: `Divine Haymaker`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6af48c1fb6a7d1de.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e5e00027321001d6.jpg',
            'img/eccf00d6251c5f41.jpg',
            'img/a89811ac62d09eca.jpg',
            'img/0ee2341e2435d02e.jpg',
            'img/88a238371f571ac3.jpg',
        ],
        weapon: [
            'img/3f23c8ce18814916.jpg',
            'img/f927012904f376c3.jpg',
            'img/2d228d26e1c1aab8.jpg',
            'img/e822c097c70dc456.jpg',
            'img/4456669e2406c5e4.jpg',
        ],
    },
    portrait: 'img/62f72e9d14429ccf.jpg',
}
