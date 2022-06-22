import { ClassModInfo } from '../ClassMod'

export const Class_wraith_ms1: ClassModInfo = {
    description: [
        'An assassin from a distant land, the Wraith fights using a peculiar weapon of blade and chain. Master of this exotic tool of bloodshed, this heartless killer swings his sickle like a whip, lacerating and decapitating his foes from a range or delivering a brutal execution in melee.',
        'The Wraith is not an agile combatant. His body and mind are cold from a decade of remorseless slaughter and he has adapted a patient and calculating method to his combat tactics. He relies on ensnaring his victims or temporarily incapacitating them with the blunt side of his weapon, after which he can deliver an efficient and fatal attack.'
    ],
    synergy: new Set(['stun', 'mark', 'bleed', 'pull', 'shuffle', 'debuff']),
    classType: {
        damage: 3,
        healer: 0,
        support: 1,
        tank: 0
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1697037179'
        }
    ],
    authors: [
        {
            authorKey: 'Author_MarvinSeo',
            credits: ['All']
        }
    ]
}
