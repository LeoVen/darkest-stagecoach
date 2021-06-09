import { Paper, Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { AuthorCard } from '../AuthorCard'
import { ClassCardBanner } from './styles'

interface ClassCardProps {
    classMod: ClassMod
}

export const ClassCard: React.FunctionComponent<ClassCardProps> = ({
    classMod
}) => {
    return (
        <Paper
            style={{
                padding: '2em'
            }}>
            <ClassCardBanner>
                <img src={classMod.hero} style={{ margin: '0 1em 1em 0' }} />
                <Typography variant="h2">{classMod.name}</Typography>
            </ClassCardBanner>
            <Typography variant="subtitle2">
                {classMod.shortDescription}
            </Typography>
            <div>
                <div>
                    <Typography variant="h3" style={{ marginBottom: '0.2em' }}>
                        Creators
                    </Typography>
                    {classMod.authors.map(auth => (
                        <AuthorCard
                            author={auth.author}
                            credits={auth.credits}
                        />
                    ))}
                </div>
            </div>
        </Paper>
    )
}
