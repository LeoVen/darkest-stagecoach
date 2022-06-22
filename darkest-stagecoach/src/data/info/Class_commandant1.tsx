import { ClassModInfo } from '../ClassMod'

export const Class_commandant1: ClassModInfo = {
    description: [
        'The Commandant is a veteran of a thousand battles. From the trenches to the brutal urban cities, he has seen the best and the worst that war has to offer, accumulating medals and scars to prove it. Now, empowered by war itself and with the power to shape the very blood soaked soil of the battlefield, he has come to the Hamlet, seeking rumors even greater sources of power to harness and serve his country.'
    ],
    synergy: new Set([
        'buff',
        'mark',
        'reflect',
        'debuff',
        'guardBreak',
        'bleed',
        'knockback',
        'pull',
        'stun',
        'deStealth'
    ]),
    authors: [
        {
            authorKey: 'Author_Terkmc',
            credits: ['Concept', 'Art', 'Design', 'Sound']
        },
        {
            authorKey: 'Author_Cryptix',
            credits: ['Scripting']
        },
        {
            authorKey: 'Author_VoidSlime',
            credits: ['Scripting']
        },
        {
            authorKey: 'Author_54NBB',
            credits: ['Animation']
        }
    ]
}
