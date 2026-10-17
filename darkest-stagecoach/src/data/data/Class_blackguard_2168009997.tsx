// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_blackguard_2168009997: ClassModData = {
    key: 'blackguard_2168009997',
    name: `Blackguard`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.1,
        bleed: 2,
        disease: 0.6,
        move: 0.2,
        debuff: 0.1,
        deathBlow: 0.5,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 3 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2168009997'
        }
    ],
    skills: [
        {
            name: `Pulverize`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0fa1b3ff9c87c1ba.jpg',
        },
        {
            name: `Life Steal`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/14c6b95855d13975.jpg',
        },
        {
            name: `Relinquish`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/80370c1ac9e889d2.jpg',
        },
        {
            name: `Blearing`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/455bea4c3bbf0b66.jpg',
        },
        {
            name: `Death Grip`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/47d53af384fd762f.jpg',
        },
        {
            name: `Call of the Grave`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d47381c700888871.jpg',
        },
        {
            name: `Inexorable`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/755794da33940f25.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c1ba747fc2fa379e.jpg',
            'img/e5a5bc189b90d9e2.jpg',
            'img/07b5c6dad42bb97b.jpg',
            'img/b7b64d779c3d5b62.jpg',
            'img/c7b8b249b487a7a5.jpg',
        ],
        weapon: [
            'img/674e5f61ae116a7c.jpg',
            'img/4564a781a0db89b4.jpg',
            'img/a045cb62643aabdc.jpg',
            'img/d19aba1271f8c812.jpg',
            'img/94948db5eab527e0.jpg',
        ],
    },
    portrait: 'img/9206b7d0a6b0d434.jpg',
}
