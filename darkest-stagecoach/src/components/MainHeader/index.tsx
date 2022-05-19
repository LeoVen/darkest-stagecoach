import { Fade, Modal, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInfo, faUpload } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo.png'
import { MainSection, ImageAndTitle, LogoImage, EndButtons } from './styles'
import { CustomIconButton } from '../CustomIconButton'
import { useState } from 'react'
import { ModalWrapper } from '../../styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { InfoContent } from '../InfoContent'
import { UploadClass } from '../UploadClass'
import ClassMod from '../../data/ClassMod'

interface MainHeaderProps {
    classInfo: ClassMod
    handleClassInfoChange: (classInfo: ClassMod) => void
}

export const MainHeader = ({
    classInfo,
    handleClassInfoChange
}: MainHeaderProps) => {
    const [infoModalOpen, setInfoModalOpen] = useState(false)
    const [uploadModalOpen, setUploadModalOpen] = useState(false)

    const handleInfoModalOpen = () => {
        setInfoModalOpen(true)
    }
    const handleInfoModalClose = () => {
        setInfoModalOpen(false)
    }
    const handleUploadModalOpen = () => {
        setUploadModalOpen(true)
    }
    const handleUploadModalClose = () => {
        setUploadModalOpen(false)
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
                        className="cursor-pointer"
                        style={{ padding: '0.6rem' }}
                        onClick={handleInfoModalOpen}>
                        <FontAwesomeIcon icon={faInfo} size={'1x'} />
                    </CustomIconButton>
                    <Modal open={infoModalOpen} onClose={handleInfoModalClose}>
                        <Fade in={infoModalOpen} timeout={400} exit={false}>
                            <ModalWrapper
                                style={{
                                    width: '80vw',
                                    maxWidth: '1080px'
                                }}>
                                <ModalCloseButton
                                    onClick={handleInfoModalClose}
                                />
                                <InfoContent />
                            </ModalWrapper>
                        </Fade>
                    </Modal>
                    {/* TODO */}
                    <CustomIconButton
                        className="cursor-pointer hidden"
                        style={{ padding: '0.6rem' }}
                        onClick={handleUploadModalOpen}>
                        <FontAwesomeIcon icon={faUpload} size={'1x'} />
                    </CustomIconButton>
                    <Modal
                        open={uploadModalOpen}
                        onClose={handleUploadModalClose}>
                        <Fade in={uploadModalOpen} timeout={400} exit={false}>
                            <ModalWrapper
                                style={{
                                    width: '80vw',
                                    maxWidth: '1080px'
                                }}>
                                <ModalCloseButton
                                    onClick={handleUploadModalClose}
                                />
                                <UploadClass
                                    classInfo={classInfo}
                                    handleClassInfoChange={
                                        handleClassInfoChange
                                    }
                                />
                            </ModalWrapper>
                        </Fade>
                    </Modal>
                    <a
                        href="https://github.com/LeoVen/darkest-stagecoach"
                        target="_blank"
                        rel="noreferrer">
                        <CustomIconButton
                            className="cursor-pointer"
                            style={{ padding: '0.6rem' }}>
                            <FontAwesomeIcon icon={faGithub} size={'1x'} />
                        </CustomIconButton>
                    </a>
                </EndButtons>
            </MainSection>
        </>
    )
}
