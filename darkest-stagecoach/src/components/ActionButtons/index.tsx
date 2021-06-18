import React from 'react'
import { Fade, Modal } from '@material-ui/core'
import { ModalWrapper } from '../../styles'
import { ClassModFilter, SortBy, SortingKeys } from '../../Types'
import {
    BottomButton,
    BottomFilterSection,
    InnerItem,
    MainModal,
    SortItem,
    SortItemsContainer
} from './styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFilter,
    faSort,
    faSortUp,
    faSortDown
} from '@fortawesome/free-solid-svg-icons'

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
    const [modalSortOpen, setModalSortOpen] = React.useState<boolean>(false)

    const handleOpenFilterModal = () => {
        setModalFilterOpen(true)
    }
    const handleCloseFilterModal = () => {
        setModalFilterOpen(false)
    }
    const handleOpenSortModal = () => {
        setModalSortOpen(true)
    }
    const handleCloseSortModal = () => {
        setModalSortOpen(false)
    }
    const handleSortByKeyChange = (sortKey: SortingKeys) => {
        let newSort: SortBy = {
            key: sortKey,
            levelRef: 0 /* TODO */,
            sortDirection:
                sort.key === sortKey
                    ? sort.sortDirection * -1
                    : sort.sortDirection
        }
        onSortChange(newSort)
    }

    const sortIcon = (sortDirection: number) => {
        return sortDirection < 0 ? (
            <div style={{ marginRight: '4px' }}>
                <FontAwesomeIcon icon={faSortDown} size={'1x'} />
            </div>
        ) : (
            <div style={{ marginRight: '4px' }}>
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
                <InnerItem>
                    {selected ? sortIcon(sort.sortDirection) : <></>}
                    {value[0]}
                </InnerItem>
            </SortItem>
        )
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
            <BottomButton className="cursor-pointer" index={1}>
                <BottomFilterSection onClick={handleOpenSortModal}>
                    <FontAwesomeIcon icon={faSort} size={'1x'} />
                </BottomFilterSection>
            </BottomButton>
            <Modal open={modalFilterOpen} onClose={handleCloseFilterModal}>
                <Fade in={modalFilterOpen} timeout={400} exit={false}>
                    <ModalWrapper
                        style={{
                            width: '80vw',
                            maxWidth: '1280px'
                        }}>
                        <MainModal>
                            <ModalCloseButton
                                onClick={handleCloseFilterModal}
                            />
                            <Typography variant="h2">Filter</Typography>
                        </MainModal>
                    </ModalWrapper>
                </Fade>
            </Modal>
            <Modal open={modalSortOpen} onClose={handleCloseSortModal}>
                <Fade in={modalSortOpen} timeout={400} exit={false}>
                    <ModalWrapper
                        style={{
                            width: '80vw',
                            maxWidth: '720px'
                        }}>
                        <MainModal>
                            <ModalCloseButton onClick={handleCloseSortModal} />
                            <Typography
                                variant="h2"
                                style={{ margin: '0 1em 1em 0' }}>
                                Sort
                            </Typography>
                            <SortItemsContainer>
                                {sortDefault.map(sortItemTemplate)}
                            </SortItemsContainer>
                            <Typography variant="h4">Base Stats</Typography>
                            <SortItemsContainer>
                                {sortBaseStats.map(sortItemTemplate)}
                            </SortItemsContainer>
                            <Typography variant="h4">Resistances</Typography>
                            <SortItemsContainer>
                                {sortResistances.map(sortItemTemplate)}
                            </SortItemsContainer>
                        </MainModal>
                    </ModalWrapper>
                </Fade>
            </Modal>
        </>
    )
}
