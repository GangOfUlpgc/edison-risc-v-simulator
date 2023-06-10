import React, { useState } from "react";
import { rv32i } from "../../../../cpus/riscv-rv32i";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function DissasemblerPage() {
  return (
    <Box
      height="100%"
      borderRadius="xl"
      bgColor="gray.100"
      position="relative"
      display="flex"
      flexDir="column"
    >
      <Grid width="100%" templateColumns="repeat(8, 1fr)">
        <GridItem
          fontWeight="semibold"
          colSpan={1}
          bg="gray.200"
          padding="1"
          borderTopLeftRadius="xl"
          borderWidth={2}
          borderRightWidth={0}
          borderColor="gray.300"
          px="4"
        >
          Address
        </GridItem>
        <GridItem
          fontWeight="semibold"
          colSpan={1}
          bg="gray.200"
          padding="1"
          px="4"
          borderWidth={2}
          borderColor="gray.300"
        >
          Opcode
        </GridItem>
        <GridItem
          fontWeight="semibold"
          colSpan={6}
          bg="gray.200"
          padding="1"
          px="4"
          borderWidth={2}
          borderLeftWidth={0}
          borderTopRightRadius="xl"
          borderColor="gray.300"
        >
          Dissasembly
        </GridItem>
      </Grid>
      <Grid
        width="100%"
        templateColumns="repeat(8, 1fr)"
        overflow="auto"
        borderWidth={2}
        borderColor="gray.300"
        borderTopWidth={0}
        borderRadius="lg"
        borderTopRadius="none"
        backgroundColor="white"
      >
        {new Array(40).fill(0).map(() => (
          <>
            <GridItem
              px="4"
              py="1"
              fontWeight="semibold"
              textColor="gray.800"
              borderWidth={2}
              colSpan={1}
              borderColor="transparent"
              borderBottomColor="gray.300"
              backgroundColor="gray.100"
            >
              0x00FF8000
            </GridItem>
            <GridItem
              backgroundColor="gray.100"
              borderWidth={2}
              borderColor="transparent"
              borderLeftColor="gray.300"
              borderBottomColor="gray.300"
              colSpan={1}
              px="4"
              py="1"
              fontWeight="semibold"
              textColor="gray.800"
            >
              00034
            </GridItem>
            <GridItem
              borderWidth={2}
              borderColor="transparent"
              borderLeftColor="gray.300"
              borderBottomColor="gray.300"
              colSpan={6}
              px="4"
              py="1"
              fontWeight="semibold"
              textColor="gray.800"
            >
              .text
              <br />
              .global main
              <br />
              addi x0, x0, 1
            </GridItem>
          </>
        ))}
      </Grid>
    </Box>
  );
}
