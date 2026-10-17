// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hollow_knight1: ClassModData = {
    key: 'hollow_knight1',
    name: `Hollow Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.55,
        blight: 0.1,
        bleed: 2,
        disease: 0.55,
        move: 0.6,
        debuff: 0.45,
        deathBlow: 0.6,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.075, prot: 0.025, hp: 35, speed: 1 },
            { dodge: 0.125, prot: 0.05, hp: 40, speed: 1 },
            { dodge: 0.175, prot: 0.075, hp: 45, speed: 1 },
            { dodge: 0.2, prot: 0.1, hp: 50, speed: 2 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 17.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [11.0, 19.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1658595868'
        }
    ],
    skills: [
        {
            name: `Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/b922192d50eb6ebe.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e84f9be76cc56b32.jpg',
        },
        {
            name: `War Cry`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/f96bf3d2bd801bf3.jpg',
        },
        {
            name: `Pugilism`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/7429b2a308462431.jpg',
        },
        {
            name: `Stow Fear`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/28321f37fbfca7e4.jpg',
        },
        {
            name: `Fear Eater`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7d280d3fc5a45916.jpg',
        },
        {
            name: `Tombstones`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e739e32eb67a34df.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b488ee43921ffe27.jpg',
            'img/401fd2511ac485a9.jpg',
            'img/1a1753bc5c890201.jpg',
            'img/6d3818b0bfe367a5.jpg',
            'img/f548093fdcbd493b.jpg',
        ],
        weapon: [
            'img/af04d366bb116900.jpg',
            'img/942a64efdfd318e2.jpg',
            'img/84e46f66b87d3104.jpg',
            'img/9683ee74563a0918.jpg',
            'img/ed748d5e8b9ee17f.jpg',
        ],
    },
    portrait: 'img/9a2c5f02ec1cfd34.jpg',
}
