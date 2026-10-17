// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_seraph_1221097087: ClassModData = {
    key: 'seraph_1221097087',
    name: `Seraph`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.6,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 0 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1221097087'
        }
    ],
    skills: [
        {
            name: `Vengeance`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c15c10c53be2ce9a.jpg',
        },
        {
            name: `Fall`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7cec758a34f623bf.jpg',
        },
        {
            name: `Vindicate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9eeb36377dc689e3.jpg',
        },
        {
            name: `Intervention`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/af08d66bb8733b6e.jpg',
        },
        {
            name: `Wrath`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b8139ddb971b558b.jpg',
        },
        {
            name: `Inferno`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b1b5bf751cfd0576.jpg',
        },
        {
            name: `Brand`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/36ae518a79abdda2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3cc253a119c5712e.jpg',
            'img/7c65330305ead23a.jpg',
            'img/e794eb9929d6582c.jpg',
            'img/ae0569847fdc12c5.jpg',
            'img/752087fc6189ce85.jpg',
        ],
        weapon: [
            'img/03ef3fe12adbfcfc.jpg',
            'img/fdfa899c463441bf.jpg',
            'img/b5d0222c731b8dfd.jpg',
            'img/9ab5827cd3a580de.jpg',
            'img/3ec31fa511debab6.jpg',
        ],
    },
    portrait: 'img/7ca122e64b5be559.jpg',
}
