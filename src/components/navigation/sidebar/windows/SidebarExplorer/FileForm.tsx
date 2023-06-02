import React, { useRef } from "react";
import { Formik } from "formik";
import { useFileStorage } from "../../../../../storage/file.storage";
import { Box, Input } from "@chakra-ui/react";
import { VscFile } from "react-icons/vsc";

export default function FileForm() {
  const addFile = useFileStorage((state) => state.addFile);
  const [active, setActive] = React.useState(0);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box px="0.5rem" mt="0.4rem">
      {!active ? (
        <Box
          color="gray.500"
          fontWeight="regular"
          cursor="pointer"
          onClick={() => {
            setActive(1);
            setTimeout(() => {
              ref.current?.focus();
            }, 100);
          }}
        >
          + Add file
        </Box>
      ) : (
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values) => {
            addFile(values.name);
            setActive(0);
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
                  setActive(0);
                }}
                ref={ref}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setActive(0);
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
