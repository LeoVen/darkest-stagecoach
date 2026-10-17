// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_heir1: ClassModData = {
    key: 'heir1',
    name: `Heir`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.5,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.01, speed: 4 },
            { accuracy: 0.06, damage: [5.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0.1, damage: [6.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0.14, damage: [6.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0.18, damage: [7.0, 14.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1628622327'
        }
    ],
    skills: [
        {
            name: `Protect Me`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b6d7ed20c8e9b514.jpg',
        },
        {
            name: `Roses Thorn`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/13e5f385e7559dd7.jpg',
        },
        {
            name: `Bloom`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/23db71f192aa034f.jpg',
        },
        {
            name: `Divine Communion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d79fcb5bc080137f.jpg',
        },
        {
            name: `Roses Embrace`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/688505cefbe2192d.jpg',
        },
        {
            name: `Roses Offering`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/320be1ef3c0949d8.jpg',
        },
        {
            name: `Roses Vine`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/bd600de2eea01d45.jpg',
        },
    ],
    equip: {
        armour: [
            'img/425f43a509bf54ea.jpg',
            'img/f63c5373f51cd28e.jpg',
            'img/6172bbaa893ff378.jpg',
            'img/9685bddcf9dd3b04.jpg',
            'img/dba3b39487a6f2d1.jpg',
        ],
        weapon: [
            'img/8af62ea5eae70d88.jpg',
            'img/6c925a23b762767c.jpg',
            'img/9bd89031d48da373.jpg',
            'img/80e777d9d38bce84.jpg',
            'img/5e451502cbdbbcba.jpg',
        ],
    },
    portrait: 'img/86ea208019dff6b3.jpg',
}
