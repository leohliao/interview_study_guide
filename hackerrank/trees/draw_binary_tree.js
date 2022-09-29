/*

- pseudocode
        5
      /   \
     6     4
      \   / \
   i  7  3   2

      5
    6     4
    7  3  2 

  depth = 3
  
  grid = [
    [5], [6, 4], [null, 7, 3, 2]
  ]
  
  width = 2 ^ maxDepth
  pos_x_1 = 20 / 2 * for depth = 1
  pos_x_2 = 20 / 4 * for depth = 2
  pos_x_3 = 20 / 8 * for depth = 3


  pseudo:
    1. find depth
    2. find nodes in each depth
    

 

*/ 