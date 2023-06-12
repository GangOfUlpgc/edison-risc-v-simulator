import React, { useState } from "react";
import { rv32i } from "../../../../cpus/riscv-rv32i";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import DisasemblerCard from "./components/DisasemblerCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DissasemblerPage() {
  const rom = rv32i.useMem((state) => state.rom);
  const [items, setItems] = useState(Array.from({ length: 70 }));
  const showMoreAddress = () => {
    setItems((prevItems) => prevItems.concat(Array.from({ length: 20 })));
  };

  return (
    <Box
      height="100%"
      borderRadius="xl"
      bgColor="gray.100"
      position="relative"
      display="flex"
      flexDir="column"
    >
      <Header></Header>

      <Box
        id="registerContainer"
        height="100%"
        overflow="auto"
        borderWidth={2}
        borderColor="gray.300"
        borderTopWidth={0}
        borderRadius="lg"
        borderTopRadius="none"
        backgroundColor="white"
      >
        <InfiniteScroll
          scrollableTarget="registerContainer"
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(8, 1fr)",
          }}
          dataLength={items.length}
          next={showMoreAddress}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((_, index) => (
            <DisasemblerCard
              key={index}
              address={index * 4}
              obj={rom[index * 4]}
            />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}
