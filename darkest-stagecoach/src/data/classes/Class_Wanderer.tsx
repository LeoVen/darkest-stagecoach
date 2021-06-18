
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/wanderer_portrait_roster.png'

export const Class_Wanderer: ClassMod = {
    name: 'Wanderer',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.4, bleed: 0.1, disease: 0.2, move: 0.3, debuff: 0.4, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 20, speed: 0},
{dodge: 0.15, prot: 0, hp: 24, speed: 0},
{dodge: 0.2, prot: 0, hp: 28, speed: 0},
{dodge: 0.25, prot: 0, hp: 32, speed: 0},
{dodge: 0.3, prot: 0, hp: 36, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0, speed: 4}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0, speed: 4}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0, speed: 5}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0, speed: 5}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2195826550'
        }
    ],
}
    