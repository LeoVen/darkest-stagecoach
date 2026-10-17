// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hqclaimants1: ClassModData = {
    key: 'hqclaimants1',
    name: `Claimants`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 4.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [2.0, 5.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2091777102'
        }
    ],
    skills: [
        {
            name: ` ¤ ¤ ¤ ¤
Reprieve`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8b735fdee93d69e7.jpg',
        },
        {
            name: `Eldritch Claim`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8215912f3fe4bbca.jpg',
        },
        {
            name: `Ceaseless Ambition`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2192426374fac4a1.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Coerce`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/019c1a71058aa64a.jpg',
        },
        {
            name: `Measured Assault`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5ce1cba4a58db992.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Intervene`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5eecac44b806f05e.jpg',
        },
        {
            name: `Stately Bulwark`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/53f483b38934902b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3d56dc05646387dc.jpg',
            'img/1e7c7885c1f402f9.jpg',
            'img/298b8dd07ae4df0f.jpg',
            'img/90e032be7a35ad92.jpg',
            'img/d03fc055236980c7.jpg',
        ],
        weapon: [
            'img/fecb0c396e79972a.jpg',
            'img/5d63b2a2bfaa2b0d.jpg',
            'img/ee7d972ac5fe0dab.jpg',
            'img/bcc793430c950bd0.jpg',
            'img/88ddd0da07244dca.jpg',
        ],
    },
    portrait: 'img/a3ade429699bdb41.jpg',
}
