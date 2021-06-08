import ClassMod from '../ClassMod'
import { MarvinSeo } from '../authors/MarvinSeo'
import LamiaPortrait from '../../assets/img/hero/LamiaPortrait.png'

export const Lamia: ClassMod = {
    name: 'Lamia',
    shortDescription: 'Beauty is remembered forever...',
    hero: LamiaPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        }
    ],
    authors: [
        {
            author: MarvinSeo,
            credits: ['All']
        }
    ]
}
