import { Fade, Modal, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo.png'
import { MainSection, ImageAndTitle, LogoImage, EndButtons } from './styles'
import { CustomIconButton } from '../CustomIconButton'
import { useState } from 'react'
import { ModalWrapper } from '../../styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { InfoContent } from '../InfoContent'

export const MainHeader = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(true)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <>
            <MainSection>
                <ImageAndTitle>
                    <LogoImage src={logo} alt="Logo" />
                    <Typography variant="h1">Darkest Stagecoach</Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ marginTop: '0.5em' }}>
                        A place to explore class mods for the{' '}
                        <a
                            href="https://www.darkestdungeon.com/"
                            target="_blank"
                            rel="noreferrer">
                            Darkest Dungeon
                        </a>{' '}
                        game
                    </Typography>
                </ImageAndTitle>
                <EndButtons>
                    <CustomIconButton
                        style={{ padding: '0.6rem' }}
                        onClick={handleModalOpen}>
                        <FontAwesomeIcon icon={faInfo} size={'1x'} />
                    </CustomIconButton>
                    <Modal open={modalOpen} onClose={handleModalClose}>
                        <Fade in={modalOpen} timeout={400} exit={false}>
                            <ModalWrapper
                                style={{
                                    width: '80vw',
                                    maxWidth: '1080px'
                                }}>
                                <ModalCloseButton onClick={handleModalClose} />
                                <InfoContent />
                            </ModalWrapper>
                        </Fade>
                    </Modal>
                    <a
                        href="https://github.com/LeoVen/darkest-stagecoach"
                        target="_blank"
                        rel="noreferrer">
                        <CustomIconButton style={{ padding: '0.6rem' }}>
                            <FontAwesomeIcon icon={faGithub} size={'1x'} />
                        </CustomIconButton>
                    </a>
                </EndButtons>
            </MainSection>
        </>
    )
}
