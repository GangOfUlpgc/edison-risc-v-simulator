import { Box, Text } from '@chakra-ui/react'
import React from 'react'


interface props {
    name: string,
    value: string
}

function RegisterCardElement({ name, value }: props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            minW="6rem"
            flexGrow="1"
        >
            <Text textAlign="center" flexBasis="50%" textColor="gray.600" fontWeight="semibold">
                {name}
            </Text>
            <Text textAlign="center" flexBasis="50%" textColor="gray.600" fontWeight="semibold">
                {value}
            </Text>
        </Box>
    )

}


export default function RegistersCard() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            position="relative"
            overflow="scroll"
            gap="4"
            bgColor="white"
            px="1"
            borderRadius="xl"
            py="1"
            mx="2"
            mb="3"
            justifyContent="center"
        >
            <Box display="flex"
                justifyContent="center"
                minW="6rem"
                py="0.1rem"
                bgColor="gray.100"
                px="4"
                mx="1"
                my="2"
                fontWeight="semibold"
                borderRadius="lg"
                flexGrow="1"
            >
                <Text textAlign="center" flexBasis="50%" textColor="gray.600">
                    Name
                </Text>
                <Text textAlign="center" flexBasis="50%" textColor="gray.600">
                    Value
                </Text>
            </Box>
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />
            <RegisterCardElement name="x0" value="0x00000000" />

        </Box>
    )
}
