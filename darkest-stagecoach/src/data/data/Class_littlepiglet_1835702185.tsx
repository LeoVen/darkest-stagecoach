// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_littlepiglet_1835702185: ClassModData = {
    key: 'littlepiglet_1835702185',
    name: `Piglet`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0,
        bleed: 0,
        disease: 2,
        move: 0,
        debuff: 0,
        deathBlow: 0,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.24, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.31, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.38, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 1.0], crit: 0, speed: 20 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0, speed: 20 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 21 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 21 },
            { accuracy: 0, damage: [2.0, 2.0], crit: 0, speed: 22 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1835702185'
        }
    ],
    skills: [
        {
            name: `Squeal`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a973a91a91c3c65b.jpg',
        },
        {
            name: `End This One`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `End These Two`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/561f7642ed3c7f16.jpg',
        },
        {
            name: `Bit o' Squeal`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/65509bd6061ac914.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e891a91a9003153c.jpg',
            'img/96e0559500269e92.jpg',
            'img/f00a5e448bfb6a3f.jpg',
            'img/77c151fab3ec0afe.jpg',
            'img/df22e1994fa05aaa.jpg',
        ],
        weapon: [
            'img/e2d26b696f433540.jpg',
            'img/a64c8f04cd9ac7c9.jpg',
            'img/62c17e8640cfa48b.jpg',
            'img/8bc680f2100497cf.jpg',
            'img/2b49b12c00bacd7a.jpg',
        ],
    },
    portrait: 'img/e533db0d955a2600.jpg',
}
