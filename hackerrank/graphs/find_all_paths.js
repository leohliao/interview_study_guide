/*
    Find all paths 
    Given a starting vertex, and a string destination, return all valid paths for a given source and destination

    
    Input:  {vertex} origin - the starting vertex
            {integer} destination - integer value of the destination vertex
    Output: {string array} result - a sorted array of all paths from the origin to the destination
    
    INPUT: 
                C
                /   \
        A --- B       E  --- F --- D
                \   /   \   /
                H       G

    Origin: (A)

    Destination: D

    OUTPUT: 

    ["ABCEFD", "ABCEGFD", "ABHEFD", "ABHEGFD"]

    EXPLANATION: 

    There are four paths from vertex A to vertex D. These four paths are listed above and then sorted within their array. 

    Notes:
    - Contrary to breadth-first traversal, to find all paths, it is advised to use depth-first traversal implemented with recursions.
    - There is no different between the dashed lines and forward/back slashes when it comes to defining the connections between graph nodes.


*/ 
/*
 * Complete the 'find_all_paths' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. Vertex origin
 *  2. String destination
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 */

function find_all_paths(origin, destination) {
    // Time Complexity: O(V!)
    // Time Complexity: O(V^V)

    const result = [];
    const visited = new Set();

    const traverse = (current, path) => {
        // base 
        if (visited.has(current)) {
            return;
        }
        if (current.id === destination) {
            result.push(path.join(''));
            return;
        }

        const edges = current.edges;
        // before traveling
        visited.add(current);

        for (let edge of edges) {
            path.push(edge.id);
            traverse(edge, path);
            path.pop();

            // OR
            // but this is performance poor
            // traverse(edge, path.concat(edge.id));
        }
        visited.delete(current)
    }

    traverse(origin, [origin.id])
    result.sort();
    return result;


}