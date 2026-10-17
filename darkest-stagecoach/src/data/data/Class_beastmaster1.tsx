// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_beastmaster1: ClassModData = {
    key: 'beastmaster1',
    name: `Beastmaster`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [10.0, 13.0], crit: 0.09, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1747389796'
        }
    ],
    skills: [
        {
            name: `Feral Cuts`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/720865c7db30e781.jpg',
        },
        {
            name: `Unwavering`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0fcaa45ff4ed1a4f.jpg',
        },
        {
            name: `Ravenous`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fd25ee7188480ab1.jpg',
        },
        {
            name: `Cycle of Life`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/af43fee92cddc152.jpg',
        },
        {
            name: `Cougar's Leap`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/619aadef5bba59cc.jpg',
        },
        {
            name: `Bird of Prey`,
            launch: [false,false,false,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7841f71eece47caa.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Spirit of the Hunt`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2c50ea154f320a18.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8cca9fd799ff12b1.jpg',
            'img/7dc20366be7bbe32.jpg',
            'img/99b44e7876d723c4.jpg',
            'img/77425a5c1ee4ba6e.jpg',
            'img/c97fb73a2145ab41.jpg',
        ],
        weapon: [
            'img/9b45bd258fc2deae.jpg',
            'img/3c8eeeda0276e2f0.jpg',
            'img/fbc1373217eb9e11.jpg',
            'img/00dd72be51a30779.jpg',
            'img/f7f4a762af21ad7c.jpg',
        ],
    },
    portrait: 'img/2eb6f9ea7a0ffda9.jpg',
}
