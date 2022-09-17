/*
# Tell Me About Yourself

Should take one minute; minute and a half at most

##### Prompt

Say: "Tell me about yourself"

##### Do you hear these things?

1. Who the interviewee is (interviewee's one liner)

2. How the interviewee became who they are (short statement about why they became a software engineer with a specific story)

3. Their Pitch (why this company). This has 2 sub-parts and includes:

  - Why they are qualified - Did they share a couple
  **specific** highlights about their applicable expertise

  - Why this company - Did they share **specific** reasons
  why they are interested in the company/position
  (showcasing aligned values/mission) and how they plan to
  add value to the team, product, service, mission, etc

# Count Vowel Strings

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u).


```
Input: n (Integer)
Output: Integer
```

#### Example:

```
Input: n = 1
Output: 5
Explanation: The strings that consist of vowels only are ["a","e","i","o","u"].

Input: n = 2
Output: 25
Explanation: The 25 strings that consist of vowels are
["aa","ae","ai","ao","au","ea", ee","ei","eo","eu","ia","ie","ii","io","iu","oa","oe","oi",
"oo","ou","ua", "ue", "ui", "uo" "uu"].
```

# Constraints

```
Time Complexity: O(5^N)

Space Complexity: O(N)
```


Please use recursion to solve this problem.



# Hints:

- For each character, its possible values will depend on the value of its previous character.
- Do not provide the constraints unless asked
- If interviewee is stuck, encourage them to begin diagramming out a recursive tree. Start with the root node. Ask them what branches would come off of that initial root node.


# Solution:

## Solution I:
Let's use this recursive tree to illustrate how we could solve for an input of 2:
```
                                                                         ''
             /                              /                             |                             \                              \
           'a'                            'e'                            'i'                            'o'                            'u'
    /    /    |    \    \        /    /    |    \    \          /    /    |    \    \         /    /     |    \     \         /    /    |    \    \
   'aa' 'ae' 'ai'  'ao' 'au'  'ea'  'ee'  'ei'  'eo'  'eu'   'ia'  'ie'  'ii'  'io'  'iu'   'oa'  'oe'  'oi'  'oo'  'ou'   'ua'  'ue'  'ui'  'uo'  'uu'
```
The no. of leaf node is the answer
Code
```Python
    def countVowelStrings(self, n: int) -> int:
        def helper(build, index):
            #base case
            if index == n:
                result.append(build)
                return

            #recursize cases
            for char in 'aeiou':
                helper(build+char, index+1)
        
        result = []
        helper('',0)
        return len(result)

```


## Solution II:
Let's use this recursive tree to illustrate how we could solve for an input of 2:
```
                                                input: 2 -> char remaining
             /                    /                  |                    \                   \
           1                     1                   1                     1                   1
    /  /   |   \  \       /  /   |   \  \     /  /   |   \  \       /  /   |   \  \     /  /   |   \  \
   0   0   0   0   0      0  0   0   0  0     0  0   0   0  0       0  0   0   0  0     0  0   0   0   0
```

Code
```Python
    def countVowelStrings(self, n: int) -> int:
        
        def helper(num):
            #base case
            if num == 0:
                return 1

            #recursize cases
            return helper(num-1) * len('aeiou')
        
        return helper(n)
```

# Resources:


*/ 

const countVowelString = (n) => {
    const result = [];
    const findVowel = (str, idx) => {
        if (idx === n) {
            result.push(str);
            return;
        }
        for (v of "aeiou".split("")) {
            findVowel(str + v, idx + 1)
        }

    }
    findVowel("", 0);
    return result;
}
console.log(countVowelString(1))
console.log(countVowelString(2))