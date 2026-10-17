// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_kratos1: ClassModData = {
    key: 'kratos1',
    name: `Guerreiro Cinzento`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1946681830'
        }
    ],
    skills: [
        {
            name: `Soco Flamejante`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/509bf40219ad59bd.jpg',
        },
        {
            name: `Mordida do Leviathan`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b968e266d6068969.jpg',
        },
        {
            name: `Fúria Espartana`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ddd0826d0b920490.jpg',
        },
        {
            name: `Vôo do Leviathan`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/0833800c77d24801.jpg',
        },
        {
            name: `Golpe do Guardião`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/960adbc78002634e.jpg',
        },
        {
            name: ` ¤ ¤¦¤¦¤
Desejo Agonizante`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `@~`,
            },
            image: 'img/c8f5119099b323f0.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Me Cure!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/93adf2e89d9234af.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f4e77c8ef88603df.jpg',
            'img/96502b43477c0d45.jpg',
            'img/e37588c297a49e85.jpg',
            'img/729fd4782b5f962a.jpg',
            'img/9c3242b238656824.jpg',
        ],
        weapon: [
            'img/ee3bffa9e1bd0b85.jpg',
            'img/902461ec694aa03b.jpg',
            'img/490f0d73a32c536b.jpg',
            'img/ed48c750ca533a7e.jpg',
            'img/29375865721b6236.jpg',
        ],
    },
    portrait: 'img/058690500e8f41e8.jpg',
}
