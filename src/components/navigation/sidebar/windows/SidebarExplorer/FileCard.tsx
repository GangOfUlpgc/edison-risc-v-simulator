import React, { useEffect, useRef } from "react";
import { IFile, useFileStorage } from "../../../../../storage/file.storage";
import { Box, Icon, Input } from "@chakra-ui/react";
import { LuBinary } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { Formik } from "formik";

interface props {
  obj: IFile;
}

export default function FileCard({ obj }: props) {
  const fileManager = useFileStorage();
  const isCurrentFile = fileManager.currentFile === obj.id;
  const [editName, setEditName] = React.useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const renameFile = useFileStorage((state) => state.renameFile);

  useEffect(() => {
    if (editName)
      setTimeout(() => {
        ref.current?.focus();
        ref.current?.select();
      }, 100);
  }, [editName]);

  return (
    <Box
      onDoubleClick={() => setEditName(true)}
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
      {!editName ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="full"
        >
          <Box display="flex" alignItems="center" gap="3px">
            {" "}
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
      ) : (
        <Formik
          initialValues={{ name: obj.name }}
          onSubmit={(values) => {
            renameFile(obj.id, values.name);
            setEditName(false);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              textColor="gray.500"
              fontSize="xl"
              gap="0.5rem"
            >
              <Input
                border="0px"
                borderColor="transparent"
                outline="none"
                outlineColor="transparent"
                width="100%"
                fontSize="md"
                size="xs"
                onBlur={() => {
                  setEditName(false);
                }}
                ref={ref}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setEditName(false);
                  if (event.key === "Enter") handleSubmit();
                }}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Box>
          )}
        </Formik>
      )}
    </Box>
  );
}
