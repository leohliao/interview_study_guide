/*
    Impement Breadth First Search using a queue and while loop

    Input: {vertex} - the starting vertex (will always start at vertex A)
    Vertices have the following properties:
        id: the data stored in the vertex
        edges: a list of vertices connected to this vertex
    
    Output: {string} - a string with the IDs arranges in a breadth first manner
    
    INPUT: 
              C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G

    OUTPUT: 

    "ABCHEFGD"


    This order is one of the possible breadth-first paths. "ABHCEFGD" is also a valid breadth-first traversal, but be aware this will not match with the test expectation. To handle for this, make sure you work with the edges for a node in the order they appear in the node's edge list.

*/ 

/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. Vertex origin
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

function bfs(origin) {
    // Write your code here
    if (origin === null) {
        return "";
    }
    
    const queue = [];
    const visited = new Set();
    let result = [];
    
    queue.push(origin);
    visited.add(origin);
    
    while (queue.length > 0) {
        let current = queue.shift();
        let edges = current.edges;
        
        for (let x = 0; x < edges.length; x++) {
            let edge = edges[x];
            if (!visited.has(edge)) {
                queue.push(edge);
                visited.add(edge);
            } 
        }    
        
        result.push(current.id);
    }
    
    return result.join("");
}

function graphIsTree(graph) {
    if (graph.keys.length === 0) {
      return true;
    }
  
    let hasCycle = false;
  
    let visited = new Set();
  
    function dfs(node) {
      // add node to visited
      visited.add(node);
  
      let visitedCount = 0;
  
      // iterate through graph
      // i.e. if {0: [1,2,0]}
      for (const neighbor of graph[node]) {
        // if neighbor is a cycle to itself
        if (neighbor === node) {
          hasCycle = true;
          return false;
        }
  
        // if we've visited the neighbor, increase our visited count
        if (visited.has(neighbor)) {
          visitedCount++;
        }  
  
        // if we've visited more than once, it has a cycle
        if (visitedCount >= 2) {
          hasCycle = true;
          return false;
        }
      }
  
      if (!hasCycle) {
        for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }
      
    }
  
    // dfs on first node of the graph
    dfs(Object.keys(graph)[0]);
    if (!hasCycle) {
      return true;
    }
}
