import Author from '../../data/Author'
import { MainSection } from './styles'

interface AuthorFormProps {
    authorInfo: Author
    handleAuthorInfoChange: (authorInfo: Author) => void
}

export const AuthorForm = ({
    authorInfo,
    handleAuthorInfoChange
}: AuthorFormProps) => {

    return (
        <MainSection>
            <p>TODO</p>
        </MainSection>
    )
}
