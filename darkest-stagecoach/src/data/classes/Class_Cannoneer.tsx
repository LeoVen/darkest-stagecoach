
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/cannoneer_portrait_roster.png'

export const Class_Cannoneer: ClassMod = {
    name: 'Cannoneer',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.3, bleed: 0.3, disease: 0.3, move: 0.4, debuff: 0.3, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 22, speed: 0},
{dodge: 0.05, prot: 0, hp: 27, speed: 0},
{dodge: 0.1, prot: 0, hp: 32, speed: 0},
{dodge: 0.15, prot: 0, hp: 37, speed: 0},
{dodge: 0.2, prot: 0, hp: 42, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [2.0, 7.0], crit: 0.03, speed: 2}
,{accuracy: 0, damage: [3.0, 8.0], crit: 0.04, speed: 2}
,{accuracy: 0, damage: [4.0, 9.0], crit: 0.05, speed: 3}
,{accuracy: 0, damage: [4.0, 10.0], crit: 0.06, speed: 3}
,{accuracy: 0, damage: [5.0, 13.0], crit: 0.07, speed: 4}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=912030977'
        }
    ],
}