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
  offsetx1: number,
  { sourceX, sourceY, targetX, targetY }: point
) => `M ${sourceX} ${sourceY}, L ${sourceX + offsetx1} ${sourceY}, L ${
  sourceX + offsetx1
} ${sourceY}, L ${sourceX + offsetx1} ${targetY},
L ${targetX} ${targetY}
  `;

export default function Horizontal({
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

  const path = createPath(data.offsetx, {
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
