import React from "react";
import { IFile, useFileStorage } from "../../../../../storage/file.storage";
import { Box, Icon } from "@chakra-ui/react";
import { LuBinary } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";

interface props {
  obj: IFile;
}

export default function FileCard({ obj }: props) {
  const fileManager = useFileStorage();
  const isCurrentFile = fileManager.currentFile === obj.id;

  return (
    <Box
      onClick={() => fileManager.setCurrentFile(obj.id)}
      cursor="pointer"
      display="flex"
      alignItems="center"
      gap="3px"
      color="gray.600"
      fontSize="lg"
      px="0.6rem"
      py="0.3rem"
      justifyContent="space-between"
      borderRadius="lg"
      bgColor={isCurrentFile ? "gray.200" : "transparent"}
      fontWeight={isCurrentFile ? "medium" : "normal"}
      _hover={{ color: "gray.800", bgColor: "gray.200" }}
      role="group"
    >
      <Box display="flex" alignItems="center" gap="3px">
        <Icon color="#F7B217" as={LuBinary}></Icon>
        <Box>{obj.name}</Box>
      </Box>
      <Box
        fontSize="sm"
        alignItems="center"
        display="none"
        _groupHover={{ display: "flex" }}
        p="1"
        borderRadius="md"
        _hover={{ color: "gray.800", bgColor: "gray.300" }}
        onClick={() => fileManager.removeFile(obj.id)}
      >
        <Icon color="gray.500" as={FaTrash}></Icon>
      </Box>
    </Box>
  );
}
