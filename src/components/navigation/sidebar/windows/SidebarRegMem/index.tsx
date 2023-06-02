import { Box } from '@chakra-ui/react'
import React from 'react'
import RegMemSelector from './RegMemSelector'
import { useUI } from '../../../../../storage/ui.storage'
import RegistersCard from './RegistersCard'
import MemoryCard from './MemoryCard'


const regMemNav: { [name: string]: React.ReactNode } = {
    reg: <RegistersCard />,
    mem: <MemoryCard />
}


export default function SidebarRegMem() {

    const window = useUI((state) => state.registerWindow)

    return (
        <Box p="3" display="flex" flexDir="column" gap="6px" height="100%" overflow="hidden">
            <Box>
                <RegMemSelector></RegMemSelector>
            </Box>
            <Box height="90%">
                {regMemNav[window]}
            </Box>

        </Box>


    )
}
