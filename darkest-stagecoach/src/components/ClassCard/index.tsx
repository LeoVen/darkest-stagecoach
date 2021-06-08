import { Paper, Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { AuthorCard } from '../AuthorCard'
import './index.css'

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
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '10px'
                }}>
                <img
                    src={classMod.hero}
                    style={{
                        maxWidth: 'calc(100vw - 6em)',
                        margin: '0 1em 1em 0'
                    }}
                />
                <Typography variant="h2">{classMod.name}</Typography>
            </div>
            <Typography variant="subtitle2">
                {classMod.shortDescription}
            </Typography>
            <div>
                <div>{'TODO'}</div>
                <div>
                    <Typography variant="h3">Creators</Typography>
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
