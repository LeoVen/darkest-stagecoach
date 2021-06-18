
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/fawn_portrait_roster.png'

export const Class_Fawn: ClassMod = {
    name: 'Fawn',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.7, bleed: 0.1, disease: 0.4, move: 0.6, debuff: 0.1, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 15, speed: 0},
{dodge: 0.03, prot: 0, hp: 18, speed: 0},
{dodge: 0.06, prot: 0, hp: 21, speed: 0},
{dodge: 0.09, prot: 0, hp: 24, speed: 0},
{dodge: 0.12, prot: 0, hp: 27, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [8.0, 11.0], crit: 0.11, speed: 9}
,{accuracy: 0, damage: [10.0, 13.0], crit: 0.12, speed: 9}
,{accuracy: 0, damage: [11.0, 15.0], crit: 0.13, speed: 10}
,{accuracy: 0, damage: [13.0, 17.0], crit: 0.14, speed: 10}
,{accuracy: 0, damage: [14.0, 19.0], crit: 0.15, speed: 11}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1109179698'
        }
    ],
}