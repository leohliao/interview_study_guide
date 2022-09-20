
/*
    AMS - Identify largest-in-row-and-smallest-in-column elements in a matrix

    Write a program which prints out elements which are largest in a row and also smallest in column in 2 dimensional matrix

    Input Format 
    First line contains the row count N,
    2nd line contains the column count M & each of the subsequence N lines contains the M integer for that row

    Constraints:
    Each number in the matrix is a non-negative integer

    I/O:
    input:  2 
            2 
            1 2 
            3 4
    output: 2

    input:  2
            2
            4 2
            3 4
    ouput: -1

    input:  [[1,2,3], [4,5,6], [7,8,9]]
    ouput: 3
*/ 

const largest_in_row_and_smallest_in_column = (matrix) => {
    const matrixObj = {};
    

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let largest_row_num = null;
        let smallest_col_num = null;    

        for (let j = 0; j < row.length; j++) {
            const current_num = matrix[i][j];

            if (largest_row_num) {
                largest_row_num = Math.max(current_num, largest_row_num);
            } else {
                largest_row_num = current_num
            }
            const colKey = `c_${j}`;
            if (matrixObj[colKey]) {
                smallest_col_num = Math.min(smallest_col_num, current_num);
            } else {
                matrixObj[colKey] = current_num;
            }
        }
        matrixObj[`r_${i}`] = largest_row_num
    }

    for (let i = 0; i < matrix.length; i++) {
        rowKey = `r_${i}`;
        for (let j = 0; j < matrix.length; j++) {
            colKey = `c_${j}`;

            if (matrixObj[rowKey] === matrixObj[colKey]) {
                return matrixObj[rowKey];
            }
        }
    }
    console.log('matrixObj: ', matrixObj);

}

console.log(largest_in_row_and_smallest_in_column([[1,2,3], [4,5,6], [7,8,9]]) === 3);
