import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, useMatch } from "react-router-dom";

interface props {
  href: string;
  name: string;
}

function HeaderSelectorElement({ href, name }: props) {
  const active = useMatch(href);

  return (
    <Box
      as={Link}
      to={href}
      cursor="pointer"
      fontWeight="semibold"
      bgColor={active ? "#F7B217" : "transparent"}
      textColor={active ? "white" : "gray.600"}
      borderRadius="lg"
      display="flex"
      minW="6rem"
      py="0.4rem"
      px="3"
      justifyContent="center"
    >
      {name}
    </Box>
  );
}

export default function HeaderSelector() {
  return (
    <Box
      display="flex"
      gap="4"
      bgColor="gray.200"
      px="1"
      borderRadius="xl"
      py="1"
    >
      <HeaderSelectorElement name="Code" href="" />
      <HeaderSelectorElement name="Dissasembly" href="dissasembly" />
      <HeaderSelectorElement name="Datapath" href="datapath" />
    </Box>
  );
}
