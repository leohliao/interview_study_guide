/*

    Given an undirected graph in an adjacency list format (a map of every vertex to a list of all its neighboring vertices), determine whether or not said graph is a tree.

    Input: Undirected Graph as an Adjacency List (Map<int, int[]>)
    Output: Boolean

    Input:
        {
            0 : [1, 2, 3],
            1 : [0],
            2 : [0],
            3 : [0, 4],
            4 : [3]
        }
    Output: True

    Input:
        {
            0 : [1, 2, 3],
            1 : [0, 2],
            2 : [0, 1],
            3 : [0, 4],
            4 : [3]
        }

    Output: False

--- Constraints

- Time Complexity: O(V + E)
- Auxiliary Space Complexity: O(V + E)
- The graph `Vertex` has the following properties:
    - `value` : an integer
    - `edges` : a list which contains references to other vertices in the `Graph`
    - You may assume the values of the vertices will all be unique.


*/ 

function graphIsATree_dfs (graph) {
    // Edge case check if graph empty
    if (Object.keys(graph).length == 0) {
      return true;
    }
  
    let hasCycle = false;
    
    // Create visited set for DFS
    let visited = new Set();
    function dfs(node) {
      // add node to visited set
      visited.add(node);
  
      // iterate neighbors, check if >= 2 alr visited
      let visitCnt = 0;
      for (const neighbor of graph[node]) {
        // Is neighbor a cycle to itself
        if (neighbor === node) {
          hasCycle = true;
          return;
        }
        
        if (visited.has(neighbor)) {
          visitCnt++;
        }
        // Cycle b/c visiting > 1 time, terminate dfs
        if (visitCnt >= 2) {
          hasCycle = true;
          return;
        }
      }
  
      // no cycle (yet) proceed dfs on neighbors
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);  
        }
      }
    }
  
    // DFS from any node, checking for cycle
    dfs(Number(Object.keys(graph)[0]));
  
    // After DFS, check if visited has all nodes in graph
    const allVisited = visited.size == Object.keys(graph).length;
  
    return !hasCycle && allVisited;
}

function graphIsATree_bfs(graph) {
    
    

    /*
        No the right
    */ 
    // // instantiate visited = {}
    // const visited = {};

    // // Check the size of the graph
    // if (Object.keys(graph).length === 1) {
    //     return false;
    // }
    
    // // iterate the keys in graph
    // for (let i = 0; i < Object.keys(graph).length; i++) {
    //     const vertices = graph[i];

    //     // if the length of values is 0 return false - individual nodes
    //     if (vertices.length === 0) {
    //         return false;
    //     }
    //     // instantiate numOfVisited = 0
    //     let numOfVisited = 0;
    //     // iterate the value in each keys
    //     vertices.forEach(vertice => {
    //         // if the visited[value] numOfVisited++
    //         if (visited[vertice]) {
    //             numOfVisited++
    //         } else {
    //             visited[vertice] = true;
    //         }
    //     })

    //     // if numOfVisited > 2 return false
    //     if (numOfVisited >= 2) {
    //         return false;
    //     }

    // }
    
    // // return true
    // return true;
}
  
  // No cycle, all nodes connected
  let adjLst1 =  
  {
    0 : [1, 2, 3],
    1 : [0],
    2 : [0],
    3 : [0, 4],
    4 : [3]
  }
  
  // Cycle (between 0, 1, 2)
  let adjLst2 = 
  {
    0 : [1, 2, 3],
    1 : [0, 2],
    2 : [0, 1],
    3 : [0, 4],
    4 : [3]
  }
  
  // Disconnected node (5)
  let adjLst3 = 
  {
    0 : [1, 2, 3],
    1 : [0],
    2 : [0],
    3 : [0, 4],
    4 : [3],
    5 : []
  }
  
  // Self cycle (0 <--> 0)
  let adjLst4 = 
  {
    0 : [0]
  }
  
  let adjLst5 = {}
  
//   console.log(graphIsATree_dfs(adjLst1)); // true
//   console.log(graphIsATree_dfs(adjLst2)); // false
//   console.log(graphIsATree_dfs(adjLst3)); // false
//   console.log(graphIsATree_dfs(adjLst4)); // false
//   console.log(graphIsATree_dfs(adjLst5)); // true

  console.log(graphIsATree_bfs(adjLst1)); // true
  console.log(graphIsATree_bfs(adjLst2)); // false
  console.log(graphIsATree_bfs(adjLst3)); // false
  console.log(graphIsATree_bfs(adjLst4)); // false
  console.log(graphIsATree_bfs(adjLst5)); // true