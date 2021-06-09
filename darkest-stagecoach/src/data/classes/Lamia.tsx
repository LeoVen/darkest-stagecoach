import ClassMod from '../ClassMod'
import { Author_MarvinSeo } from '../authors/Author_MarvinSeo'
import LamiaPortrait from '../../assets/img/hero/LamiaPortrait.png'

export const Lamia: ClassMod = {
    name: 'Lamia',
    description: 'Beauty is remembered forever...',
    portrait: LamiaPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        }
    ],
    authors: [
        {
            author: Author_MarvinSeo,
            credits: ['All']
        }
    ]
}
