// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_sawhunter1: ClassModData = {
    key: 'sawhunter1',
    name: `Saw Hunter`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2525329346'
        }
    ],
    skills: [
        {
            name: `Blood-letting Teeth`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/abeb5c1de1ecaa91.jpg',
        },
        {
            name: `Into the Wound`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4c4b6d832f6ee37a.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a30a27109c4eb65f.jpg',
        },
        {
            name: `Hunter's Salutation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b8850bdd58a344db.jpg',
        },
        {
            name: `Augur of Ebrietas`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8bbc2aa6b7ffd16c.jpg',
        },
        {
            name: `Heckling Gunshot`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8f5a73e18295cf76.jpg',
        },
        {
            name: `Serrated Knife`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/aef62ab23512efe7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dca6b042fdd1c9d0.jpg',
            'img/155471f857079f5f.jpg',
            'img/4f0adbf6f4f7b9ed.jpg',
            'img/7265ae2f7020b649.jpg',
            'img/abc2ee6297ba95fe.jpg',
        ],
        weapon: [
            'img/047ad3ba21e67aed.jpg',
            'img/f4a4ba90f9e2b9b2.jpg',
            'img/ec3afbb1251ca2b4.jpg',
            'img/e52a9b78ace60e12.jpg',
            'img/444aa011fd9214e3.jpg',
        ],
    },
    portrait: 'img/6b952c890eb927c6.jpg',
}
