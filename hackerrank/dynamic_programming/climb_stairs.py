# How many different ways can a fox reach to step n?
# Fox can step 1, 2, 3 at once

# Recusive
# O(3^N)
def climb_stairs(n):

    def climb(n):
        if n == 0:
            return 1
        if n == 1:
            return 1
        if n == 2:
            return 2
        return climb(n - 1) + climb(n - 2) + climb( n - 3)

    return climb(n)


# Memoization
# O(3N)
def climb_stairs_memoization(n):
    cache = {}

    def climb(n):
        if n in cache:
            return cache[n]
        if n == 0:
            return 1
        if n == 1:
            return 1
        if n == 2:
            return 2
        cache[n] = climb(n - 1) + climb(n - 2) + climb( n - 3)
        return cache[n]

    return climb(n)


# Tabulation
# O(N*K^2)
# N = destination (# of steps to climbs)
# K - length of jumps array
def climb_stairs_tabulation(n, jumps):
    #       0   1   2   3   4   5   6   7   8   9  10
    #   2   1   0   1   0   1   0   1   0   1   0   1
    #   3   1   0   1   1   1   2   2   3   4   5   7
    #   5   1   0   1   1   1   3   2   5   6   8   14

  steps = [0] * (n + 1)
  steps[0] = 1
  for j in range(len(jumps)):
    for step in range(jumps[j], len(steps)):
        step_sum = 0
        for k in range(j + 1):
            step_sum += steps[step - jumps[k]]
        steps[step] = step_sum
  return steps[n]



# print(climb_stairs(6))
# print(climb_stairs_memoization(6))
print(climb_stairs_tabulation(6, [1, 2, 3]))