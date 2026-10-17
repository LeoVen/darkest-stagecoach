// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cannoneer_912030977: ClassModData = {
    key: 'cannoneer_912030977',
    name: `Cannoneer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 7.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [3.0, 8.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.07, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=912030977'
        }
    ],
    skills: [
        {
            name: `Light the Fuse`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ec9fedc152c33488.jpg',
        },
        {
            name: `Kaboom`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/60615f26edeae1f5.jpg',
        },
        {
            name: `Rocket Jump`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/3f5b3383f86424e5.jpg',
        },
        {
            name: `Bombardment`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/8557253e470d53e5.jpg',
        },
        {
            name: `Shrapnel Blast`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/981337d97c360c8d.jpg',
        },
        {
            name: `Minefield`,
            launch: [true,true,true,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/b6eb2eddf532764c.jpg',
        },
        {
            name: `"On My Mark"`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e1f58ee90a382ea4.jpg',
            'img/67240133b791deb3.jpg',
            'img/695c1c143b792a61.jpg',
            'img/6f1e9fd4c465e7ce.jpg',
            'img/65dd85f2efb38aec.jpg',
        ],
        weapon: [
            'img/13bce513fd13b3a6.jpg',
            'img/85bc58578bb45c0d.jpg',
            'img/d6a336b555292166.jpg',
            'img/a370d69816f45f60.jpg',
            'img/5749ada73db3ddcb.jpg',
        ],
    },
    portrait: 'img/142423e8bf985973.jpg',
}
