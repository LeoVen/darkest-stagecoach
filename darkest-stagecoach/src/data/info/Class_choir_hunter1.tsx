import { ClassModInfo } from '../ClassMod'

export const Class_choir_hunter1: ClassModInfo = {
    description: ['A wandering sister in search of knowledge.'],
    classType: {
        damage: 2,
        healer: 1,
        support: 2,
        tank: 0
    },
    synergy: new Set([
        'bleed',
        'heal',
        'stun',
        'buff',
        'cure',
        'forward',
        'back'
    ]),
    authors: [
        {
            authorKey: 'Author_Shay',
            credits: ['Sound']
        },
        {
            authorKey: 'Author_MoonKanin',
            credits: ['Concept', 'Art', 'Animation', 'Writing', 'Design']
        },
        {
            authorKey: 'Author_Rehtael',
            credits: ['Design', 'Scripting', 'Trailer']
        }
    ]
}
