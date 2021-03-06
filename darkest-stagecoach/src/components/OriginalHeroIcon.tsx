import { Tooltip } from '@material-ui/core'
import { CSSProperties } from 'react'
import originalHero from '../assets/img/stats/torch.png'

export const OriginalHeroIcon = ({ style }: { style?: CSSProperties }) => (
    <Tooltip
        key={`original-hero`}
        title="Original Hero"
        placement="top"
        arrow={true}>
        <div style={{ userSelect: 'none', ...style }}>
            <img src={originalHero} alt="orig-hero" />
        </div>
    </Tooltip>
)
