
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/shield_maiden_portrait_roster.png'

export const Class_ShieldMaiden: ClassMod = {
    name: 'ShieldMaiden',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.5, blight: 0.3, bleed: 0.3, disease: 0.3, move: 0.7, debuff: 0.2, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0.05, hp: 32, speed: 0},
{dodge: 0.1, prot: 0.05, hp: 39, speed: 0},
{dodge: 0.15, prot: 0.07, hp: 46, speed: 0},
{dodge: 0.2, prot: 0.07, hp: 53, speed: 0},
{dodge: 0.25, prot: 0.1, hp: 60, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 1}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 1}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 2}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 2}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 3}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=963658853'
        }
    ],
}
    