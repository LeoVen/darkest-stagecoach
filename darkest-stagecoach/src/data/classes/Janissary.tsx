import ClassMod from '../ClassMod'
import { Author_Shay } from '../authors/Author_Shay'
import JanissaryPortrait from '../../assets/img/hero/JanissaryPortrait.png'
import { Author_Terkmc } from '../authors/Author_Terkmc'
import { Author_54NBB } from '../authors/Author_54NBB'
import { Author_Snorlaxxo } from '../authors/Author_Snorlaxxo'
import { Author_EbonyBetty } from '../authors/Author_EbonyBetty'
import { Author_Cat } from '../authors/Author_Cat'
import { Author_Ruin } from '../authors/Author_Ruin'
import { Author_Sasiji } from '../authors/Author_Sasiji'

export const Janissary: ClassMod = {
    name: 'Janissary',
    description: [
        'The Janissary is a weathered soldier who made the long trek from the southeast to aid the Hamlet. He claims he was sent by his Sultan as an act of goodwill, but is there more to his story than he lets on to? However inscrutable, we know that we will not turn down help from someone who so readily masters and shares the art of war.'
    ],
    portrait: JanissaryPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    authors: [
        {
            author: Author_Shay,
            credits: ['Design', 'Sound']
        },
        {
            author: Author_Snorlaxxo,
            credits: ['Design', 'Scripting']
        },
        {
            author: Author_EbonyBetty,
            credits: ['Concept']
        },
        {
            author: { name: 'Black Templar#8655', links: [] },
            credits: ['Concept']
        },
        {
            author: Author_Terkmc,
            credits: ['Art']
        },
        {
            author: Author_54NBB,
            credits: ['Animation']
        },
        {
            author: Author_Ruin,
            credits: ['Color Variants']
        },
        {
            author: Author_Cat,
            credits: ['Testing', 'Writing']
        },
        {
            author: Author_Sasiji,
            credits: ['Code Assistance']
        }
    ]
}
