// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_banished_hunter1: ClassModData = {
    key: 'banished_hunter1',
    name: `Banished Hunter`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2149773228'
        }
    ],
    skills: [
        {
            name: `Hunters Blade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/911f977091eae142.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/11213debf3980dfe.jpg',
        },
        {
            name: `Shaman Bone Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/adbb97eb8fb6fd6b.jpg',
        },
        {
            name: `Silver Bullet`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a29ecdca167d0df6.jpg',
        },
        {
            name: `Flash Powder`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7b7528cb5517299b.jpg',
        },
        {
            name: `Blunderbuss`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a035a9d079b35f4c.jpg',
        },
        {
            name: `Parrying Stance`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8397106dbe60b160.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b7ea37d0caf6938b.jpg',
            'img/a127495cf1b59b4b.jpg',
            'img/6a8009fa2d9cc9b1.jpg',
            'img/1c08f627949980c8.jpg',
            'img/6d800c18e8cffa7b.jpg',
        ],
        weapon: [
            'img/c45a92718fb139b8.jpg',
            'img/18272a4b08381af9.jpg',
            'img/0edab7477818728f.jpg',
            'img/76e3968e79b88983.jpg',
            'img/7148ac1da26da6f7.jpg',
        ],
    },
    portrait: 'img/b3d8ef76939fc720.jpg',
}
