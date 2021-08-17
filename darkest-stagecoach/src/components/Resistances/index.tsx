import React from 'react'
import { Resistances, ResistancesNames } from '../../Types'
import {
    MainSection,
    StatsSection,
    ResRowIconText,
    ResRowSection
} from './styles'
import { ResistanceIcon } from '../ResistanceIcon'
import { Typography } from '@material-ui/core'

export const TextColors = {
    stun: '#F0CF5A',
    blight: '#C6FF57',
    bleed: '#E30900',
    disease: '#798D45',
    move: '#798FFF',
    debuff: '#E26826',
    deathBlow: '#B11900',
    trap: '#8860B2'
}

interface ResistancesSectionProps {
    res?: Resistances
}

export const ResistancesSection = ({ res }: ResistancesSectionProps) => {
    if (res === undefined) {
        return <Typography variant="body1">Unavailable</Typography>
    }

    let data: {
        icon: ResistancesNames
        name: string
        value: number
        color: string
    }[] = [
        {
            icon: 'stun',
            name: 'Stun',
            value: res.stun,
            color: TextColors.stun
        },
        {
            icon: 'blight',
            name: 'Blight',
            value: res.blight,
            color: TextColors.blight
        },
        {
            icon: 'disease',
            name: 'Disease',
            value: res.disease,
            color: TextColors.disease
        },
        {
            icon: 'deathBlow',
            name: 'Death Blow',
            value: res.deathBlow,
            color: TextColors.deathBlow
        },
        {
            icon: 'move',
            name: 'Move',
            value: res.move,
            color: TextColors.move
        },
        {
            icon: 'bleed',
            name: 'Bleed',
            value: res.bleed,
            color: TextColors.bleed
        },
        {
            icon: 'debuff',
            name: 'Debuff',
            value: res.debuff,
            color: TextColors.debuff
        },
        {
            icon: 'trap',
            name: 'Trap',
            value: res.trap,
            color: TextColors.trap
        }
    ]

    let half = data.length / 2

    let first = data.slice(0, half)
    let second = data.slice(-half)

    const template = (data: {
        icon: ResistancesNames
        name: string
        value: number
        color: string
    }) => (
        <Typography
            key={data.name}
            variant="body1"
            component="span"
            style={{ fontWeight: 'bold' }}>
            <ResRowSection>
                <ResRowIconText>
                    <ResistanceIcon
                        icon={data.icon}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <div style={{ color: data.color }}>{data.name}</div>
                </ResRowIconText>
                <div style={{ fontWeight: 'normal' }}>{`${Math.round(
                    data.value * 100
                )}%`}</div>
            </ResRowSection>
        </Typography>
    )

    return (
        <MainSection>
            <StatsSection>
                <div>{first.map(template)}</div>
                <div>{second.map(template)}</div>
            </StatsSection>
        </MainSection>
    )
}
