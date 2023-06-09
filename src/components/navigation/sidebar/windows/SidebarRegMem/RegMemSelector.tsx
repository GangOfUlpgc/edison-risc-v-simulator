import { Box } from '@chakra-ui/react'
import React from 'react'
import RegistersCard from './RegistersCard'
import MemoryCard from './MemoryCard'
import { useUI } from '../../../../../storage/ui.storage'


interface props {
    name: string,
    window: "reg" | "mem",
}

function RegMemSelectorElement({ name, window }: props) {

    const ui = useUI()
    const isActive = ui.registerWindow === window

    return (
        <Box
            onClick={() => ui.setRegisterWindow(window)}
            bgColor={isActive ? "#F7B217" : "transparent"}
            textColor={isActive ? "white" : "gray.600"}
            display="flex"
            justifyContent="center"
            minW="6rem"
            py="0.4rem"
            px="3"
            cursor="pointer"
            fontWeight="semibold"
            borderRadius="lg"
            flexGrow="1"
        >
            {name}
        </Box>
    )
}


export default function RegMemSelector() {
    return (
        <Box
            display="flex"
            gap="4"
            bgColor="gray.200"
            px="1"
            borderRadius="xl"
            py="1"
            mx="2"
            justifyContent="center"
        >
            <RegMemSelectorElement window="reg" name="Registers" />
            <RegMemSelectorElement window="mem" name="Memory" />
        </Box>
    )
}
