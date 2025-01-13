export const applyForceDirectedLayout = (nodes, edges) => {
    const nodePositions = {};
  
    // Basic parameters for the simulation
    const repulsionStrength = 500;
    const attractionStrength = 0.1;
  
    // Initialize node positions randomly
    nodes.forEach((node) => {
      nodePositions[node.id] = {
        x: Math.random() * 500,
        y: Math.random() * 500,
      };
    });
  
    // Basic physics loop (this can be optimized with more advanced algorithms)
    const simulate = () => {
      let forces = {};
      nodes.forEach((node) => {
        forces[node.id] = { x: 0, y: 0 };
      });
  
      // Apply repulsion forces between all nodes
      nodes.forEach((node1) => {
        nodes.forEach((node2) => {
          if (node1.id !== node2.id) {
            const dx = nodePositions[node1.id].x - nodePositions[node2.id].x;
            const dy = nodePositions[node1.id].y - nodePositions[node2.id].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = repulsionStrength / (distance * distance);
            forces[node1.id].x += force * (dx / distance);
            forces[node1.id].y += force * (dy / distance);
          }
        });
      });
  
      // Apply attraction forces for connected nodes
      edges.forEach((edge) => {
        const sourceNode = nodes.find((node) => node.id === edge.source);
        const targetNode = nodes.find((node) => node.id === edge.target);
        const dx = nodePositions[sourceNode.id].x - nodePositions[targetNode.id].x;
        const dy = nodePositions[sourceNode.id].y - nodePositions[targetNode.id].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = attractionStrength * (distance - 100); // 100px is the ideal distance
        forces[sourceNode.id].x -= force * (dx / distance);
        forces[sourceNode.id].y -= force * (dy / distance);
        forces[targetNode.id].x += force * (dx / distance);
        forces[targetNode.id].y += force * (dy / distance);
      });
  
      // Update node positions based on calculated forces
      nodes.forEach((node) => {
        nodePositions[node.id].x += forces[node.id].x;
        nodePositions[node.id].y += forces[node.id].y;
      });
  
      // Apply some damping
      Object.keys(forces).forEach((key) => {
        forces[key].x *= 0.95;
        forces[key].y *= 0.95;
      });
  
      // Repeat the simulation
      requestAnimationFrame(simulate);
    };
  
    simulate();
    return nodePositions;
  };