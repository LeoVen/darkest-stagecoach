
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/arcanist_portrait_roster.png'

export const Class_Arcanist: ClassMod = {
    name: 'Arcanist',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.1, blight: 0.5, bleed: 0.1, disease: 0.5, move: 0.1, debuff: 0.5, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 19, speed: 0},
{dodge: 0.075, prot: 0, hp: 23, speed: 0},
{dodge: 0.1, prot: 0, hp: 27, speed: 0},
{dodge: 0.125, prot: 0, hp: 31, speed: 0},
{dodge: 0.15, prot: 0, hp: 35, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 8}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 9}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 9}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 10}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1800025310'
        }
    ],
}
    