# JavaScript Interview Questions 

## Basic

### Q001. How would you empty the array?
- use slice, splice method
- use array.length = 0;

### Q002. How do you clone an object? 
- Use Object.Assign({}, obj)
- Use JSON.parse(JSON.stringify(obj)) // faster

### Q003. What is difference between .proto vs __proto__
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

### Q004. Understand prototype inheritance: 
Resource: `https://github.com/tianyuduan/JS30/blob/master/PrototypalInheritance/prototype.md` 
- JS Object inherit their properties and methods from their prototype.
- The prototype property is an object, and it has a constructor property by default which allows yo to add new properties and methods to existing objects types.
- __proto__ : when an object is created in JAvaScript, JavaScript Engine adds a __proto__ property to the newly created object; it points to the prototype object of the constructor function. 

### Q005. How to merge two JavaScript Objects 
- Use Object.assign({}, obj)
- if using `merge`, remember to mention that you need to import from lodash.

### Q006. How to test whether a value is NaN? 
- You can is `NaN.isNaN()` method to check to see if a value is NaN. 

#### Q007. Explain event delegation:
#### Q008. Explain how `this` works in JavaScript
### Q009. Explain how prototypal inheritance works
### Q010. What do you think of AMD vs CommonJS?
### Q011. Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
### Q012. What needs to be changed to properly make it an IIFE?
### Q013. What's the difference between a variable that is: `null`, `undefined` or undeclared?
### Q014. How would you go about checking for any of these states?
### Q015. What is a closure, and how/why would you use one?
### Q016. Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
### Q017. What's a typical use case for anonymous functions?
### Q018. How do you organize your code? (module pattern, classical inheritance?)
### Q019. What's the difference between host objects and native objects?
### Q020. Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
### Q021. What's the difference between `.call` and `.apply`?
### Q022. Explain `Function.prototype.bind`.
### Q023. When would you use `document.write()`?
### Q024. What's the difference between feature detection, feature inference, and using the UA string?
### Q025. Explain Ajax in as much detail as possible.
### Q026. What are the advantages and disadvantages of using Ajax?
### Q027. Explain how JSONP works (and how it's not really Ajax).
### Q028. Have you ever used JavaScript templating?
### Q029. If so, what libraries have you used?
### Q030. Explain "hoisting".
### Q031. Describe event bubbling.
### Q032. What's the difference between an "attribute" and a "property"?
### Q033. Why is extending built-in JavaScript objects not a good idea?
### Q034. Difference between document load event and document DOMContentLoaded event?
### Q035. What is the difference between `==` and `===`?
### Q036. Explain the same-origin policy with regards to JavaScript.
### Q037. Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
### Q038. Why is it called a Ternary operator, what does the word "Ternary" indicate?
### Q039. What is `"use strict";`? what are the advantages and disadvantages to using it?
### Q040. Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
### Q041. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
### Q042. Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
### Q043. Explain what a single page app is and how to make one SEO-friendly.
### Q044. What is the extent of your experience with Promises and/or their polyfills?
### Q045. What are the pros and cons of using Promises instead of callbacks?
### Q046. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
### Q047. What tools and techniques do you use debugging JavaScript code?
### Q048. What language constructions do you use for iterating over object properties and array items?
### Q049. Explain the difference between mutable and immutable objects.
  ### Q050. What is an example of an immutable object in JavaScript?
  ### Q051. What are the pros and cons of immutability?
  ### Q052. How can you achieve immutability in your own code?
### Q053. Explain the difference between synchronous and asynchronous functions.
### Q054. What is event loop?
  ### Q055. What is the difference between call stack and task queue?
### Q056. Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
### Q057. What are the differences between variables created using `let`, `var` or `const`?
### Q058. What are the differences between ES6 class and ES5 function constructors?
### Q059. Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
### Q060. What advantage is there for using the arrow syntax for a method in a constructor?
### Q061. What is the definition of a higher-order function?
### Q062. Can you give an example for destructuring an object or an array?
### Q063. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
### Q064. Can you give an example of a curry function and why this syntax offers an advantage?
### Q065. What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
### Q066. How can you share code between files?
### Q067. Why you might want to create static class members?

