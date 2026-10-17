// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_commandant1: ClassModData = {
    key: 'commandant1',
    name: `Commandant`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    skills: [
        {
            name: `Pistola de Oficial`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/beec738be5ae5c31.jpg',
        },
        {
            name: `Whiplash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,false,false,true],
                mods: ``,
            },
            image: 'img/064134f8b77ff516.jpg',
        },
        {
            name: `Terreno perigoso`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6f12fc77b1b8f36a.jpg',
        },
        {
            name: `Stranglethorn`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/9a926cd9da77953b.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
	Rally the Troops`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/3b9f2e6b4bac6f82.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
	Iron Embrace`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e77bd5f3c63025e5.jpg',
        },
        {
            name: `On My Target`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c2b4f2e21d2bf874.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1acdb2e09836acc3.jpg',
            'img/19baff534c8e6c6c.jpg',
            'img/3258ccc1bb149b0a.jpg',
            'img/ef18642ea9e357cd.jpg',
            'img/7195c4eaab710869.jpg',
        ],
        weapon: [
            'img/b679b0c8ef48da71.jpg',
            'img/da297fb1feb83f43.jpg',
            'img/b7af00b698cd6665.jpg',
            'img/9b928824b4c53606.jpg',
            'img/a07dd1e257bb07ea.jpg',
        ],
    },
    portrait: 'img/c9afb5c8fa17b0d9.jpg',
}
