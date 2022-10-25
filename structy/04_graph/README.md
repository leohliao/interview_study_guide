# Graph
- `graph` = `nodes` (vertex) + `edges`
- `neighbor`: adjacent nodes where is connected by edges

## directed graph vs undirected graph
### directed graph:
- 1 way traversal
### undirected graph:
- 2 way traversal 

## Ways to represent graphs
- Adjacency List
```javascript
/*
    a -> c
    |    |
    v    v
    b <- e
    |
    v
    d <- f

*/

{
    a: [b, c],
    b: [d],
    c: [e],
    d: [],
    e: [b],
    f: [d]
}
/*
 Depth first traversal:
 a -> b -> d
 a -> c -> e -> b -> d


 Breadth first traversal:
 a -> b -> c -> d -> e

*/ 
  
```

## DFS Traversal
- Stack - LIFO

## BFS Traversal
- Queue

