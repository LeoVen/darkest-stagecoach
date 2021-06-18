
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/janissary_portrait_roster.png'

export const Class_Janissary: ClassMod = {
    name: 'Janissary',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.3, bleed: 0.3, disease: 0.3, move: 0.4, debuff: 0.3, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.07, prot: 0, hp: 23, speed: 0},
{dodge: 0.12, prot: 0, hp: 27, speed: 0},
{dodge: 0.17, prot: 0, hp: 31, speed: 0},
{dodge: 0.22, prot: 0, hp: 35, speed: 0},
{dodge: 0.27, prot: 0, hp: 39, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 6}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.09, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2377934884'
        }
    ],
}
    