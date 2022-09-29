/*

    320 - Shortest Route

    Given an unweighted, undirected graph which represents a metro map as follows

    * vertices are stations
    * edges are the path between two stations


    Given a start station and ending station, determine the minimum number of stops that must be made to get to the destination.

    ```
    Input: A Graph (unweighted/undirected), a starting Vertex, and an ending Vertex
    Output: Integer
    ```
    # Example
    ```
    Input: The graph represented below, Vertex A, Vertex F
    ```
    ![Shortest Route](http://res.cloudinary.com/outco-io/image/upload/v1520909723/ShortestRoute.png)
    ```
    Output: 2 Stops (From A stop at C, and then stop at F)
    ```

    # Constraints

    ```
    Time Complexity: O(V + E) where V is the number of Vertices and E is the number of Edges
    Auxiliary Space Complexity: O(V)
    ```

    A graph `Vertex` instance has the following properties:
    * `value` : a string
    *	`edges` : a list which contains references to other vertices in the Graph

    The graph has a list of all the vertices: `Graph.vertices`

    The `Vertex` values are all unique
*/ 

const shortestPathDfs = (startNode, stopNode) => {
    const previous = new Map();
    let shortestDistance = -1;
    const dfs = (currentNode, depth) => {
      if (currentNode === stopNode) {
        shortestDistance = depth;
      } else {
        for (let neighbour of adjacencyList.get(currentNode)) {
          previous.set(neighbour, currentNode);
          dfs(neighbour, depth + 1);
        }
      }
    };
    dfs(startNode, 0);
    return { shortestDistance, previous };
  };