/*
    Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s

    Input: n (Integer)
    Output: [Str] (Array of Strings)

    Input: 2
    Output: ["00", "01", "10"] //2

    Input: 3
    Output: ["000", "001", "010", "100", "101"] // 5

    Input: 4
    Output: ["0000", "0001", "0010", "0100", "1000", "0101", "1010"] // 7

    Input: 0
    Output: []

    Constraint:
    - order matters

    Diagram:
           
    n = 2
               ''
           /        \
         '0'         '1'
       /    \        /    \
      '00'  '01'   '10'  '11'

    n = 3
                      ''
              /                     \
            '0'                       '1'
       /          \                 /      \
      '00'        '01'          '10'         '11'
    / 0  \ 1     /0    \ 1       0/    \1  0 /   \1
 '000'   '001'  '010'  '011'  '100'  '101' '110' '111'

 Psuedocode:
  - variable result: str[]
  - define findBinary(substr)
    if (substr.length === n) {
      result.push(substr)
      return
    }
    findBinary(substr + 0);
    if (substr[substr.length - 1] !== "1") {
      findBinary(substr + 1)
    }
  - findBinary("")
  - return result: str[]
*/ 

const nonConsecutiveOnes = (n) => {
  const result = []; 
  const findBinary = (substr) => {
    if (substr.length === n) {
      result.push(substr);
      return;
    }
    findBinary(substr + 0);
    if (substr[substr.length -1] !== "1") {
      findBinary(substr + 1);
    }
  }
  findBinary("");
  return result;
}

console.log(nonConsecutiveOnes(2))
console.log(nonConsecutiveOnes(3))