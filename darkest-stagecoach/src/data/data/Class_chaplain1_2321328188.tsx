// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_chaplain1_2321328188: ClassModData = {
    key: 'chaplain1_2321328188',
    name: `Chaplain`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.08, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2321328188'
        }
    ],
    skills: [
        {
            name: `Thrust`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/480d4a907aef3c1d.jpg',
        },
        {
            name: `Mordhau`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e89b87f30b304368.jpg',
        },
        {
            name: `Heavenly Wrath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/44ce36f77d810285.jpg',
        },
        {
            name: `Radiance`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/61684cd8e86cbbb3.jpg',
        },
        {
            name: `Fortify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/73a943d912d25efc.jpg',
        },
        {
            name: `Paragon's Pact`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e066dbf63633834d.jpg',
        },
        {
            name: `Martyr's Brand`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9f5038dad1e1578a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3b88236127afcccc.jpg',
            'img/51025e6a12f37cff.jpg',
            'img/c873daf424d39c9c.jpg',
            'img/06b2756dd8183499.jpg',
            'img/2bb35dddaf01bcc8.jpg',
        ],
        weapon: [
            'img/3fe87cfdbe40a4f8.jpg',
            'img/a9d409548bc97f21.jpg',
            'img/8f84d04918b6a223.jpg',
            'img/b80b1ec7f927217a.jpg',
            'img/b1c53a93add1dbab.jpg',
        ],
    },
    portrait: 'img/43e05e35b88dbb2b.jpg',
}
