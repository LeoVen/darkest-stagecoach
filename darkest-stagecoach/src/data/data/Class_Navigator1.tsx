// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_Navigator1: ClassModData = {
    key: 'Navigator1',
    name: `Navigator`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3232729723'
        }
    ],
    skills: [
        {
            name: `Behead`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/69fea81a120a5163.jpg',
        },
        {
            name: `Whirlwind`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7413b64ed9dcdb6f.jpg',
        },
        {
            name: `Broadside`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fdcbfb394b823970.jpg',
        },
        {
            name: `Disrupt`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2bcc3385df6950c3.jpg',
        },
        {
            name: `Nullify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/34dec5ce336f24ac.jpg',
        },
        {
            name: `Singularity`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/37e4453f321cf660.jpg',
        },
        {
            name: `Shooting Stars`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/72983c8c5e1b1b6f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9a557b57759b6c70.jpg',
            'img/8ed90b36091efa87.jpg',
            'img/a3143a68b79b5930.jpg',
            'img/d9d96f7590a7357a.jpg',
            'img/4528191d66e2d82b.jpg',
        ],
        weapon: [
            'img/b929dfdbc612debe.jpg',
            'img/9652437f2d142099.jpg',
            'img/078ba0305bbf1c36.jpg',
            'img/5b923ce7ba30bc5f.jpg',
            'img/c1baaa35853d7526.jpg',
        ],
    },
    portrait: 'img/0d1a41fbd36f3ab3.jpg',
}
