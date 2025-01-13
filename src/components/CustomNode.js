import React, { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';

const CustomNode = ({ id, data }) => {
  const { setEdges } = useReactFlow();

  // Highlight connected edges when hovering over the node
  const onMouseEnter = useCallback(() => {
    setEdges((edges) =>
      edges.map((edge) =>
        edge.source === id || edge.target === id
          ? { ...edge, style: { stroke: 'blue', strokeWidth: 3 } }
          : edge
      )
    );
  }, [id, setEdges]);

  // Reset edge styles when mouse leaves the node
  const onMouseLeave = useCallback(() => {
    setEdges((edges) =>
      edges.map((edge) => ({
        ...edge,
        style: { ...edge.style, stroke: '#ddd', strokeWidth: 1 }, // Default edge styles
      }))
    );
  }, [setEdges]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <strong>{data.label}</strong>
    </div>
  );
};

export default CustomNode;
