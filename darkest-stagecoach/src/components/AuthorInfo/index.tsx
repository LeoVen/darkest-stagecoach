import { Typography } from '@material-ui/core'
import Author from '../../data/Author'
import { AuthorInfoMain, AuthorInfoLinkList } from './styles'

interface AuthorInfoProps {
    author: Author
}

export const AuthorInfo: React.FunctionComponent<AuthorInfoProps> = ({
    author
}) => {
    return (
        <AuthorInfoMain elevation={4}>
            <Typography variant="h2">{author.name}</Typography>
            <Typography variant="body1" style={{ margin: '1em 0 1em 0' }}>
                {author.about ??
                    'This author still needs to write about him/her.'}
            </Typography>
            <Typography variant="body1">
                <AuthorInfoLinkList>
                    {author.links.map(link => {
                        return (
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ padding: '1em 1em 0 0' }}>
                                {link.name}
                            </a>
                        )
                    })}
                </AuthorInfoLinkList>
            </Typography>
        </AuthorInfoMain>
    )
}
