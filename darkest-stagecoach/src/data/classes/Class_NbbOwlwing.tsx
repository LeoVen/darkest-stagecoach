
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/nbb_owlwing_portrait_roster.png'

export const Class_NbbOwlwing: ClassMod = {
    name: 'NbbOwlwing',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.3, bleed: 0.4, disease: 0.3, move: 0.3, debuff: 0.3, deathBlow: 0.67, trap: 0.5},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 23, speed: 0},
{dodge: 0.15, prot: 0, hp: 28, speed: 0},
{dodge: 0.2, prot: 0, hp: 33, speed: 0},
{dodge: 0.25, prot: 0, hp: 38, speed: 0},
{dodge: 0.3, prot: 0, hp: 42, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [7.0, 11.0], crit: 0.07, speed: 6}
,{accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 6}
,{accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2497069197'
        }
    ],
}
    