import React from 'react'
import { Drawer, Menu, Divider, Button } from '@material-ui/core'
import { ClassModFilter, SortBy, SortingKeys } from '../../Types'
import {
    BottomButton,
    BottomFilterSection,
    InnerItem,
    SortItem,
    DrawerContent
} from './styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFilter,
    faSort,
    faSortUp,
    faSortDown,
    faPlus,
    faMinus
} from '@fortawesome/free-solid-svg-icons'
import { LevelRefDisplay } from '../LevelRefDisplay'

interface FilterProps {
    filter: ClassModFilter
    sort: SortBy
    onSortChange: (sort: SortBy) => void
}

export const ActionButtons: React.FunctionComponent<FilterProps> = ({
    filter,
    sort,
    onSortChange
}) => {
    const [modalFilterOpen, setModalFilterOpen] = React.useState<boolean>(false)

    const handleOpenFilterModal = () => {
        setModalFilterOpen(true)
    }
    const handleCloseFilterModal = () => {
        setModalFilterOpen(false)
    }

    const handleSortByKeyChange = (sortKey: SortingKeys) => {
        let newSort: SortBy = {
            key: sortKey,
            levelRef: sort.levelRef,
            sortDirection:
                sort.key === sortKey
                    ? sort.sortDirection * -1
                    : sort.sortDirection
        }
        onSortChange(newSort)
    }

    const handleSortLevelRefChange = (delta: number) => {
        let newSort: SortBy = {
            key: sort.key,
            levelRef: Math.min(Math.max(sort.levelRef + delta, 0), 4),
            sortDirection: sort.sortDirection
        }
        onSortChange(newSort)
    }

    const sortIcon = (sortDirection: number) => {
        return sortDirection < 0 ? (
            <div style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faSortDown} size={'1x'} />
            </div>
        ) : (
            <div style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faSortUp} size={'1x'} />
            </div>
        )
    }

    const sortItemTemplate = (value: [string, SortingKeys]) => {
        let selected = sort.key === value[1]
        return (
            <SortItem
                key={value[0]}
                selected={selected}
                className="cursor-pointer"
                onClick={() => handleSortByKeyChange(value[1])}>
                <InnerItem selected={selected}>
                    {selected ? sortIcon(sort.sortDirection) : <></>}
                    {value[0]}
                </InnerItem>
            </SortItem>
        )
    }

    const [anchorSort, setAnchorSort] = React.useState<null | HTMLElement>(null)

    const handleSortMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorSort(event.currentTarget)
    }

    const handleSortMenuClose = () => {
        setAnchorSort(null)
    }

    const sortDefault: [string, SortingKeys][] = [['Name', 'name']]

    const sortBaseStats: [string, SortingKeys][] = [
        ['MAX HP', 'maxHp'],
        ['DODGE', 'dodge'],
        ['SPD', 'speed'],
        ['ACC MOD', 'accuracy'],
        ['CRIT', 'crit'],
        ['DMG', 'damage']
    ]

    const sortResistances: [string, SortingKeys][] = [
        ['Stun', 'stun'],
        ['Blight', 'blight'],
        ['Disease', 'disease'],
        ['Death Blow', 'deathBlow'],
        ['Move', 'move'],
        ['Bleed', 'bleed'],
        ['Debuff', 'debuff'],
        ['Trap', 'trap']
    ]

    return (
        <>
            <BottomButton className="cursor-pointer" index={0}>
                <BottomFilterSection onClick={handleOpenFilterModal}>
                    <FontAwesomeIcon icon={faFilter} size={'1x'} />
                </BottomFilterSection>
            </BottomButton>

            <BottomButton
                className="cursor-pointer"
                index={1}
                aria-controls="sort-button"
                aria-haspopup="true">
                <BottomFilterSection onClick={handleSortMenuOpen}>
                    <FontAwesomeIcon icon={faSort} size={'1x'} />
                </BottomFilterSection>
            </BottomButton>
            <Menu
                id="sort-button"
                anchorEl={anchorSort}
                keepMounted
                open={Boolean(anchorSort)}
                onClose={handleSortMenuClose}
                transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <LevelRefDisplay current={sort.levelRef} />
                <div key="level-ref" className="cursor-pointer">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'var(--font-primary)'
                        }}>
                        <Button onClick={() => handleSortLevelRefChange(-1)}>
                            <FontAwesomeIcon icon={faMinus} size={'1x'} />
                        </Button>
                        <div style={{ margin: '4px' }}>Level Ref</div>
                        <Button onClick={() => handleSortLevelRefChange(1)}>
                            <FontAwesomeIcon icon={faPlus} size={'1x'} />
                        </Button>
                    </div>
                </div>
                {sortBaseStats.map(sortItemTemplate)}
                <Divider />
                {sortResistances.map(sortItemTemplate)}
                <Divider />
                {sortDefault.map(sortItemTemplate)}
            </Menu>

            <Drawer
                open={modalFilterOpen}
                onClose={handleCloseFilterModal}
                anchor="bottom">
                <ModalCloseButton onClick={handleCloseFilterModal} />
                <DrawerContent>
                    <ModalCloseButton onClick={handleCloseFilterModal} />
                    <Typography variant="h2" style={{ margin: '0 1em 1em 0' }}>
                        Filters
                    </Typography>
                </DrawerContent>
            </Drawer>
        </>
    )
}
