import { Skill } from '../../Types'
import { Circle, MainSection } from './styles'

interface PositionsProps {
    skills: Skill[]
}

export const circleColors = (ratio?: number) => {
    if (ratio === undefined) return 'var(--font-disabled)'
    else if (ratio <= 0.0) return '#b11900'
    else if (ratio <= 2 / 7) return '#7f290b'
    else if (ratio <= 4 / 7) return '#8e5b11'
    return '#2a4416'
}

export const borderColors = (ratio?: number) => {
    if (ratio === undefined) return '#000000'
    else if (ratio <= 0.0) return '#f40006'
    else if (ratio <= 2 / 7) return '#e26826'
    else if (ratio <= 4 / 7) return '#f0ef5a'
    return '#4fcb4f'
}

export const extraCss = (ratio: number) => {
    if (ratio <= 0.0) return '#f40006'
    else if (ratio <= 3 / 7) return '#f0ef5a'
    return '#4fcb4f'
}

const circle = (idx: number, skills: number, total: number) => {
    let ratio = skills / total
    return (
        <Circle
            key={`${idx}-positions`}
            color={circleColors(
                skills / total
            )}
            border={borderColors(
                skills / total
            )}
            blur={ratio !== undefined && ratio === 1 ? true : false}>
            {skills}
        </Circle>
    )
}

export const Positions = ({ skills }: PositionsProps) => {

    let totalSkills = skills.length

    let result = [0, 0, 0, 0]

    skills.forEach(skill => {
        result[0] += skill.launch[0] ? 1 : 0
        result[1] += skill.launch[1] ? 1 : 0
        result[2] += skill.launch[2] ? 1 : 0
        result[3] += skill.launch[3] ? 1 : 0
    });

    return (
        <MainSection>
            {result.map((v, i) => circle(i, v, totalSkills))}
        </MainSection>
    )
}
