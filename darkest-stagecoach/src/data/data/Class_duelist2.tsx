// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_duelist2: ClassModData = {
    key: 'duelist2',
    name: `Duelist`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.4,
        debuff: 0.5,
        deathBlow: 0.5,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [10.0, 12.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [12.0, 15.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2371334111'
        }
    ],
    skills: [
        {
            name: `Blade from the Blue`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5952a145223220fe.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4d2acf614422b88d.jpg',
        },
        {
            name: `Disarm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f3388638bafb796a.jpg',
        },
        {
            name: `Slice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5137c465cfe9372c.jpg',
        },
        {
            name: `Backpedal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/045685674bd888e3.jpg',
        },
        {
            name: `On Guard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8a0c021d493723e6.jpg',
        },
        {
            name: `Come at Me`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c9466691e3e40dd1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/cdd6d7d1ce00262e.jpg',
            'img/59d95ffc50fc7c71.jpg',
            'img/2fa41d440a76e8f1.jpg',
            'img/cc41c9e83bf157cc.jpg',
            'img/685ead94d1828e55.jpg',
        ],
        weapon: [
            'img/1da16db4561346bb.jpg',
            'img/c17aae5353ea13d6.jpg',
            'img/c1153d6cd9fbb2dc.jpg',
            'img/a3e496a2d2baf96a.jpg',
            'img/e964ee781d365d02.jpg',
        ],
    },
    portrait: 'img/8a8127a86f835e60.jpg',
}
