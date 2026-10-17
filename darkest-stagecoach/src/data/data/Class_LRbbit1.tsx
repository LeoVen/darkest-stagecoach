// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_LRbbit1: ClassModData = {
    key: 'LRbbit1',
    name: `Myo`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.6,
        blight: 0.6,
        bleed: 0.5,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [4.0, 15.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 16.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 18.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 20.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2519100522'
        }
    ],
    skills: [
        {
            name: `单点射击`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/08096d01d4dff58a.jpg',
        },
        {
            name: `穿透射击`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/0222382f4a3476cc.jpg',
        },
        {
            name: `蓄能射击`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d4669b4d6514bfbc.jpg',
        },
        {
            name: `动若脱兔`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/16182cadf3010860.jpg',
        },
        {
            name: `撕咬鲜草`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/15e820e2d5cacfba.jpg',
        },
        {
            name: `快速压制`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/f15b5e5b8e1a02d4.jpg',
        },
        {
            name: `狂暴血刃`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a0fc61a82661f547.jpg',
        },
        {
            name: `狡兔三窟`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3276243db90c3417.jpg',
        },
    ],
    equip: {
        armour: [
            'img/140ff02d23f0dbda.jpg',
            'img/080f7088869fac1f.jpg',
            'img/96d2e59a3e738b13.jpg',
            'img/4c265efc3002a8dc.jpg',
            'img/cf072037fabd0cda.jpg',
        ],
        weapon: [
            'img/d1f890ec3c2a5fe0.jpg',
            'img/18ac223dfd0a0c09.jpg',
            'img/e16ad304664b609e.jpg',
            'img/e5c1c4ba4ee04d5b.jpg',
            'img/7bf68ac013c57b22.jpg',
        ],
    },
    portrait: 'img/cda14e6bfd39e8a4.jpg',
}
