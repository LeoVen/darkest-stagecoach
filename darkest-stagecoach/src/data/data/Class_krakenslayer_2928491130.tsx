// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_krakenslayer_2928491130: ClassModData = {
    key: 'krakenslayer_2928491130',
    name: `Krakenslayer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2928491130'
        }
    ],
    skills: [
        {
            name: `Blood in the Water`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/500263a0a1984228.jpg',
        },
        {
            name: `The Kill`,
            launch: [false,false,false,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/efde27d40a8c2f22.jpg',
        },
        {
            name: `Ebb and Flow`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/763888b50973a187.jpg',
        },
        {
            name: `Blood Hunter`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/5bab60c10ca16d2c.jpg',
        },
        {
            name: `Reel 'em In`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5711dad6b546e6ef.jpg',
        },
        {
            name: `Salt in the Wound`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/62a0af1028a03f99.jpg',
        },
        {
            name: `Skewer`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7fff245b76c2696c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e5fa603996d65a30.jpg',
            'img/9fa01bbcbe065f2b.jpg',
            'img/3b121fbd54494aa4.jpg',
            'img/9c91486eeef2a318.jpg',
            'img/f20348c706ea70de.jpg',
        ],
        weapon: [
            'img/83344becc953bcb0.jpg',
            'img/583496646ab848a1.jpg',
            'img/5581ba4c057c188c.jpg',
            'img/79a9cd13e9a73697.jpg',
            'img/ab43974feb333d73.jpg',
        ],
    },
    portrait: 'img/2468ce0c10287be2.jpg',
}
