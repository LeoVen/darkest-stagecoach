import { Tooltip } from '@material-ui/core'
import originalHero from '../assets/img/stats/torch.png'

export const OriginalHeroIcon = () => (
    <Tooltip
        key={`original-hero`}
        title="Original Hero"
        placement="top"
        arrow={true}>
        <div>
            <img src={originalHero} />
        </div>
    </Tooltip>
)
