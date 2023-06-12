import {
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverProps,
} from "@chakra-ui/react";
import React from "react";

interface props extends PopoverProps {
  children: React.ReactNode;
  value: string;
}

export default function ValuePopover({
  children,
  value,
  ...popoverprops
}: props) {
  return (
    <Popover isOpen={true} placement="right" {...popoverprops}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width="fit-content" zIndex="modal">
        <Text px="2" fontSize="10px" whiteSpace="pre-line" >
          {value}
        </Text>
      </PopoverContent>
    </Popover>
  );
}
