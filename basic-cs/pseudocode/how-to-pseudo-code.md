# How to Pseudocode Efficiently?

There are many problem-solving approach in the world of developments.
The most popular one that you can see in most approachs, is probably psuedo coding. 
With pseudocoding you can design your own approach to solve the problems.
Whether you are junior level, or senior level, 
ability to pseudo code efficiently differentiate the good engineers from the bad engineers.
So I would like to share some hints and tips about how to do pseudocode.

## Understand Pseudocode:

### What is pseudocode?
**Pseudocode are verbal outlines of the logic to your solution to a specific coding challenges using English.**
In other words, pseudo code is understandable English, where you can share your thought process with other people.

### Why is pseudocode useful?
It deals with designing a process to see how one would approach to solve a problem, 
or creating new algorithm for your very awesome products.
They are often used between the planning stage and the stage of writing executable codes. 
Good psuedocodes eventually becomes comments in the final program explaing and guiding other programmer to debug, or make revisions to your code in the future.
Outlines of what pseudo are generally used for:
   * **Construction of your code.** 
   * **Explaining / Communicating your computer process.** 
   * **Design code under collaborative development group to solve complex problems.** 


>**Pseudocode should be a _creative process_ which involves in design, architect, and reasoning, where as writing actual codes should be a drafting and crafting process.**

>**Pseudocode is the _concept design, drawing silhouettes, sketchs_ from your idea, where as writing actual codes is refining lines, clean up, rendering and etc.**

### Steps
- **Analyze the questions, try to get as much information as you can think of**
Think over the questions 1 more time, ask yourself the following questions first:
    * **What is the input of this program for?** For example, am I dealing with array, strings or integer?
    * **What is the output of this program for?** For example, should I return false? a string? a number?
    * **What are the test cases that I should use for this program?** For example, when should I break my game logic and make it stop?
  **Draw it out with pen and paper (aka whiteboarding) if you can!!!** **_STRONGLY RECOMMENDED!!_**

- **Declare variables that you need for this program.** 
Once you have deeper understandings with the questions, then next step you can think about is what kind of data you will need in order to help you successfully output your solution.

For example, you probably need a different variable to carry your final output, you probably need a variable to temporarily store your calculations. You probably need a variable which store information you need:

```javascript
        function addTwoNum(a, b) { 
            var finalOutput = a + b; // for storing final result;
            return final;
        }

        function howManyOddNumbers(num) {
            var oddCounts = 0  // for storing numbers of tracking
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

Variables are declared! Hurray!! now it's time to do some logical thinking. Before we get into that, you must first realize how fast your brains are compare to computer:
  * [You brain really IS faster than you think: It take just 13 milliseconds to see an image](http://www.dailymail.co.uk/sciencetech/article-2542583/Scientists-record-fastest-time-human-image-takes-just-13-milliseconds.html)
  * [How Fast is Your Brain?](http://thephenomenalexperience.com/content/how-fast-is-your-brain)   
  * [Human Brain 30 Times Faster than Best Supercomputers](https://spectrum.ieee.org/tech-talk/computing/networks/estimate-human-brain-30-times-faster-than-best-supercomputers)

Alright, enough of these out-of-dated articles! I guess my point is that you think faster than a computer,
and that is why it is important to learn when to **`BREAK`** your thought process before you move on to the next,
the coding language will only take your thoughts one-by-one.

- **Start thinking through your logic. Write them out in sentences, each line should only be responsible for an action,**
```javascript
   /hangman.js
   
  // declare a variable for showing output, default value is "_ _ _ _ _ _ _ _ _ _"
  // declare a variable for answer, default value is "javascript" 
  // declare a variable for tracking number of tries for user
  // declare a variable for tracking whether game is over or not

  // prompt for user input 
  // after receiving user input, go through the following process:
    // if the user input is a letter 
      // if input is a letter, check to see if the answer contains the letter
         // if answer contains letter, 
            // rewrite output so that it shows that letter
        // else you lose a change for guess
      // else if user input is not a letter, 
         // ask to input again and you lose a chance for guess
    // ... more codes
```
**REMEMBER!!**:
  - You are your own boss, just **`feel free to move the sequence of the codes to anywhere`** that makes sense to your code.
    
  - Each line of pseudo should define **`ONLY ONE`** action, if there is more than 2 actions happening in your sentence, break it down!
    
  - Write something that is **`readable to yourself and to other people`**, if other people is having trouble understanding your pseudocode, you might want to improve that.
    
  - Make good use of **`indentation`**, this will make your code clean and easier to debug as you start writing large amount of codes.
    
  - When you write pseudocode, think of it as trying to explain your work process to a child, or writing a receipe to people who never cook...whatever, you name it!


- **Once you are done writing your pseudocode, take a moment of breath, then look over your pseudocodes again and see if you are missing anything; edit, add, delete, whatever actions**
  - If you are working in pairs, walk through your logic with your friend, see if they understand your approach.
  
- :+1:**READY TO WRITE CODES!**:+1:
  - Although you have all the pseudocodes done, that won't necessary means that you should write everything out,
  

## Question Practice: 

* Pseudocode steps that you would take for making a coffee.
* Pseudocode steps that you would take for putting an elephant into a fridge.
* Pseudocode steps that you would take for putting a giraffe into a fridge.
* Pseudocode steps that you would take for comparing 3 numbers.
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
