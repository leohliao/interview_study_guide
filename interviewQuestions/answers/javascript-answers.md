### How would you empty the array?
- use slice, splice method
- use array.length = 0

### How do you clone an object?
- Use Object.Assign({}, obj)
- Use JSON.parse(JSON.stringify(obj)) // faster

### What is difference between `proto` vs `__proto__` ?
[Resource Proto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)

### Explain how prototypal inheritance works?
- JS Object inherit their properties and methods from their prototype.
- The prototype property is an object, and it has a constructor property by default which allows yo to add new properties and methods to existing objects types.
- __proto__ : when an object is created in JAvaScript, JavaScript Engine adds a __proto__ property to the newly created object; it points to the prototype object of the constructor function. 
- [Resource.](https://github.com/tianyuduan/JS30/blob/master/PrototypalInheritance/prototype.md)

### How to merge two JavaScript Objects?
- Use Object.assign({}, obj)
- if using `merge`, remember to mention that you need to import from lodash.

### How to test whether a value is NaN?
- You can use `isNaN(value)` method to check to see if a value is NaN. 

### Explain event delegation
- Capturing and bubbling allow to implement one of most powerful event handling patterns called event delegation.
- The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
- In the handler we get event.target, see where the event actually happened and handle it.
- [Resource](https://javascript.info/event-delegation)

### Explain how `this` works in JavaScript?
- The value of `this` is determined by how a function is called. It CANNOT be set by assignment during execution, and it may be different each time the function is called.
- Has some difference between `strict` mode and `non-strict` mode.
### What do you think of AMD vs CommonJS?
### Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  ### What needs to be changed to properly make it an IIFE?
### What's the difference between a variable that is: `null`, `undefined` or undeclared?
  ### How would you go about checking for any of these states?
### What is a closure, and how/why would you use one?
### Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
### What's a typical use case for anonymous functions?
### How do you organize your code? (module pattern, classical inheritance?)
### What's the difference between host objects and native objects?
### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
### What's the difference between `.call` and `.apply`?
### Explain `Function.prototype.bind`.
### When would you use `document.write()`?
### What's the difference between feature detection, feature inference, and using the UA string?
### Explain Ajax in as much detail as possible.
### What are the advantages and disadvantages of using Ajax?
### Explain how JSONP works (and how it's not really Ajax).
### Have you ever used JavaScript templating?
  ### If so, what libraries have you used?
### Explain "hoisting".
### Describe event bubbling.
### What's the difference between an "attribute" and a "property"?
### Why is extending built-in JavaScript objects not a good idea?
### Difference between document load event and document DOMContentLoaded event?
### What is the difference between `==` and `===`?
### Explain the same-origin policy with regards to JavaScript.
### Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
### Why is it called a Ternary operator, what does the word "Ternary" indicate?
### What is `"use strict";`? what are the advantages and disadvantages to using it?
### Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
### Explain what a single page app is and how to make one SEO-friendly.
### What is the extent of your experience with Promises and/or their polyfills?
### What are the pros and cons of using Promises instead of callbacks?
### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
### What tools and techniques do you use debugging JavaScript code?
### What language constructions do you use for iterating over object properties and array items?
### Explain the difference between mutable and immutable objects.
  ### What is an example of an immutable object in JavaScript?
  ### What are the pros and cons of immutability?
  ### How can you achieve immutability in your own code?
### Explain the difference between synchronous and asynchronous functions.
### What is event loop?
  ### What is the difference between call stack and task queue?
### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
### What are the differences between variables created using `let`, `var` or `const`?
### What are the differences between ES6 class and ES5 function constructors?
### Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
### What advantage is there for using the arrow syntax for a method in a constructor?
### What is the definition of a higher-order function?
### Can you give an example for destructuring an object or an array?
### ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
### Can you give an example of a curry function and why this syntax offers an advantage?
### What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
### How can you share code between files?
### Why you might want to create static class members?
[Back to JavacScript Interview Questions](/interviewQuestions/javascript-interview-questions.md)