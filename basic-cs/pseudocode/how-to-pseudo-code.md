# How to Pseudocode Efficiently?

There are many problem-solving approach in the world of developments.
The most popular one that everyone uses, is probably psuedo coding. 
With pseudocoding you can design your own approach to solve the problems.
Whether you are junior level, or senior level, 
ability to pseudo code efficiently differentiate from good engineers to the bad engineers.
So I would like to share some hints and tips about how to do pseudo code.

## Understand Pseudocode:

### What is pseudocode?
**Pseudocode are verbal outlines of the logic to your solution to a specific coding challenges using English.**

### Why is pseudocode useful?
It deals with designing a process to see how one would approach to solve a problem, 
or creating new algorithm for your very awesome products.
They are often used between the planning stage and the stage of writing executable codes. 
Good psuedocodes eventually becomes comments in the final program explaing and guiding other programmer to debug, or make revisions to your code in the future.
Outlines of what pseudo are generally used for:
   * **Construction of your code.** 
   * **Explaining / Communicating your computer process.** 
   * **Design code under collaborative development group to solve complex problems.** 

### Steps
- Think over the questions 1 more time, ask yourself the following questions first:
    * **What is the input of this program for?** For example, am I dealing with array, strings or integer?
    * **What is the output of this program for?** For example, should I return false? a string? a number?
    * **What are the test cases that I should use for this program?** For example, when should I break my game logic and make it stop?
    * Drawing it out with pen and paper (aka whiteboarding) if you can!!! **STRONGLY RECOMMENDED!!**

- Once you have deeper understandings with the questions, then next step you should think about is **Declare variables that you need for this program.** 

For example, you probably need a different variable to carry your final output, you probably need a variable to temporarily store your calculations. You probably need a variable which store information you need:

    ```javascript
        function addTwoNum(a, b) { 
            var finalOutput = a + b; // for storing final result;
            return final;
        }

        function howManyOddNumbers(num) {
            var oddCounts = 0  // for storing calculations
            for (var i=0; i < num; i++ ){
                if (i % 2 === 0) {
                    oddCounts++;
                }
            }
            return oddCounts;
        }

        function ceasarCipher("sweet") {
            var alpha = "abcdefghijklmnopqrstuvwyz"; // for storing alphabetical orders
            var cipheredOutput = ""; // for storing my decoded output
            // some codes here...
        }
    ```
-  Variables are declared! Hurray, now it's time to do some logical thinking. Before we get into that, you must first realize how fast your brains are:
    * [You brain really IS faster than you think: It take just 13 milliseconds to see an image](http://www.dailymail.co.uk/sciencetech/article-2542583/Scientists-record-fastest-time-human-image-takes-just-13-milliseconds.html)
    * [How Fast is Your Brain?](http://thephenomenalexperience.com/content/how-fast-is-your-brain)
    * [Human Brain 30 Times Faster than Best Supercomputers](https://spectrum.ieee.org/tech-talk/computing/networks/estimate-human-brain-30-times-faster-than-best-supercomputers)

Alright, enough of these out-of-dated articles! I guess my point is that you think faster than a computer,
and that is why it is important to learn when to **`BREAK`** your thought process before you move on to the next,
the coding language will only take your thoughts one-by-one.

## Question Practice: 

* Pseudocode steps that you would take for making a coffee.
* Pseudocode steps that you would take for putting an elephant into a fridge.
* Pseudo code Two Sum:
```javascript
    Array.prototype.twoSum = function (target) {
     console.log("this: " + this);
     console.log("target: " + target);
   }
   console.log([1, 2, 3, 4, 5].twoSum(6))
```

## Resources: 
[Study.com - Writing Pseudocode: Algorithm & Example](https://study.com/academy/lesson/writing-pseudocode-algorithms-examples.html)

[Khan Academy - Planning with Pseudo-code](https://www.khanacademy.org/computing/computer-programming/programming/good-practices/p/planning-with-pseudo-code)

[Pseudocode by Damian Gordan](https://www.slideshare.net/DamianGordon1/pseudocode-10373156)

[Wikihow](https://www.wikihow.com/Write-Pseudocode)