import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { rv32i } from "../../../../../cpus";

interface props {
  name: string;
  value: string;
}

function RegisterCardElement({ name, value }: props) {
  return (
    <Box display="flex" justifyContent="center" minW="6rem" flexGrow="1">
      <Text
        textAlign="center"
        flexBasis="50%"
        textColor="gray.600"
        fontWeight="semibold"
      >
        {name}
      </Text>
      <Text
        textAlign="center"
        flexBasis="50%"
        textColor="gray.600"
        fontWeight="semibold"
      >
        0x{value}
      </Text>
    </Box>
  );
}

export default function RegistersCard() {
  const regs = rv32i.useMem((state) => state.registers);

  return (
    <Box
      gap="4"
      height="100%"
      bgColor="white"
      px="1"
      borderRadius="xl"
      py="1"
      mx="2"
      mb="3"
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="center"
        py="0.1rem"
        bgColor="gray.100"
        px="4"
        mx="1"
        my="2"
        fontWeight="semibold"
        borderRadius="lg"
      >
        <Text textAlign="center" flexBasis="50%" textColor="gray.600">
          Name
        </Text>
        <Text textAlign="center" flexBasis="50%" textColor="gray.600">
          Value
        </Text>
      </Box>
      <Box height="95%" overflow="auto" display="flex" gap={2} flexDir="column">
        {regs.map((x, i) => (
          <RegisterCardElement
            name={"x" + i}
            value={x.toString(16).padStart(8, "0")}
          />
        ))}
      </Box>
    </Box>
  );
}
