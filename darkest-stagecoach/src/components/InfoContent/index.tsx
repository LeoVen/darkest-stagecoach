import { Typography } from '@material-ui/core'
import { SynergyIconsTable } from '../SynergyIcon'
import { MainSection, Paragraph, SectionTitle } from './styles'

export const InfoContent = () => {
    return (
        <MainSection>
            <Typography variant="h2" style={{ marginBottom: '0.5rem' }}>
                About
            </Typography>
            <Typography variant="body1">
                In Darkest Stagecoach you can find awesome Class Mods that fit a
                desired playstyle. This is a work in progress project,{' '}
                <a
                    href="https://github.com/LeoVen/darkest-stagecoach"
                    target="_blank"
                    rel="noreferrer">
                    open source
                </a>{' '}
                and community driven. Below you can find more information on how
                to use this website and how to contribute to it by adding more
                mods or improving the code behind it.
            </Typography>
            <SectionTitle variant="h3">How to use</SectionTitle>
            <Paragraph variant="body1">
                There are two buttons at the bottom. One for sorting and one for
                filtering. Once you have sorted or filtered the classes you can
                click on their cards to display more information, such as
                sources to get the mod, authors and stats.
            </Paragraph>
            <SectionTitle variant="h4">Sorting</SectionTitle>
            <Paragraph variant="body1">
                When you click on the sort button, a list of possible sortings
                will appear. You can sort by only one attribute for now. These
                attributes are based on a Class Mod's stats. You can toggle
                between ascending or descending by clicking multiple times.
            </Paragraph>
            <Paragraph variant="body1">
                An important thing to note is the 'Level Ref' located at the
                top. This is the resolve level to make the comparisons. This
                exists because many classes scale differently. You can choose
                which level to compare based on your experience.
            </Paragraph>
            <SectionTitle variant="h4">Filtering</SectionTitle>
            <Paragraph variant="body1">
                The filtering section is a bit more convoluted. You can filter
                classes by Name, Characteristics or by Skill Synergy. Any icon
                can be clicked three times. Clicking once and you get a green
                border, meaning to include classes that have that certain
                ability. Click again and a red border shows up, meaning to
                filter classes that don't have that feature.
            </Paragraph>
            <Paragraph variant="body1">
                The filter is only applied once you click the Ok button or when
                you close the filter tab.
            </Paragraph>
            <SectionTitle variant="h3">Synergy Table</SectionTitle>
            <SynergyIconsTable />
        </MainSection>
    )
}
