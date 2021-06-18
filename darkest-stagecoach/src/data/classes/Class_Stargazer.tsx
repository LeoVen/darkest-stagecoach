
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/stargazer_portrait_roster.png'

export const Class_Stargazer: ClassMod = {
    name: 'Stargazer',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.1, blight: 0.3, bleed: 0.2, disease: 0.3, move: 0.2, debuff: 0.4, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.15, prot: 0, hp: 17, speed: 0},
{dodge: 0.2, prot: 0, hp: 20, speed: 0},
{dodge: 0.25, prot: 0, hp: 23, speed: 0},
{dodge: 0.3, prot: 0, hp: 26, speed: 0},
{dodge: 0.35, prot: 0, hp: 29, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 6}
,{accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 6}
,{accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 7}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2363387321'
        }
    ],
}