import ClassMod from '../../ClassMod'
import { MarvinSeo } from '../authors/MarvinSeo'
import LamiaHero from '../../assets/img/hero/LamiaHero.jpg'

export const Lamia: ClassMod = {
    name: 'Lamia',
    image: LamiaHero,
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
