import { Tooltip } from '@material-ui/core'
import { CSSProperties } from 'react'
import ClassMod from '../../data/ClassMod'
import { ProfileType } from '../../Types'
import { ProfileSvg } from '../Svg/ProfileSvg'
import { MainSection } from './styles'

interface Props {
    classInfo: ClassMod
}

const colorMap: Map<ProfileType, string> = new Map([
    ['religious', '#fdf8c7'],
    ['transform', '#798d45']
])
const tooltipMap: Map<ProfileType, string> = new Map([
    ['religious', 'Religious'],
    ['transform', 'Transforms']
])

export const ClassProfileIcon = ({
    type,
    style
}: {
    type: ProfileType
    style?: CSSProperties
}) => (
    <Tooltip
        key={`${type}-profile`}
        title={tooltipMap.get(type) as string}
        placement="top"
        arrow={true}>
        <div style={style}>
            <ProfileSvg
                type={type}
                width={'1rem'}
                height={'1rem'}
                fill={colorMap.get(type) as string}
            />
        </div>
    </Tooltip>
)

export const ClassProfileIcons = ({ classInfo }: Props) => {
    const template = (type: ProfileType) => {
        return (
            <Tooltip
                key={`${type}-profile`}
                title={tooltipMap.get(type) as string}
                placement="top"
                arrow={true}>
                <div style={{ marginBottom: '6px' }}>
                    <ProfileSvg
                        type={type}
                        width={'1rem'}
                        height={'1rem'}
                        fill={colorMap.get(type) as string}
                    />
                </div>
            </Tooltip>
        )
    }

    return (
        <MainSection>
            {classInfo.religious ? template('religious') : null}
            {classInfo.transform ? template('transform') : null}
        </MainSection>
    )
}
