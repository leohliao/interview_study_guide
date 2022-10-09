"""
    Given a matrix,
    find out where the player landed at last cell.

    The player starts at [0, 0] position,
    it will hop and skip alternate cells anti-clockwise direction

    Example 1:
    Input:
        [
            [29, 8, 37],
            [15, 41, 3],
            [1, 10, 14],
        ]
    Output:
        41
    Explanation:
        starts at 29 => 1 => 14 => 37 => 41
    
"""

def hop_skip_jump(matrix):
    startRowIdx = 0
    startColIdx = 0
    endingRowIdx = len(matrix)
    endingColIdx = len(matrix[0])

    # travel_distance = round(min(endingColIdx, endingRowIdx) / 2)
    travel_distance = 1
    
    x = startRowIdx
    y = startColIdx

    visited = {}

    count = 1
    total_element = endingRowIdx * endingColIdx

    while count < total_element:
        print('travel_distance: ', travel_distance)
        # move down
        while x < endingRowIdx - 1 and count < total_element:
            key = f"{x}_{y}"
            if visited.get(key): 
                break
            else:
                visited[key] = True
                count += travel_distance
                x += travel_distance
        if count < total_element:
            startColIdx += 1
        print("-------------------- move down")
        print("x: ", x) # 2
        print("y: ", y) # 0
        print("visited: ", visited) # 0
        print("count: ", count) # 0
        print("startRowIdx: ", startRowIdx)
        print("startColIdx: ", startColIdx)
        print("endingRowIdx: ", endingRowIdx)
        print("endingColIdx: ", endingColIdx)
        print(" ")

        # move right
        while y < endingColIdx - 1 and count < total_element:
            key = f"{x}_{y}"
            
            if visited.get(key): 
                break
            else:
                visited[key] = True
                count += travel_distance
                y += travel_distance
        if count < total_element:
            endingRowIdx -= 1
        print("--------------------move right")
        print("x: ", x) # 2
        print("y: ", y) # 0
        print("visited: ", visited) # 0
        print("count: ", count) # 0
        print("startRowIdx: ", startRowIdx)
        print("startColIdx: ", startColIdx)
        print("endingRowIdx: ", endingRowIdx)
        print("endingColIdx: ", endingColIdx)
        print(" ")


        # move up
        while x > startRowIdx and count < total_element:
            key = f"{x}_{y}"

            if visited.get(key): 
                break
            else:
                visited[key] = True
                count += travel_distance
                x -= travel_distance
        if count < total_element:
            endingColIdx -= 1

        print("-------------------- move up")
        print("x: ", x) # 2
        print("y: ", y) # 0
        print("visited: ", visited) # 0
        print("count: ", count) # 0
        print("startRowIdx: ", startRowIdx)
        print("startColIdx: ", startColIdx)
        print("endingRowIdx: ", endingRowIdx)
        print("endingColIdx: ", endingColIdx)
        print(" ")
        
        
        # move left
        while y > startColIdx and count < total_element:
            key = f"{x}_{y}"

            if visited.get(key): 
                break
            else:
                visited[key] = True
                count += travel_distance
                y -= travel_distance
        if count < total_element:
            startColIdx += 1
        print("-------------------- move left")
        print("x: ", x) # 2
        print("y: ", y) # 0
        print("visited: ", visited) # 0
        print("count: ", count) # 0
        print("startRowIdx: ", startRowIdx)
        print("startColIdx: ", startColIdx)
        print("endingRowIdx: ", endingRowIdx)
        print("endingColIdx: ", endingColIdx)
        print(" ")
        
        # travel_distance -= 1

    return matrix[x][y]


m = [
        [29, 8, 37],
        [15, 41, 3],
        [1, 10, 14],
    ]
m1 = [
        [29, 8, 37, 14],
        [15, 17, 3, 2],
        [1, 10, 14, 1],
    ]
print(hop_skip_jump(m) == 41)
# print(hop_skip_jump(m1) == 17)