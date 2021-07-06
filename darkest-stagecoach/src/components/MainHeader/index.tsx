import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/logo.png'
import { MainSection, ImageAndTitle, LogoImage } from './styles'

export const MainHeader = () => (
    <MainSection>
        <ImageAndTitle>
            <LogoImage src={logo} alt="Logo" />
            <Typography variant="h1">Darkest Stagecoach</Typography>
            <Typography variant="subtitle1" style={{ marginTop: '0.5em' }}>
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
        <div>
            <a
                href="https://github.com/LeoVen/darkest-stagecoach"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size={'2x'} />
            </a>
        </div>
    </MainSection>
)
