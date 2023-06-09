import { Box } from "@chakra-ui/react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default function Adder() {
  return (
    <Box backgroundColor="red">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </Box>
  );
}
