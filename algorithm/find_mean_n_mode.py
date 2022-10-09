
"""
input, represents the list containing N elements.

The arithmetic mean of N numbers is the sum of all the numbers,
divided by N. The mode of N numbers is the most frequently occuring number.

Write an algorithm to find the mean and mode of a set of given numbers.

Input: A array of numbers
Output: A tuple with first being mean and second being mode

"""
def find_mean_mode(input):
	# Write your code here
	sum = 0
	unique = {}
	mode = None
	# iterate the input
	for num in input:
		# sum the elements inside input
		sum += num
		if unique.get(num):
			unique[num] += 1
		else:
			unique[num] = 1

	# count the number of occurence for the each element
	currentMax = -1
	for key in unique:
		count = unique[key]
		if count > currentMax:
			currentMax = count
			mode = key
	
	mean = round(sum/len(input))

	return mean, mode

print(find_mean_mode([1, 2, 7, 3, 2]) == (3, 2))