// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_graveborn_2737382067: ClassModData = {
    key: 'graveborn_2737382067',
    name: `Graveborn`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.75,
        disease: 0.5,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2737382067'
        }
    ],
    skills: [
        {
            name: `Grim Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1097539d482f3d71.jpg',
        },
        {
            name: `From the Grave`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/33dba9f2d1ac893c.jpg',
        },
        {
            name: `Withering Grasp`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5743893a8f5330ef.jpg',
        },
        {
            name: `Grave Guard`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: `~@`,
            },
            image: 'img/1ad467f108e90952.jpg',
        },
        {
            name: `Dead Light`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e7da7e946c2f8b33.jpg',
        },
        {
            name: `Revenant's Curse`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8375600dc836e70b.jpg',
        },
        {
            name: `Drive Them Back`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/f716a5a8d88f13f6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e723d36cfba8c9a8.jpg',
            'img/3ba9c779f1e77d54.jpg',
            'img/1498e7468d121438.jpg',
            'img/4715219b8299edda.jpg',
            'img/c4de8ca6e8714c81.jpg',
        ],
        weapon: [
            'img/152ebbc630ff91a8.jpg',
            'img/21503b765273a5b1.jpg',
            'img/378a0207b4de62d4.jpg',
            'img/4cecfacebbd57316.jpg',
            'img/4fa8f5d634d9e275.jpg',
        ],
    },
    portrait: 'img/09a0eef97e05283a.jpg',
}
