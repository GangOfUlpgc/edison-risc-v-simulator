import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import { useFileStorage } from "../../../../../storage/file.storage";
import { Box, Input } from "@chakra-ui/react";
import { VscFile } from "react-icons/vsc";
import { useUI } from "../../../../../storage/ui.storage";

export default function FileForm() {
  const addFile = useFileStorage((state) => state.addFile);
  const { addingFile, setAddingFile } = useUI();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addingFile)
      setTimeout(() => {
        ref.current?.focus();
      }, 100);
  }, [addingFile]);

  return (
    <Box px="0.5rem" mt="0.4rem">
      {!addingFile ? (
        <Box
          color="gray.500"
          fontWeight="regular"
          cursor="pointer"
          onClick={() => {
            setAddingFile(true);
          }}
        >
          + Add file
        </Box>
      ) : (
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values) => {
            addFile(values.name);
            setAddingFile(false);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Box
              display="flex"
              alignItems="center"
              textColor="gray.500"
              fontSize="xl"
              gap="0.5rem"
            >
              <VscFile />
              <Input
                size="xs"
                onBlur={() => {
                  setAddingFile(false);
                }}
                ref={ref}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setAddingFile(false);
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
