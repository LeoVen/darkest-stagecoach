
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/cleric_errant_portrait_roster.png'

export const Class_ClericErrant: ClassMod = {
    name: 'ClericErrant',
    portrait: portrait,
    religious: true,
    resistances: {stun: 0.5, blight: 0.3, bleed: 0.2, disease: 0.3, move: 0.4, debuff: 0.3, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 35, speed: 0},
{dodge: 0.05, prot: 0, hp: 42, speed: 0},
{dodge: 0.1, prot: 0, hp: 49, speed: 0},
{dodge: 0.15, prot: 0, hp: 56, speed: 0},
{dodge: 0.2, prot: 0, hp: 63, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1}
,{accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 1}
,{accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 2}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 2}
,{accuracy: 0, damage: [8.0, 14.0], crit: 0.08, speed: 3}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2518583774'
        }
    ],
}