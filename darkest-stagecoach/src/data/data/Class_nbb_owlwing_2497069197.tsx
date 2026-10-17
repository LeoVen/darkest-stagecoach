// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nbb_owlwing_2497069197: ClassModData = {
    key: 'nbb_owlwing_2497069197',
    name: `Owlwing`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2497069197'
        }
    ],
    skills: [
        {
            name: `Smoke Bomb`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/84e4df27bbff2d92.jpg',
        },
        {
            name: `Fist Fight`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/fceebfb122ab6444.jpg',
        },
        {
            name: `Cape Stun`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7245d685d9e4e2c6.jpg',
        },
        {
            name: `Revenge Will`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d25b730cca4b0afa.jpg',
        },
        {
            name: `Quickfire Hook`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/6e3c9f0c94c69616.jpg',
        },
        {
            name: `Oculi Scratch`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fd664327eec8fa9d.jpg',
        },
        {
            name: `Owlarang`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/9085e6325350f089.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9dd73b1aaed0dbf3.jpg',
            'img/9af33134d38f667b.jpg',
            'img/effb9b9b6de6b8b8.jpg',
            'img/a4ff9381e2cfcd1e.jpg',
            'img/9810788965f74c98.jpg',
        ],
        weapon: [
            'img/176704142e65c313.jpg',
            'img/c871509a9f0fa049.jpg',
            'img/2328c9c1e4c815c5.jpg',
            'img/047bfe12b4c066f8.jpg',
            'img/16aa6f1b12cede81.jpg',
        ],
    },
    portrait: 'img/d5d47309bd6183de.jpg',
}
