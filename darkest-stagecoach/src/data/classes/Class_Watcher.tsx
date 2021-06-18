
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/watcher_portrait_roster.png'

export const Class_Watcher: ClassMod = {
    name: 'Watcher',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.25, bleed: 0.25, disease: 0.35, move: 0.2, debuff: 0.25, deathBlow: 0.67, trap: 0.4},
    stats: {
        armours: [
            {dodge: 0.06, prot: 0, hp: 22, speed: 0},
{dodge: 0.11, prot: 0, hp: 26, speed: 0},
{dodge: 0.16, prot: 0, hp: 30, speed: 0},
{dodge: 0.21, prot: 0, hp: 34, speed: 0},
{dodge: 0.26, prot: 0, hp: 38, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 5}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [7.0, 15.0], crit: 0.06, speed: 6}
,{accuracy: 0, damage: [7.0, 16.0], crit: 0.07, speed: 6}
,{accuracy: 0, damage: [8.0, 18.0], crit: 0.08, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1390943153'
        }
    ],
}
    