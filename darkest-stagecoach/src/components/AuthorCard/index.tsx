import React from 'react'
import { Modal, Typography } from '@material-ui/core'
import Author from '../../data/Author'
import { Credits } from '../../Types'
import {
    AuthorCardMain,
    AuthorCardRow,
    AuthorCardCreditList,
    AuthorCardCreditItem
} from './styles'
import { ModalWrapper } from '../../styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { AuthorInfo } from '../AuthorInfo'

interface AuthorCardProps {
    author: Author
    credits: Credits
}

export const AuthorCard: React.FunctionComponent<AuthorCardProps> = ({
    author,
    credits
}) => {
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    let [open, setOpen] = React.useState(false)

    return (
        <AuthorCardMain>
            <AuthorCardRow>
                <Typography variant="subtitle1">
                    <a onClick={handleOpenModal}>{author.name}</a>
                </Typography>
                <Modal open={open} onClose={handleCloseModal}>
                    <ModalWrapper>
                        <ModalCloseButton onClick={handleCloseModal} />
                        <AuthorInfo author={author} />
                    </ModalWrapper>
                </Modal>
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
