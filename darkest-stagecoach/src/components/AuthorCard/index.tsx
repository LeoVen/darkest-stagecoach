import { Typography } from '@material-ui/core'
import Author from '../../data/Author'
import { Credits } from '../../Types'
import {
    AuthorCardMain,
    AuthorCardRow,
    AuthorCardCreditList,
    AuthorCardCreditItem
} from './styles'

interface AuthorCardProps {
    author: Author
    credits: Credits
}

export const AuthorCard: React.FunctionComponent<AuthorCardProps> = ({
    author,
    credits
}) => {
    return (
        <AuthorCardMain>
            <AuthorCardRow>
                <Typography variant="subtitle1">{author.name}</Typography>
                <AuthorCardCreditList>
                    {credits.map(credit => {
                        return (
                            <AuthorCardCreditItem variant="body1">
                                {credit}
                            </AuthorCardCreditItem>
                        )
                    })}
                </AuthorCardCreditList>
            </AuthorCardRow>
        </AuthorCardMain>
    )
}
