def longest_palindromic_substring(string):

  cache = {}

  def find(left, right):

    key = str(left) + "_" + str(right)
    print("str(left): ", str(left))
    print("str(right): ", str(right))
    if key in cache:
      return cache[key]
    if left == right:
      return 1
    elif left == right - 1 and string[left] == string[right]:
      return 2
    elif string[left] == string[right]:
      cache[key] = 2 + find(left+1, right-1)
      return cache[key]

    cache[key] = max(find(left+1, right), find(left, right-1))

    print("cache[key]: ", cache[key])
    return cache[key]

  result = find(0,len(string)-1)

  return result

print(longest_palindromic_substring("vtvvv")) # vvv
print(longest_palindromic_substring("pwnnb")) # nn
print(longest_palindromic_substring("ttbtctcbt")) # ttbtctcbt