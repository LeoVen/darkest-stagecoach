
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/mender_portrait_roster.png'

export const Class_Mender: ClassMod = {
    name: 'Mender',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.2, blight: 0.4, bleed: 0.2, disease: 0.4, move: 0.2, debuff: 0.4, deathBlow: 0.67, trap: 0.2},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 21, speed: 0},
{dodge: 0.15, prot: 0, hp: 25, speed: 0},
{dodge: 0.2, prot: 0, hp: 29, speed: 0},
{dodge: 0.25, prot: 0, hp: 33, speed: 0},
{dodge: 0.3, prot: 0, hp: 37, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 5}
,{accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6}
,{accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2132866409'
        }
    ],
}