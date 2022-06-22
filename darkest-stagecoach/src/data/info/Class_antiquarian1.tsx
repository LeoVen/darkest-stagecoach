import { ClassModInfo } from '../ClassMod'

export const Class_antiquarian1: ClassModInfo = {
    description: [
        'A scholar, researcher, and keen archaeologist, The Antiquarian is not well suited for combat. She is, however, an expert in self-preservation - by making herself scarce in a fight, or demanding an ally protect her, she ensures her survival. If direct combat is unavoidable, The Antiquarian can use her fulminating censer to heal and invigorate allies...and to toxify attackers.'
    ],
    classType: {
        damage: 1,
        healer: 1,
        support: 2,
        tank: 0
    },
    synergy: new Set([
        'blight',
        'deStealth',
        'debuff',
        'guard',
        'heal',
        'buff'
    ]),
}
