import { Box } from '@chakra-ui/react'
import React from 'react'

export default function SegmentedBar() {
    return (
        <Box display="flex" width="100%" flexDirection="row" borderRadius="10px" mb="2" color="gray.600">
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderLeftRadius="10px" bgColor="#FEFCBF">Fetch</Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" bgColor="#bee3f8">Decode</Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" bgColor="#C6F6D5">Execute</Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" bgColor="#E9D8FD" >Memory</Box>
            <Box justifyContent="center" textAlign="center" flexBasis="25%" borderRightRadius="10px" bgColor="#FED7D7" >WriteBack</Box>
        </Box>
    )
}
