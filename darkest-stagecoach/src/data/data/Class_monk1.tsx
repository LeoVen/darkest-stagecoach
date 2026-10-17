// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_monk1: ClassModData = {
    key: 'monk1',
    name: `Monk`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0.1, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0.1, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0.1, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.01, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 8 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.04, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1442225067'
        }
    ],
    skills: [
        {
            name: `Dragon Tail`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e94c3c484dc53b7a.jpg',
        },
        {
            name: `Howling Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a58b00e482f261b0.jpg',
        },
        {
            name: `Iron Mountain`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e1ff3c46ef7c6b99.jpg',
        },
        {
            name: `Sweeping Kick`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9058c73f244b0170.jpg',
        },
        {
            name: `Transfer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d3def8335a49eb21.jpg',
        },
        {
            name: `Mantram`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/2a497fd7278a2bb5.jpg',
        },
        {
            name: `Inner Fire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5f835150596fe852.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5828f5ed78950c6a.jpg',
            'img/922bbeb7a8857a4f.jpg',
            'img/bcde9a37953c78bd.jpg',
            'img/4342ac9f1297c7c9.jpg',
            'img/df33116e2221f017.jpg',
        ],
        weapon: [
            'img/02dd103bb769b412.jpg',
            'img/eb7d9b2a0999cafc.jpg',
            'img/08c0e95848ec7f83.jpg',
            'img/9493c2b531e54eb0.jpg',
            'img/be7019dd9b40a166.jpg',
        ],
    },
    portrait: 'img/3452518d6f5d1524.jpg',
}
