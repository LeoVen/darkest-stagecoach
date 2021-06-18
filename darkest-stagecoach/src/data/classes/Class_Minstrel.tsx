
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/minstrel_portrait_roster.png'

export const Class_Minstrel: ClassMod = {
    name: 'Minstrel',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.3, bleed: 0.3, disease: 0.3, move: 0.2, debuff: 0.5, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 15, speed: 0},
{dodge: 0.1, prot: 0, hp: 18, speed: 0},
{dodge: 0.15, prot: 0, hp: 21, speed: 0},
{dodge: 0.2, prot: 0, hp: 24, speed: 0},
{dodge: 0.25, prot: 0, hp: 27, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 11.0], crit: 0.02, speed: 5}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: 6}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 7}
,{accuracy: 0, damage: [7.0, 16.0], crit: 0.05, speed: 8}
,{accuracy: 0, damage: [8.0, 18.0], crit: 0.06, speed: 10}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2122287782'
        }
    ],
}