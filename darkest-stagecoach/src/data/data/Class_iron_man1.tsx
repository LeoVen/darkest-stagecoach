// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_iron_man1: ClassModData = {
    key: 'iron_man1',
    name: `Iron man`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.02, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.07, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1876423255'
        }
    ],
    skills: [
        {
            name: `Laser Beam`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/17650f77012eb7b9.jpg',
        },
        {
            name: `Flamethrower`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/bd5f700e37f1dfea.jpg',
        },
        {
            name: `Target Acquired`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6674e2cb13d1741a.jpg',
        },
        {
            name: `Iron Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cc72a455cfd220d1.jpg',
        },
        {
            name: `Smokebomb`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c493b68137de953c.jpg',
        },
        {
            name: `Battlefield Reconstruction`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6435605a19e12aab.jpg',
        },
        {
            name: `No Man Left Behind`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/23560306e9ff88c9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ce8bbc32f6135920.jpg',
            'img/1f108cf9cb0632bb.jpg',
            'img/8f72e0379f8014fc.jpg',
            'img/563e04e70ff2e789.jpg',
            'img/ba633ef22a539b77.jpg',
        ],
        weapon: [
            'img/b99c494f89d218db.jpg',
            'img/3894b8e39739f389.jpg',
            'img/e2e53ef692452c3b.jpg',
            'img/3a4b40554e6a9e26.jpg',
            'img/186c489d86957154.jpg',
        ],
    },
    portrait: 'img/41bc1d1cc7a0813a.jpg',
}
