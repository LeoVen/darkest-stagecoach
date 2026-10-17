// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_skull_knight1: ClassModData = {
    key: 'skull_knight1',
    name: `Skull Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.75,
        disease: 0.7,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.74,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2734022187'
        }
    ],
    skills: [
        {
            name: `Vorpal Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f1c7f75b1ef62ab8.jpg',
        },
        {
            name: `Doom Eater`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e7d4d686a1070d9f.jpg',
        },
        {
            name: `Fate Intervention`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/51eb241a77c7bc0b.jpg',
        },
        {
            name: `Nether Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/76c1b43200123256.jpg',
        },
        {
            name: `Interstice Shuffle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6404b3de71fa605d.jpg',
        },
        {
            name: `Brand of Sacrifice`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/53057ccafd449724.jpg',
        },
        {
            name: `Overlord`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e6ff9318536bda1a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/752a7d12e7b2ed84.jpg',
            'img/f2672aba86926673.jpg',
            'img/28ceaedcc5a4b5e3.jpg',
            'img/d82e6e42351f4eb8.jpg',
            'img/f99ea354815de8d4.jpg',
        ],
        weapon: [
            'img/1cf639a775bd2379.jpg',
            'img/d9e7c7b6987bbf7b.jpg',
            'img/cb2cdcde7eac79dc.jpg',
            'img/e8811b405d417ebb.jpg',
            'img/e1b7562be1f282fa.jpg',
        ],
    },
    portrait: 'img/21ff534c0ee3c28f.jpg',
}
