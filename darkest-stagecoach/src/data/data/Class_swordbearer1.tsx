// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_swordbearer1: ClassModData = {
    key: 'swordbearer1',
    name: `Sword Bearer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2399684786'
        }
    ],
    skills: [
        {
            name: `God's Thrust`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ee529cb2be414ed6.jpg',
        },
        {
            name: `Judgment Thorns`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/b0804b1d4289d0cc.jpg',
        },
        {
            name: `Will of the Chosen`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/44ac499e3e4a9cc2.jpg',
        },
        {
            name: `Paradise Bite`,
            launch: [false,false,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/52dc46c228862fec.jpg',
        },
        {
            name: `Illumination`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/da0b253491d8ba03.jpg',
        },
        {
            name: `Rebel`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4331982d878f765d.jpg',
        },
        {
            name: `Forgiving Sting`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e6d647b7664649cf.jpg',
        },
    ],
    equip: {
        armour: [
            'img/03eb8839e7f34d08.jpg',
            'img/0c4d82efca5696ca.jpg',
            'img/9f5d1089494e74e4.jpg',
            'img/e1b244f02129f033.jpg',
            'img/f27043971aab835d.jpg',
        ],
        weapon: [
            'img/fde162332201523b.jpg',
            'img/3225fb8c5722cda6.jpg',
            'img/007bc722ccf5238b.jpg',
            'img/302ec1664c649918.jpg',
            'img/53760a10f20a1a37.jpg',
        ],
    },
    portrait: 'img/6b3ad13432843acb.jpg',
}
