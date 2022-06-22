import { ClassModInfo } from '../ClassMod'

export const Class_lamia1: ClassModInfo = {
    description: ['Beauty is remembered forever...'],
    classType: {
        damage: 2,
        healer: 3,
        support: 1,
        tank: 0
    },
    synergy: new Set([
        'heal',
        'stress',
        'debuff',
        'shuffle',
        'cure',
        'guardBreak',
        'blight',
        'stun',
        'forward',
        'back'
    ]),
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        },
        {
            name: 'Nexus',
            link: 'https://www.nexusmods.com/darkestdungeon/mods/501'
        }
    ],
    authors: [
        {
            authorKey: 'Author_MarvinSeo',
            credits: ['All']
        }
    ]
}
