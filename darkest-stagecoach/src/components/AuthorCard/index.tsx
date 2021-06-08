import { Paper, Typography } from '@material-ui/core'
import Author from '../../data/Author'
import { Credits } from '../../Types'
import './index.css'

interface AuthorCardProps {
    author: Author
    credits: Credits
}

export const AuthorCard: React.FunctionComponent<AuthorCardProps> = ({
    author,
    credits
}) => {
    return (
        <div>
            <Typography variant="subtitle1">{author.name}</Typography>
            <div>
                {credits.map(credit => {
                    ;<a>{credit}</a>
                })}
            </div>
            <div>
                {author.links.map(link => {
                    return <a href={link.link}>{link.name}</a>
                })}
            </div>
        </div>
    )
}
