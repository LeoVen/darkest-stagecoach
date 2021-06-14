import ClassMod from '../ClassMod'
import CommandantPortrait from '../../assets/img/hero/CommandantPortrait.png'
import { Author_Terkmc } from '../authors/Author_Terkmc'
import { Author_Cryptix } from '../authors/Author_Cryptix'
import { Author_VoidSlime } from '../authors/Author_VoidSlime'
import { Author_54NBB } from '../authors/Author_54NBB'

export const Commandant: ClassMod = {
    name: 'Commandant',
    description: [
        'The Commandant is a veteran of a thousand battles. From the trenches to the brutal urban cities, he has seen the best and the worst that war has to offer, accumulating medals and scars to prove it. Now, empowered by war itself and with the power to shape the very blood soaked soil of the battlefield, he has come to the Hamlet, seeking rumors even greater sources of power to harness and serve his country.'
    ],
    portrait: CommandantPortrait,
    religious: false,
    transform: false,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    authors: [
        {
            author: Author_Terkmc,
            credits: ['Concept', 'Art', 'Design', 'Sound']
        },
        {
            author: Author_Cryptix,
            credits: ['Scripting']
        },
        {
            author: Author_VoidSlime,
            credits: ['Scripting']
        },
        {
            author: Author_54NBB,
            credits: ['Animation']
        }
    ]
}
