import { Box } from "@chakra-ui/react";
import React from "react";
import { useFileStorage } from "../../../../../storage/file.storage";
import FileCard from "./FileCard";
import FileForm from "./FileForm";

export default function SidebarExplorer() {
  const fileManager = useFileStorage();

  return (
    <Box p="3" display="flex" flexDir="column" gap="6px">
      {fileManager.files.map((file) => (
        <FileCard key={file.id} obj={file} />
      ))}

      <FileForm></FileForm>
    </Box>
  );
}
