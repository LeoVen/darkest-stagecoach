// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_revenant1: ClassModData = {
    key: 'revenant1',
    name: `Revenant`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.025, speed: 3 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.035, speed: 4 },
            { accuracy: 0, damage: [9.0, 12.0], crit: 0.04, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=913178378'
        }
    ],
    skills: [
        {
            name: `Obliterate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f12032a5312a088b.jpg',
        },
        {
            name: `Sanguine Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1d53cb6d428c8b1c.jpg',
        },
        {
            name: `Bloodfury`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c2e6a2d0a5cabb4d.jpg',
        },
        {
            name: `Crimson Unity`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/73010c78053c8dee.jpg',
        },
        {
            name: `Siphon Life`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/9fea291e0146cdd4.jpg',
        },
        {
            name: `Vampiric Embrace`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b1fc2ae6da26b5ca.jpg',
        },
        {
            name: `Necromancy`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9bd72649807ac528.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ba428b8acb614dd1.jpg',
            'img/27ebaa45210716d2.jpg',
            'img/1430a3c88fb22b9e.jpg',
            'img/be242b7b8028fcaa.jpg',
            'img/dc7499cda6d727ce.jpg',
        ],
        weapon: [
            'img/1dddf566760b4173.jpg',
            'img/76bde78d6da2ead8.jpg',
            'img/7181a07061a14058.jpg',
            'img/b8938630bf06610f.jpg',
            'img/7fd9d8dcdd3d5aeb.jpg',
        ],
    },
    portrait: 'img/6b91726b3b80afe7.jpg',
}
