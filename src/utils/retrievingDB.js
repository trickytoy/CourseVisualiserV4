export default function retrievingDB(courseData) {
    const nodes = [];
    const edges = [];

    const nodeSet = new Set();

    const position = { x: 0, y: 0 };
    const edgeType = 'smoothstep';

    let edgeCount = 0

    courseData.forEach(({ node1, relationship, node2 }) => {
        console.log({ node1, relationship, node2 })
        // Add node1 if it doesn't already exist
        if (!nodeSet.has(node1.id)) {
        if (node1.id === 0 || node1.id === 1 || node1.id === 2 || node1.id === 3 || node1.id === 4 || node1.id === 5 || node1.id === 6 ) {
            nodes.push({
                id: node1.id.toString(),
                data: { label: node1.name},
                position,
            });
        } else {
            nodes.push({
                id: node1.id.toString(),
                data: { label: node1.courseCode, title: node1.courseTitle, Description: node1.courseDesc, Condition: node1.courseCondition},
                position,

            })
        }
        nodeSet.add(node1.id);
        }

        // Add node2 if it doesn't already exist
        if (!nodeSet.has(node2.id)) {
            if (node2.id === 0 || node2.id === 1 || node2.id === 2 || node2.id === 3 || node2.id === 4 || node2.id === 5 || node2.id === 6 ) {
                nodes.push({
                    id: node2.id.toString(),
                    data: { label: node2.name},
                    position,
                });
            } else {
                nodes.push({
                    id: node2.id.toString(),
                    data: { label: node2.courseCode, title: node2.courseTitle, Description: node2.courseDesc, Condition: node2.courseCondition},
                    position,

                })
            }
        nodeSet.add(node2.id);
        }

        // Add the edge
        edges.push({ id: edgeCount.toString(), source: node1.id.toString(), target: node2.id.toString(), type: edgeType, animated: true})
        edgeCount = edgeCount + 1
    });

    return { nodes, edges };
};