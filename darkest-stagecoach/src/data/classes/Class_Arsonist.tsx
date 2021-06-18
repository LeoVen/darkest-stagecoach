
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/arsonist_portrait_roster.png'

export const Class_Arsonist: ClassMod = {
    name: 'Arsonist',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.2, bleed: 0.2, disease: 0.3, move: 0.3, debuff: 0.2, deathBlow: 0.67, trap: 0.3},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 22, speed: 0},
{dodge: 0.15, prot: 0, hp: 26, speed: 0},
{dodge: 0.2, prot: 0, hp: 30, speed: 0},
{dodge: 0.25, prot: 0, hp: 34, speed: 0},
{dodge: 0.3, prot: 0, hp: 38, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5}
,{accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6}
,{accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6}
,{accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2255822193'
        }
    ],
}
    