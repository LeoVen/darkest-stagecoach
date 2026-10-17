// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nin_robber1: ClassModData = {
    key: 'nin_robber1',
    name: `女忍`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2487626836'
        }
    ],
    skills: [
        {
            name: `奥义|追心刺`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/fb9db3b21d5f30b3.jpg',
        },
        {
            name: `奥义|佯攻`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/16c54920af507e93.jpg',
        },
        {
            name: `疾风连刺`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0218741708eff60d.jpg',
        },
        {
            name: `飞刀投掷`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/170981a8a307ace7.jpg',
        },
        {
            name: `刀扇`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e2ea675a244caa35.jpg',
        },
        {
            name: `后跳`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/144d3b37740d091f.jpg',
        },
        {
            name: `卑劣攻击`,
            launch: [false,true,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/2cf3ec0af1f1c203.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4bb60a9e3998a1e3.jpg',
            'img/6817109cdfa432ff.jpg',
            'img/b7f7f9954580769f.jpg',
            'img/279c5c143969abd8.jpg',
            'img/925070e15f9c44c3.jpg',
        ],
        weapon: [
            'img/70ac9cce5ecbede8.jpg',
            'img/08a64af45dd26f72.jpg',
            'img/91bb2f79875fe818.jpg',
            'img/37d83e2189210f1c.jpg',
            'img/0581dd392b6b6817.jpg',
        ],
    },
    portrait: 'img/d7b68d6f001a1d62.jpg',
}
