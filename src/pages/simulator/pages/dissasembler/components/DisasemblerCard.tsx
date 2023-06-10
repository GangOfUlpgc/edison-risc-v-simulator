import { GridItem } from "@chakra-ui/react";
import { EncodedInstructionMeta } from "@vega/types/assambler";
import React from "react";

interface props {
  obj: {
    value: number;
    meta?: EncodedInstructionMeta;
  };
  address: number;
}

export default function DisasemblerCard({ address, obj }: props) {
  return (
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
        0x{address.toString(16).padStart(8, "0")}
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
        {obj?.meta?.type ?? "-"}
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
        0x{obj?.value.toString(16).padStart(8, "0") ?? "00000000"}
      </GridItem>
      <GridItem
        borderWidth={2}
        borderColor="transparent"
        borderLeftColor="gray.300"
        borderBottomColor="gray.300"
        colSpan={5}
        px="4"
        py="1"
        fontWeight="semibold"
        textColor="gray.800"
      >
        {obj?.meta?.instruction ?? "-"}
      </GridItem>
    </>
  );
}
