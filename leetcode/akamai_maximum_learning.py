"""
    Leetcode: https://leetcode.com/discuss/interview-question/1063118/Akamai-or-Maximum-Learning
    Repl.it: https://replit.com/@HadisDaqiq2/maxvaluei#main.py
    Tags: Dynamic Programming, Knapsack

    You will be given a list of articles with their page lengths and intellectual value coefficients. 
    Given a limit to the number of pages you can read in a day, 
    determine the maximum intellectual value you can achieve during one day.
    For example, your articles are of lengths articles = [2,2,3,4] and they are of intellectual value iv = [2,4,4,5]. 
    If you can read p=15 pages in a day, 
    what should you read? You have to read each article twice to gain value. 
    
    Associating 2*articles[i] with iv[i], 
    we can create the array associated = [[4,2], [4,4], [6,4], [8,5]]. 
    The maximum combined length of articles read twice is 14 pages and there are two ways to get there: 
    read articles[0], articles[1] and articles[2] for a total intellectual value of 2 + 4 + 4 = 10 or read articles[2] 
    and articles[3] for a total of 4 + 5 = 9. Our maximal learning is 10 intellectual value points.

    Any ideas?


    ar = [2, 2, 3, 4]
    iv = [2, 4, 4, 5]
    # have to read each article twice to gain value
    
    ar = [2, 2, 3, 4] => first
    ar = [2, 2, 3, 4] => second
          4, 4, 6, 8

    result = [[4, 2], [4, 4], [6,4], [8,5]] (arr[i], v[i])



"""


# You will be given a list of articles with their page lengths and intellectual value coefficients. Given a limit to the number of pages you can read in a day, determine the maximum intellectual value you can achieve during one day.
# For example, your articles are of lengths articles = [2,2,3,4] and they are of intellectual value iv = [2,4,4,5]. If you can read p=15 pages in a day, what should you read? You have to read each article twice to gain value. Associating 2*articles[i] with iv[i], we can create the array associated = [[4,2], [4,4], [6,4], [8,5]]. The maximum combined length of articles read twice is 14 pages and there are two ways to get there: read articles[0], articles[1] and articles[2] for a total intellectual value of 2 + 4 + 4 = 10 or read articles[2] and articles[3] for a total of 4 + 5 = 9. Our maximal learning is 10 intellectual value points.
# ar =     [2,2,3,4]
# ar =     [  4   4,  6,  8]
# iv =     [  2,  4,  4,  5]
# max_vals [0,2,  6,  10  ,10]
# runing_p = 1              i 
             
#  loop -n:
# if running_p - ar[i] > 0:
#   result[i] = max(pre+cur, one_over+cur)
  #  update p 
# else:
  #   if p - ar[i] >= 0:
  #     result[i] = max(pre, cur)
  #   else:
  #     result[i] = pre
  # return max(result)
  
# have to read each article twice to gain value.
#     v       v      v      v
# [[4,2], [4,4], [6,4], [8,5]]

ar = [1,2,4,4]
iv = [10,10,11,200]
p = 10
# 
# ar =[2,2,3,4]
# iv =[2,4,4,5]
# p = 15

def max_iv(ar, iv, p):
  result = [0 *_ for _ in range (len(ar)+1)]
  ar = [2 *_ for _ in ar]
  one_over = 0
  running_p = p
  
  for i in range (1,len(result)):
    pre = result[i-1]
    cur = iv[i-1]

    if running_p - ar[i-1] >= 0:
      result[i] = max(pre+cur,one_over+cur)
      # update running_p
      running_p = running_p - ar[i-1]
      one_over = pre
    else:
      if p - ar[i-1] >= 0:
        result[i] = max(cur,pre)
      else:
        result[i] = pre
  print(result)
  return max(result)
  # print(ar)
  # print(result)

print(max_iv(ar, iv, p))
