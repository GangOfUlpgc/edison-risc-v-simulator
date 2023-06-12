import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Header() {
  return (
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
        colSpan={1}
        bg="gray.200"
        padding="1"
        px="4"
        borderWidth={2}
        borderLeftWidth={0}
        borderColor="gray.300"
      >
        Decoded
      </GridItem>
      <GridItem
        fontWeight="semibold"
        colSpan={5}
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
  );
}
