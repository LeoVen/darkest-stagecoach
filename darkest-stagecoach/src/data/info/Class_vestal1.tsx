import { ClassModInfo } from '../ClassMod'

export const Class_vestal1: ClassModInfo = {
    description: [
        'The warrior nun channels her zeal for battle into healing abilities, holy judgements and dazzling explosions of light. A strong backbone to any party, the Vestal can also hold her own on the front line with a powerful mace bash and close-quarters condemnations.',
    ],
    classType: {
        damage: 1,
        healer: 3,
        support: 1,
        tank: 0,
    },
    synergy: new Set([
        'stun',
        'heal',
        'deStealth',
    ]),
}
