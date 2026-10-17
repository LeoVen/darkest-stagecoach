// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_commandant1: ClassModData = {
    key: 'commandant1',
    name: `Commandant`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    skills: [
        {
            name: `Pistola de Oficial`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d40c066e572b7ff5.jpg',
        },
        {
            name: `Whiplash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,false,false,true],
                mods: ``,
            },
            image: 'img/9d28153752f2732e.jpg',
        },
        {
            name: `Terreno perigoso`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/cc01628ba1cd81dd.jpg',
        },
        {
            name: `Stranglethorn`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/c559426d8581e8c0.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
	Rally the Troops`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/6ef2ad840215f583.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
	Iron Embrace`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3b9b185209f93d44.jpg',
        },
        {
            name: `On My Target`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c1bd6a83ec2cb937.jpg',
        },
    ],
    equip: {
        armour: [
            'img/79d82b95519db184.jpg',
            'img/88920753b5b2e59d.jpg',
            'img/39ec7ed83526e76f.jpg',
            'img/79e054b08ea93a88.jpg',
            'img/4499be56b1967be6.jpg',
        ],
        weapon: [
            'img/c35edf8d5b883abd.jpg',
            'img/1e2e37700ccd1850.jpg',
            'img/a9b49862d39dfa6e.jpg',
            'img/164ed7a89f09a696.jpg',
            'img/9dd36e45d4cf8153.jpg',
        ],
    },
    portrait: 'img/02e69e7418b500b8.jpg',
}
