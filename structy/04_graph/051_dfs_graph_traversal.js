const depthFirstPrint = (graph, source) => {
    /*
        Iterative
    */
    // const stack = [ source ];

    // while (stack.length > 0) {
    //     const current = stack.pop();
    //     console.log(current);

    //     for (let neighbor of graph[current]) {
    //         stack.push(neighbor);
    //     }
    // }

    /*
        Recursive
    */
   console.log('source: ', source);
   for (let neighor of graph[source]) {
    depthFirstPrint(graph, neighor);
   }
}

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a'); // abdfce or acebdf
