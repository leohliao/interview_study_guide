// Exponential runtime
// time = O(k^n)
// because the solution is redundant

const minStepsToOne = (n) => {
    
    const traverse = (current) => {
        if (current === 1) { 
            return 0;
        }

        // subtract 1 {}
        let option = traverse(current - 1);
        // divided by 3
        if (current % 3 === 0) {
            let divide3 = traverse(current/3);
            option = Math.min(option, divide3);
        }
        // divided by 2
        if (current % 2 === 0) {
            let divide2 = traverse(current/2);
            option = Math.min(option, divide2)
        }
        
        // 
        return option + 1;
    }


    return traverse(n);
}

// Better solution
// Use memoization (uses cache to store operations)
// Memoization - Top Button approach
// Linear O(n)
const minStepsToOneMemo = (n) => {
    const cache = {};
    const traverse = (current) => {
        if (current in cache) {
            return cache[current];
        }

        if (current === 1) { 
            return 0;
        }

        // subtract 1 {}
        let option = traverse(current - 1);
        // divided by 3
        if (current % 3 === 0) {
            let divide3 = traverse(current/3);
            option = Math.min(option, divide3);
        }
        // divided by 2
        if (current % 2 === 0) {
            let divide2 = traverse(current/2);
            option = Math.min(option, divide2)
        }
        
        cache[current] = option + 1;
        return option + 1;
    }


    return traverse(n);
}


// Tabulation - Bottom up approach
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// [, 0, 1, 1, 2, 3, 2, 3, 3, 2,  3 ]
// Linear O(n)
// You can make the table persistant to improve the speed
const minStepsToOneTabulation = (n) => {
    const table = new Array(n + 1);

    table[1] = 0;
    for (let i = 2; i < table.length; i++) {
        // subtract 1 {}
        let option = table[i - 1];
        // divided by 3
        if (i % 3 === 0) {
            let divide3 = table[i/3];
            option = Math.min(option, divide3);
        }
        // divided by 2
        if (i % 2 === 0) {
            let divide2 = table[i/2];
            option = Math.min(option, divide2)
        }
        
        table[i] = option + 1;
    }
    return table[n];

}

console.time("Recursion: ")
console.log(minStepsToOne(100));
console.timeEnd("Recursion: ")

console.time("Recursion: ")
console.log(minStepsToOne(200));
console.timeEnd("Recursion: ")

console.time("Recursion: ")
console.log(minStepsToOne(300));
console.timeEnd("Recursion: ")

console.time("RecursionMemo: ")
console.log(minStepsToOneMemo(300));
console.timeEnd("RecursionMemo: ")

console.time("Recursion: ")
console.log(minStepsToOne(400));
console.timeEnd("Recursion: ")

console.time("RecursionMemo: ")
console.log(minStepsToOneMemo(400));
console.timeEnd("RecursionMemo: ")

console.time("RecursionTabulation: ")
console.log(minStepsToOneTabulation(400));
console.timeEnd("RecursionTabulation: ")

// When being asked: what's the best way to solve this problem
// Answer: Should be "it depends"

// Ron's answer
// https://replit.com/@vokoshyv/ScarceThisDecimal#index.js
// const minStepsToOne = (n) => {

//     const traverse = (current) => {
//       if (current === 1) {
//         return 0;
//       }
  
//       // subtract 1
//       let option = traverse(current - 1);
  
//       // divide by 3
//       if (current % 3 === 0) {
//         let divide3 = traverse(current / 3);
//         option = Math.min(option, divide3);
//       }
  
//       // divide by 2
//       if (current % 2 === 0) {
//         let divide2 = traverse(current / 2);
//         option = Math.min(option, divide2);
//       }
  
//       return option + 1;
//     }
  
//     return traverse(n);
//   }
  
//   // 1) Create cache 
//   // 2) Check cache 
//   // 3) Write to cache 
  
//   const cache = {};
  
//   const minStepsToOneMemo = (n) => {
//     const traverse = (current) => {
//       if (current in cache) {
//         return cache[current];
//       }
//       if (current === 1) {
//         return 0;
//       }
  
//       // subtract 1
//       let option = traverse(current - 1);
  
//       // divide by 3
//       if (current % 3 === 0) {
//         let divide3 = traverse(current / 3);
//         option = Math.min(option, divide3);
//       }
  
//       // divide by 2
//       if (current % 2 === 0) {
//         let divide2 = traverse(current / 2);
//         option = Math.min(option, divide2);
//       }
  
//       cache[current] = option + 1;
//       return option + 1;
//     }
  
//     return traverse(n);
//   }
  
//   const table = new Array(300 + 1);
  
//   const minStepsToOneTab = (n) => {
//     if (table[n] !== undefined) {
//       return table[n];
//     }
//     table[1] = 0;
  
//     for (let i = 2; i < table.length; i++) {
//       // subtract 1
//       let option = table[i - 1];
  
//       // divide by 3
//       if (i % 3 === 0) {
//         let divide3 = table[i / 3];
//         option = Math.min(option, divide3);
//       }
  
//       // divide by 2
//       if (i % 2 === 0) {
//         let divide2 = table[i / 2];
//         option = Math.min(option, divide2);
//       }
  
//       table[i] = option + 1;
//     }
  
//     return table[n];
//   }
  
  // console.time("RECURSION: ");
  // console.log(minStepsToOne(300));
  // console.timeEnd("RECURSION: ");
  
  // console.time("MEMOIZATION: ");
  // console.log(minStepsToOneMemo(300));
  // console.timeEnd("MEMOIZATION: ");
  
  // console.time("TABULATION: ");
  // console.log(minStepsToOneTab(300));
  // console.timeEnd("TABULATION: ");
  
//   console.time("MEMOIZATION MANY: ");
//   for (let i = 0; i < 1000; i++) {
//     minStepsToOneMemo(300);
//   }
//   console.timeEnd("MEMOIZATION MANY: ");
  
//   console.time("TABULATION MANY: ");
//   for (let i = 0; i < 1000; i++) {
//     minStepsToOneTab(300);
//   }
//   console.timeEnd("TABULATION MANY: ");