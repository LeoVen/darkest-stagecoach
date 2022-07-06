import React from 'react'
import { EquipIcons, GearStats } from '../../Types'
import {
    MainSection,
    StatsSection,
    StatsCol,
    StatsRow,
    LevelSelection,
    StatsListing
} from './styles'
import { Typography } from '@material-ui/core'
import { NumberSelection } from '../NumberSelection'
import { Image } from '../Image'

interface BaseStatsProps {
    stats: GearStats
    icons: EquipIcons
}

export const BaseStats = ({ stats, icons }: BaseStatsProps) => {
    const [level, changeLevel] = React.useState<number>(0)

    if (stats === undefined) {
        return <Typography variant="body1">Unavailable</Typography>
    }

    const template = (name: string, value: string, showPct: boolean) => {
        return (
            <Typography variant="body1">
                <StatsRow>
                    <div>{name}</div>
                    <div>
                        {value}
                        {showPct ? '%' : ''}
                    </div>
                </StatsRow>
            </Typography>
        )
    }

    const levelSelector = (
        index: number,
        curr: number,
        callback: () => void
    ) => {
        return (
            <div key={index} onClick={() => callback()}>
                <NumberSelection index={index} selected={index === curr} />
            </div>
        )
    }

    const { weapons, armours } = stats

    let sA = armours[level]
    let sW = weapons[level]

    return (
        <MainSection>
            <LevelSelection>
                {[0, 1, 2, 3, 4].map(i =>
                    levelSelector(i, level, () => changeLevel(i))
                )}
            </LevelSelection>
            <StatsSection>
                <StatsCol>
                    <Image imgData={icons.armour[level]} />
                    <StatsListing>
                        {template('MAX HP', `${sA.hp}`, false)}
                        {template('DODGE', `${(sA.dodge * 100).toFixed(0)}`, false)}
                        {template('PROT', `${sA.prot * 100}`, true)}
                        {template('SPD', `${sA.speed + sW.speed}`, false)}
                    </StatsListing>
                </StatsCol>
                <StatsCol>
                    <Image imgData={icons.weapon[level]} />
                    <StatsListing>
                        {template('ACC MOD', `${sW.accuracy * 100}`, false)}
                        {template('CRIT', `${(sW.crit * 100).toPrecision(2)}`, true)}
                        {template('DMG', `${sW.damage[0]}-${sW.damage[1]}`, false)}
                    </StatsListing>
                </StatsCol>
            </StatsSection>
        </MainSection>
    )
}
