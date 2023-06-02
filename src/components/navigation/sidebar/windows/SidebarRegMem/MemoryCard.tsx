import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCPUMem } from "../../../../../storage/cpu.storage";

interface props {
  address: number;
  value: string;
}

function MemoryCardElement({ address, value }: props) {
  const { ram } = useCPUMem();

  return (
    <Box display="flex" justifyContent="center" minW="6rem" flexGrow="1">
      <Text
        textAlign="center"
        flexBasis="50%"
        textColor="gray.600"
        fontWeight="semibold"
      >
        0x${address.toString(16).padStart(8, "0")}
      </Text>
      <Text
        textAlign="center"
        flexBasis="50%"
        textColor="gray.600"
        fontWeight="semibold"
      >
        add x1, x1, x2
      </Text>
    </Box>
  );
}

export default function MemoryCard() {
  const [items, setItems] = useState(Array.from({ length: 70 }));
  const showMoreAddress = () => {
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 20 })));
    }, 200);
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
        flexGrow="1"
      >
        <Text textAlign="center" flexBasis="50%" textColor="gray.600">
          Address
        </Text>
        <Text textAlign="center" flexBasis="50%" textColor="gray.600">
          Instruction
        </Text>
      </Box>
      <Box
        id="registerContainer"
        display="flex"
        flexDirection="column"
        overflow="auto"
      >
        <InfiniteScroll
          scrollableTarget="registerContainer"
          dataLength={items.length}
          next={showMoreAddress}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((item, index) => (
            <MemoryCardElement
              key={index}
              address={index}
              value="add x1, x0, x1"
            />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}
