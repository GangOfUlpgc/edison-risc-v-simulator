import React, { useState } from "react";
import { rv32i } from "../../../../cpus/riscv-rv32i";
import { Box, Text } from "@chakra-ui/react";

interface props {
  address: number,
}


function DissasemblerElement({ address }: props) {

  return (
    <Box
      display="flex"
      justifyContent="center"
      minW="6rem"
      py="0.1rem"
      bgColor="gray.100"
      px="4"
      mx="1"
      my="2"
      fontWeight="semibold"
      borderRadius="lg"
    >
      <Text textAlign="center" flexBasis="15%" textColor="gray.600">
        {address}
      </Text>
      <Text textAlign="center" flexBasis="15%" textColor="gray.600">
        asdasd
      </Text>
      <Text textAlign="center" flexBasis="70%" textColor="gray.600">
        asdasd
      </Text>
    </Box>
  )
}


export default function DissasemblerPage() {
  const rom = rv32i.useMem((state) => state.rom);
  const state = rv32i.useState();
  console.log(JSON.stringify)

  const [items, setItems] = useState(Array.from({ length: 70 }));
  const showMoreAddress = () => {
    setItems((prevItems) => prevItems.concat(Array.from({ length: 20 })));
  };
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      gap="4"
      bgColor="white"
      px="1"
      borderRadius="xl"
      py="1"
      mx="2"
      mb="3"
    >
      <Box
        display="flex"
        justifyContent="center"
        minW="6rem"
        py="0.1rem"
        bgColor="gray.100"
        px="4"
        mx="1"
        my="2"
        fontWeight="semibold"
        borderRadius="lg"
      >
        <Text textAlign="center" flexBasis="15%" textColor="gray.600">
          Address
        </Text>
        <Text textAlign="center" flexBasis="15%" textColor="gray.600">
          Opcode
        </Text>
        <Text textAlign="center" flexBasis="70%" textColor="gray.600">
          Instruction
        </Text>
      </Box>
      <Box
        id="registerContainer"
        display="flex"
        flexDirection="column"
        overflow="auto"
      >
        <pre style={{ maxWidth: "100px" }}>{JSON.stringify(rom)}</pre>
        <pre style={{ maxWidth: "100px" }}>{JSON.stringify(state)}</pre>

      </Box>
    </Box>
  );
}
