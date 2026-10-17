// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hierophant1: ClassModData = {
    key: 'hierophant1',
    name: `Hierophant`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.1,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 66, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.02, speed: 0 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [9.0, 19.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.05, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2299977419'
        }
    ],
    skills: [
        {
            name: `Condemn the Heretic`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ebac29bab65fbcd4.jpg',
        },
        {
            name: `Holy Branding`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e57222e5b7204b2d.jpg',
        },
        {
            name: `Wrath of the Empyrean`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7a53f775a3791b95.jpg',
        },
        {
            name: `Saint's Blessings`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a8316cb12ee3013b.jpg',
        },
        {
            name: `Celestial Restoration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a04e6ac27ae4eb29.jpg',
        },
        {
            name: `Divine Constitution`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bc69004b65c518ca.jpg',
        },
        {
            name: `Righteous Vengeance`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/624f8efa71d8c0cc.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ad1b14615365830f.jpg',
            'img/3b2650697cd3e100.jpg',
            'img/3d797635600fb88c.jpg',
            'img/baa4ccfbe8dfabfc.jpg',
            'img/937423399f456e8c.jpg',
        ],
        weapon: [
            'img/f5fe7c71b5239384.jpg',
            'img/bf7f7e87d0b039b5.jpg',
            'img/9dc72ea594cce7c6.jpg',
            'img/a275012231738444.jpg',
            'img/579a4153253d5d85.jpg',
        ],
    },
    portrait: 'img/bce1f9a9940efe8c.jpg',
}
