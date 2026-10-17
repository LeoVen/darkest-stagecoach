// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tanker1: ClassModData = {
    key: 'tanker1',
    name: `Tanker`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.6,
        disease: 0.3,
        move: 0.7,
        debuff: 0.2,
        deathBlow: 0.7,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.05, hp: 34, speed: 0 },
            { dodge: 0.035, prot: 0.05, hp: 40, speed: 0 },
            { dodge: 0.05, prot: 0.05, hp: 46, speed: 0 },
            { dodge: 0.075, prot: 0.05, hp: 52, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.01, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [13.0, 23.0], crit: 0.05, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3310476693'
        }
    ],
    skills: [
        {
            name: `Prodding Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/30669d920e7ee1ac.jpg',
        },
        {
            name: `Targeted Toss`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/93d0e971e8fe5933.jpg',
        },
        {
            name: `Drive Me Closer!`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9b36035429376c2c.jpg',
        },
        {
            name: `Cannon Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/6d932550b4cd029b.jpg',
        },
        {
            name: `BOOM!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7e0678e94a622f1e.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Brother's Keeper`,
            launch: [true,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/cc60e08549cb1e2a.jpg',
        },
        {
            name: `Field Repair`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e6c8445cba831fdd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e2bd767cfc10d05f.jpg',
            'img/4b719a2f9a5fea43.jpg',
            'img/88cfabd18d5fc7bc.jpg',
            'img/f1fe592098c090c9.jpg',
            'img/b4eec8b139de00ba.jpg',
        ],
        weapon: [
            'img/b0a2e2581d4c13e0.jpg',
            'img/9834f0e73c16324e.jpg',
            'img/888d0fba417bb1d3.jpg',
            'img/344f7ffbf8c82a73.jpg',
            'img/ae14cad65878afb3.jpg',
        ],
    },
    portrait: 'img/35cf7afd4d733760.jpg',
}
