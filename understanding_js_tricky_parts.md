# Understand JavaScript Tricky Parts 

# Conceptual Aside 01
- `Syntax Parsers` : A Program that reads your code and determines what it does and if its grammar is valid. (Your code isn't magic. Someone else wrote a program to translate it for the computer.) 
- `Lexical Environments`: Where something sits physically in the code you write. 'Lexical' means 'having to do with words or grammar.' A lexical environment exist in programming languages in which where you write something is important.
- `Execution Contexts`: A wrapper to help manager the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyonds what you've written in your code. 
- `Name/Value Pair`: A name which maps to a unique value. The name may be definted more than once, but only can have one value in any given "context". That value may be more name/value pairs.