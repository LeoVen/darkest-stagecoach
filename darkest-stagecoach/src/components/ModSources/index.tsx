import { Typography } from '@material-ui/core'
import { ModSourcesMain, ModSourceContainer } from './styles'

interface ModSourcesProps {
    sources: {
        name: string
        link: string
    }[]
}

export const ModSources: React.FunctionComponent<ModSourcesProps> = ({
    sources
}) => {
    return (
        <ModSourcesMain>
            <Typography variant="subtitle2">
                You can find this class mod in the following places
            </Typography>
            <ModSourceContainer>
                {sources.map((src, i) => (
                    <Typography variant="body1" component="span">
                        <a
                            key={`${src.name}-${i}`}
                            style={{ marginLeft: '1rem' }}
                            href={src.link}
                            target="_blank"
                            rel="noreferrer">
                            {src.name}
                        </a>
                    </Typography>
                ))}
            </ModSourceContainer>
        </ModSourcesMain>
    )
}
