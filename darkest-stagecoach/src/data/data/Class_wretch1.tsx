// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wretch1: ClassModData = {
    key: 'wretch1',
    name: `Wretch`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: -0.6,
        bleed: 0.3,
        disease: 0.1,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1849364138'
        }
    ],
    skills: [
        {
            name: `Sickly Stab`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/99baacc30d84e7e6.jpg',
        },
        {
            name: `Contagion`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8bc80fa44acd9804.jpg',
        },
        {
            name: `Outbreak`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/045a0901cb5f76bf.jpg',
        },
        {
            name: `Catharsis`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/bc077c9db34e731b.jpg',
        },
        {
            name: `Scapegoat`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d2fa6370c17b8640.jpg',
        },
        {
            name: `Scurry`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/bbed422ad594c227.jpg',
        },
        {
            name: `The Swarm`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/373c033b3d4a31b7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/689b1a3fcee6675d.jpg',
            'img/ba591da095758274.jpg',
            'img/4206739b87096325.jpg',
            'img/824878c24bb3f80c.jpg',
            'img/aecb858c6f9c1123.jpg',
        ],
        weapon: [
            'img/e2eaeb85db5dfc58.jpg',
            'img/93b0980727ca8b5b.jpg',
            'img/ee084c2d48e970b6.jpg',
            'img/5a60e59d59b47681.jpg',
            'img/c9a43ecebdc4151e.jpg',
        ],
    },
    portrait: 'img/75de0c35b80c724a.jpg',
}
