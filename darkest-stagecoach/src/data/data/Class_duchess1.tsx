// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_duchess1: ClassModData = {
    key: 'duchess1',
    name: `Duchess`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.4,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 59, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [10.0, 20.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [11.0, 22.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1935797249'
        }
    ],
    skills: [
        {
            name: `Sanguine Edge`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3c9318896a000234.jpg',
        },
        {
            name: `Crimson Lance`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/69aac4fc9962fe29.jpg',
        },
        {
            name: `Preposterous Challenge`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9502a904420aecec.jpg',
        },
        {
            name: `Quell the Rabble`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/66c8c427c3888e5f.jpg',
        },
        {
            name: `Fatal Chomp`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6fb7c13a93394f07.jpg',
        },
        {
            name: `Drain Masses`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/43436458c5219e4b.jpg',
        },
        {
            name: `Castigate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2f517e83250197b4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a661103eecd07ffb.jpg',
            'img/60e15853520ecf85.jpg',
            'img/8e56a51bc091436e.jpg',
            'img/c4bd7373609b90c3.jpg',
            'img/6d1b594db877b5d2.jpg',
        ],
        weapon: [
            'img/5fea99ef734e93e5.jpg',
            'img/6d2ab51dd06b7839.jpg',
            'img/3722d37c2706edac.jpg',
            'img/29c2d8ae9b83d409.jpg',
            'img/8d635bd7fb3f27d4.jpg',
        ],
    },
    portrait: 'img/c39dc70b9cd1952b.jpg',
}
