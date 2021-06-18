
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/bluesman_bet_portrait_roster.png'

export const Class_BluesmanBet: ClassMod = {
    name: 'BluesmanBet',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.3, bleed: 0.3, disease: 0.3, move: 0.2, debuff: 0.3, deathBlow: 0.67, trap: 0},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 20, speed: 0},
{dodge: 0.1, prot: 0, hp: 24, speed: 0},
{dodge: 0.15, prot: 0, hp: 28, speed: 0},
{dodge: 0.2, prot: 0, hp: 32, speed: 0},
{dodge: 0.25, prot: 0, hp: 36, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [2.0, 4.0], crit: 0.05, speed: 7}
,{accuracy: 0, damage: [2.0, 5.0], crit: 0.06, speed: 7}
,{accuracy: 0, damage: [3.0, 6.0], crit: 0.07, speed: 8}
,{accuracy: 0, damage: [4.0, 7.0], crit: 0.08, speed: 8}
,{accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 10}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2085895105'
        }
    ],
}
    