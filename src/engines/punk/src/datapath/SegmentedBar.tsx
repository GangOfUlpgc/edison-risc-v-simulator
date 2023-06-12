import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function SegmentedBar() {
    return (
        <Box display="flex" width="100%" flexDirection="row" borderRadius="10px" bgColor="gray.100" mb="1" color="gray.600">
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRadius="10px" margin="1" bgColor="#FEFCBF">
                <Text>Fetch</Text>
                <Text>0x00000000</Text>
            </Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRadius="10px" margin="1" bgColor="#bee3f8">
                <Text>Decode</Text>
                <Text>0x00000000</Text>
            </Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRadius="10px" margin="1" bgColor="#C6F6D5">
                <Text>Execute</Text>
                <Text>0x00000000</Text>
            </Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRadius="10px" margin="1" bgColor="#E9D8FD" >
                <Text>Memory</Text>
                <Text>0x00000000</Text>
            </Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRadius="10px" margin="1" bgColor="#FED7D7" >
                <Text>WriteBack</Text>
                <Text>0x00000000</Text>
            </Box>
        </Box>
    )
}
