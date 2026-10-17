import { Typography } from '@mui/material'
import { ModSourcesMain, ModSourceContainer } from './styles'

interface ModSourcesProps {
    sources: {
        name: string
        link: string
    }[]
}

export const ModSources = ({ sources }: ModSourcesProps) => {
    if (sources.length === 0) return null

    return (
        <ModSourcesMain>
            <Typography variant="subtitle2">
                You can find this class mod in the following places
            </Typography>
            <ModSourceContainer>
                {sources.map((src, i) => (
                    <Typography
                        key={`${src.name}-${i}`}
                        variant="body1"
                        component="span">
                        <a
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
