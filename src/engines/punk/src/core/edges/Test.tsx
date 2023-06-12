import React from "react";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "reactflow";

interface point {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const createPath = (
  offsetx: number,
  offsety: number,
  { sourceX, sourceY, targetX, targetY }: point
) => `M ${sourceX} ${sourceY}, L ${sourceX + offsetx} ${sourceY}, L ${
  sourceX + offsetx
} ${sourceY + offsety}, L ${targetX - offsetx} ${sourceY + offsety}, L ${
  targetX - offsetx
} ${targetY}, ${targetX} ${targetY})
  `;

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const path = createPath(data.offsetx, data.offsety, {
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge path={path} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        ></div>
      </EdgeLabelRenderer>
    </>
  );
}
