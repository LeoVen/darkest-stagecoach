
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/eternal_portrait_roster.png'

export const Class_Eternal: ClassMod = {
    name: 'Eternal',
    portrait: portrait,
    religious: true,
    resistances: {stun: 0.2, blight: 0.1, bleed: 0.6, disease: 0.6, move: 0.2, debuff: 0.6, deathBlow: 0.72, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 18, speed: 0},
{dodge: 0.05, prot: 0, hp: 21, speed: 0},
{dodge: 0.1, prot: 0, hp: 24, speed: 0},
{dodge: 0.15, prot: 0, hp: 27, speed: 0},
{dodge: 0.2, prot: 0, hp: 30, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 5}
,{accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 6}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 6}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2199841880'
        }
    ],
}