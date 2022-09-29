/*
    Maximum Knowledge:

    There is going to be a conference for d days. The schedule of n meetings is given as three arrays:
    s (start), e (end) and a (additional knowledge gained).

    The i^th meeting is available from s[i], e[i],days (both inclusive) and provides a knowledge gain of a[i].
    A limit of k meetings can be attended in one day.

    Find the maximum knowledge that can be gained in a day.

    Example 1:
    d = 10
    n = 4
    k = 2
    s = [2,5,4,3]
    e = [8,9,7,5]
    a = [800,1600,200,400]
    
    output = 2400
        day 1 => 0
        day 2 => 800  (1)
        day 3 => 1200 (1,4)
        day 4 => 2400 (1,2)
    
    Example 2:
    d = 10
    n = 4
    k = 3
    s = [2,6,4,3]
    e = [8,9,7,5]
    a = [900,1600,2000,400]
    
    output = 4500
        day 1 => 0
        day 2 => 900  (0)
        day 3 => 1300 (0,3)
        day 6 => 4500 (1,2,3)
    
    -- Diagram
    
 900        |-----------------------|   
 1600                       |-----------|
 2000               |-----------|
 400            |-------|

    d   1   2   3   4   5   6   7   8   9   10

    a = [800,1600,200,400]
    
    // Tabluation
    d = 2
    current_day_session_ttl = [900, 0 , 0, 0] => 900
    max = 900
    
    d = 3
    current_day_session_ttl = [900, 0, 0, 400] => 1200
    max = 1200

    d = 4
    current_day_session_ttl = [900, 0, 2000, 400] => 2900
    max = 1200
    
    d = 5
    current_day_session_ttl = [900, 1600, 2000, 400] => 3600
    max = 2400

    d = 6
    current_day_session_ttl = [900, 1600, 2000, 0] => 3600
    max = 2400

    -- Test cases:
    d:  10
    s:  [ 9,  1, 10,  5, 8, 1 ]
    e:  [ 10, 7, 10,  8, 8, 6 ]
    a:  [ 8,  8,  6, 10, 3, 3 ]
    k:  3
    output: 21

*/ 


function getMaxKnowledge(d, s, e, a, k) {
    // Regular
    // if (a.length === 1) {
    //     return a[0];
    // } 
    // const table = new Array(s.length).fill(0);
    
    // let max = 0;
    // for (let day = 1; day < d; day++) {
        
    //     for (let j = 0; j < s.length; j++) {
    //         const startDay = parseInt(s[j]);
    //         const endDay = parseInt(e[j]);
    //         if (day >= startDay && day <= endDay) {
    //             table[j] = a[j];
    //         } else {
    //             table[j] = 0;
    //         }


    //     }

    //     const sorted = table.sort((a, b)=> b - a);
    //     let maxByDay = 0;
    //     for (let t = 0; t < k; t++) {
    //         maxByDay = maxByDay + sorted[t];
    //     }
    //     if (maxByDay > max) {
    //         max = maxByDay;
    //     }
    // }
    // return max;

}