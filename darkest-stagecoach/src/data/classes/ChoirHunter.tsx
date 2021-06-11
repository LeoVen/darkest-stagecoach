import ClassMod from '../ClassMod'
import { Author_MoonKanin } from '../authors/Author_MoonKanin'
import { Author_Rehtael } from '../authors/Author_Rehtael'
import { Author_Shay } from '../authors/Author_Shay'
import ChoirHunterPortrait from '../../assets/img/hero/ChoirHunterPortrait.png'

export const ChoirHunter: ClassMod = {
    name: 'Choir Hunter',
    description: ['A wandering sister in search of knowledge.'],
    portrait: ChoirHunterPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2505955762'
        }
    ],
    authors: [
        {
            author: Author_Shay,
            credits: ['Sound']
        },
        {
            author: Author_MoonKanin,
            credits: ['Concept', 'Art', 'Animation', 'Writing', 'Design']
        },
        {
            author: Author_Rehtael,
            credits: ['Design', 'Scripting', 'Trailer']
        }
    ]
}
