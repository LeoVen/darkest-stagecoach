import React from 'react'
import { Fade, Modal } from '@material-ui/core'
import { ModalWrapper } from '../../styles'
import { ClassModFilter, SortBy, SortingKeys } from '../../Types'
import {
    BottomButton,
    BottomFilterSection,
    MainModal,
    SortItem,
    SortItemsContainer
} from './styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons'

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
            sortDirection: 1 /* TODO */
        }
        onSortChange(newSort)
    }

    const sortItemTemplate = (value: [string, SortingKeys]) => {
        return (
            <SortItem
                key={value[0]}
                selected={sort.key === value[1]}
                className="cursor-pointer"
                onClick={() => handleSortByKeyChange(value[1])}>
                {value[0]}
            </SortItem>
        )
    }

    const sortItems: [string, SortingKeys][] = [
        ['Name', 'name'],
        ['MAX HP', 'maxHp'],
        ['DODGE', 'dodge'],
        ['SPD', 'speed'],
        ['ACC MOD', 'accuracy'],
        ['CRIT', 'crit'],
        ['DMG', 'damage']
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
                                {sortItems.map(sortItemTemplate)}
                            </SortItemsContainer>
                        </MainModal>
                    </ModalWrapper>
                </Fade>
            </Modal>
        </>
    )
}
