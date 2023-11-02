/*
    A Mars rover is directed to move within a square matrix.
    It accepts a sequence if commands to move in any of the four directions from each cell.
    [UP, DOWN, LEFT, or RIGHT].
    The rover starts from cell 0.
    and may not move diagonally or outside of the boundary.

    Each cell in the matrix has a position equal to 
    (row * size) + column

    where row and column are zero-indexed, size = row length of the matrix.

    return the final position of the rover after all moves.

    Example:
    n = 4
    commands = [UP, DOWN, LEFT, or RIGHT]

    I/O:
        Input: {integer}  size of square matrix
               {String Array} the commands
        Output: the index where rover lands

    Sample I:
    Input:
        STDIN    Function
        -----    --------
        4     →  n = 4
        5     →  cmds[] size m = 5
        RIGHT →  cmds = ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN']
        DOWN
        LEFT
        LEFT
        DOWN
    Output:
        8


*/ 
/*
 * Complete the 'roverMove' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER matrixSize
 *  2. STRING_ARRAY cmds
 */

function roverMove(matrixSize, cmds) {
    let currentIdx = 0;
    
    for (let command of cmds) {
        if (command === "RIGHT") {
            if (!((currentIdx + 1) % matrixSize === 0)) {
                currentIdx += 1;    
            }
        } else if (command === "LEFT") {
            if (!(currentIdx === 0 || currentIdx % matrixSize === 0)) {
                currentIdx -= 1;    
            }
            
        } else if (command === "DOWN") {
            const nextIdx = currentIdx + matrixSize;
            if (nextIdx < (matrixSize*matrixSize)) {
                currentIdx = nextIdx;    
            }
        } else if (command === "UP") {
            const nextIdx = currentIdx - matrixSize;
            if (nextIdx > -1) {
                currentIdx = nextIdx;
            }
        }
        
    }
    
    return currentIdx;
}

console.log(roverMove(4, ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN'])) // 8