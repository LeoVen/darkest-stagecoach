
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/duelist_portrait_roster.png'

export const Class_Duelist: ClassMod = {
    name: 'Duelist',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.2, bleed: 0.2, disease: 0.2, move: 0.4, debuff: 0.5, deathBlow: 0.5, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.15, prot: 0, hp: 20, speed: 0},
{dodge: 0.2, prot: 0, hp: 24, speed: 0},
{dodge: 0.25, prot: 0, hp: 28, speed: 0},
{dodge: 0.35, prot: 0, hp: 32, speed: 0},
{dodge: 0.4, prot: 0, hp: 35, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [8.0, 10.0], crit: 0.03, speed: 6}
,{accuracy: 0, damage: [9.0, 11.0], crit: 0.04, speed: 6}
,{accuracy: 0, damage: [10.0, 12.0], crit: 0.05, speed: 7}
,{accuracy: 0, damage: [11.0, 13.0], crit: 0.06, speed: 7}
,{accuracy: 0, damage: [12.0, 15.0], crit: 0.07, speed: 8}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2371334111'
        }
    ],
}