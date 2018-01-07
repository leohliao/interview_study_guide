def rob(nums)
    return 0 if nums.nil? || nums.length == 0
    
    maxAt = []
    maxAt.push({ robbed: nums.first, not_robbed: 0 })
    
    nums.each_with_index do |num, idx|
        next if idx == 0
        maxAt.push({
            robbed: maxAt[idx - 1][:not_robbed] + num,
            not_robbed: [maxAt[idx - 1][:robbed], maxAt[idx - 1][:not_robbed]].max
        })
    end
    
    return [maxAt[-1][:robbed], maxAt[-1][:not_robbed]].max
end

p rob([2,1,1,2]) == 4
p rob([]) == 0 
p rob([1,2,3,4,5,6]) == 12
p rob([3,7,7,4,1]) == 11

## r[i] = nr[i-1] + num 
## nr[i] = (nr[i-1], r[i-1]).max

# O(n^2)
# function rob(numbers) {
#   if (numbers.length === 0) {
#     return 0
#   }
#   const dp = numbers.slice()
#   for (let i = 0; i < numbers.length; i++) {
#     let next = dp[i]
#     for (let j = 0; j < i - 1; j++) {
#       next = Math.max(next, dp[j] + dp[i])
#     }
#     dp[i] = next
#   }
#   return Math.max(...dp)
# }

# O(n)
# function rob(houses) {
#   if (houses.length === 0) {
#     return 0
#   }
#   let [robPrev, notRobPrev] = [0, 0]
#   for (let i = 0; i < houses.length; i++) {
#     [robPrev, notRobPrev] = [houses[i] + notRobPrev, Math.max(robPrev, notRobPrev)]
#   }
#   return Math.max(robPrev, notRobPrev)
# }