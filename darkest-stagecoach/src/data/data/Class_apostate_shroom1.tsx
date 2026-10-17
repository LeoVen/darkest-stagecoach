// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_apostate_shroom1: ClassModData = {
    key: 'apostate_shroom1',
    name: `Clobber`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 17.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 19.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1867479147'
        }
    ],
    skills: [
        {
            name: `Obliterate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ad3c8b00edf11387.jpg',
        },
        {
            name: `Flexing Muscles`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/6b0a81d1a6341a1a.jpg',
        },
        {
            name: `Intimidating Flex`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8cb2bbd52a7f5bce.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Protection Flex`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/880225c6de7cea9b.jpg',
        },
        {
            name: `Penetrating Punch`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/9fe278b6c9dc9946.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Personal Trainer`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/5e7f1bacb66bceeb.jpg',
        },
        {
            name: `Punchout`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/610d1a659b449ade.jpg',
        },
    ],
    equip: {
        armour: [
            'img/506b771ce37f676f.jpg',
            'img/7d914546da955040.jpg',
            'img/57ba0c6f765e3b6f.jpg',
            'img/8ee2c686fbe85415.jpg',
            'img/edaab0e3e04d05dd.jpg',
        ],
        weapon: [
            'img/9b330a7e01c1e6e9.jpg',
            'img/f27fda7ff4751cec.jpg',
            'img/c779ff002cd561b0.jpg',
            'img/d7881dea084ada17.jpg',
            'img/bb50e05aaffa4eb5.jpg',
        ],
    },
    portrait: 'img/b31dd11c9bda1771.jpg',
}
