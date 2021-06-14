import stun from '../assets/img/stats/stun.png'
import blight from '../assets/img/stats/blight.png'
import bleed from '../assets/img/stats/bleed.png'
import disease from '../assets/img/stats/disease.png'
import move from '../assets/img/stats/move.png'
import debuff from '../assets/img/stats/debuff.png'
import deathBlow from '../assets/img/stats/deathBlow.png'
import trap from '../assets/img/stats/trap.png'
import { ResistancesIcon } from '../Types'
import { CSSProperties } from 'react'

interface ResistanceIconProps {
    icon: ResistancesIcon
    style?: CSSProperties
}

const iconMap: Record<ResistancesIcon, string> = {
    stun: stun,
    blight: blight,
    bleed: bleed,
    disease: disease,
    move: move,
    debuff: debuff,
    deathBlow: deathBlow,
    trap: trap
}

export function ResistanceIcon(props: ResistanceIconProps) {
    return <img src={iconMap[props.icon]} alt="Icon" style={props.style} />
}
