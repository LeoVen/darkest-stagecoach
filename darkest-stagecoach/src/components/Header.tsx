import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/img/logo.png'

export const Header = () => (
    <header
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1em'
        }}>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
            <img
                src={logo}
                alt="Logo"
                style={{
                    width: '64px',
                    height: '64px',
                    marginRight: '1em'
                }}
            />
            <Typography variant="h1">Darkest Stagecoach</Typography>
            <Typography variant="subtitle1" style={{ marginTop: '0.5em' }}>
                A place to explore class mods for the{' '}
                <a href="https://www.darkestdungeon.com/" target="_blank">
                    Darkest Dungeon
                </a>{' '}
                game
            </Typography>
        </div>
        <div>
            <a
                href="https://github.com/LeoVen/darkest-stagecoach"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} size={'2x'} />
            </a>
        </div>
    </header>
)
