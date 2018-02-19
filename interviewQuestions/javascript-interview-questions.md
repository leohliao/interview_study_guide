# JavaScript Interview Questions
* [How would you empty the array?](/interviewQuestions/answers/javascript-answers.md#answer-01)
* [How do you clone an object?](/interviewQuestions/answers/javascript-answers.md#answer-02)
* [What is difference between .proto vs __proto__?](/interviewQuestions/answers/javascript-answers.md#answer-03)
* [Explain how prototype inheritance works.](/interviewQuestions/answers/javascript-answers.mdd#answer-04)
* [How to merge two JavaScript Objects?](/interviewQuestions/answers/javascript-answers.mdd#answer-05)
* [How to test whether a value is NaN?](/interviewQuestions/answers/javascript-answers.mdd#answer-06)
* [Explain event delegation.](/interviewQuestions/answers/javascript-answers.mdd#answer-07)
* [Explain how `this` works in JavaScript.](/interviewQuestions/answers/javascript-answers.mdd#answer-08)
* [What do you think of AMD vs CommonJS?](/interviewQuestions/answers/javascript-answers.mdd#answer-09)
* [Explain why the following doesn't work as an IIFE: `function foo(){ }();`.](/interviewQuestions/answers/javascript-answers.mdd#answer-10)
* [What needs to be changed to properly make it an IIFE?](/interviewQuestions/answers/javascript-answers.mdd#answer-11)
* [What is the difference between a variable that is: `null`, `undefined` or `undeclared`?](/interviewQuestions/answers/javascript-answers.md#answer-12)
* [How would you go about checking for any of these states?](/interviewQuestions/answers/javascript-answers.md#answer-13)
* [What is a closure, and how/why would you use one?](/interviewQuestions/answers/javascript-answers.md#answer-14)
* [Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?](/interviewQuestions/answers/javascript-answers.md#answer-15)
* [What's a typical use case for anonymous functions?](/interviewQuestions/answers/javascript-answers.md#answer-16)
* [How do you organize your code? (module pattern, classical inheritance?)](/interviewQuestions/answers/javascript-answers.md#answer-17)
* [What's the difference between host objects and native objects?](/interviewQuestions/answers/javascript-answers.md#answer-18)
* [Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?](/interviewQuestions/answers/javascript-answers.md#answer-19)
* [What's the difference between `.call` and `.apply`?](/interviewQuestions/answers/javascript-answers.md#answer-20)
* [Explain `Function.prototype.bind`.](/interviewQuestions/answers/javascript-answers.md#answer-21)
* [When would you use `document.write()`?](/interviewQuestions/answers/javascript-answers.md#answer-22)
* [What's the difference between feature detection, feature inference, and using the UA string?](/interviewQuestions/answers/javascript-answers.md#answer-23)
* [Explain Ajax in as much detail as possible.](/interviewQuestions/answers/javascript-answers.md#answer-24)
* [What are the advantages and disadvantages of using Ajax?](/interviewQuestions/answers/javascript-answers.md#answer-25)

* Q027. Explain how JSONP works (and how it's not really Ajax).
- JSON with Padding: a method commonly used to bypass the cross-domain policies in web browsers.
- AJAX requests are not allowed to a web page that is perceived to be on a server different by the browser.
* Q028. Have you ever used JavaScript templating?
- Javascript templating is a fast and efficient technique to render client-side templates with Javascript using a JSON data source. The template is HTML markup, peppered with tags that will either insert variables or run programming logic.
* Q029. If so, what libraries have you used?
* Q030. Explain "hoisting".
- A variable can be used before is has been declared.
- Variables defined while be moved to the top of the file. It will be checked to see if the variable is defined locally.
* Q031. Describe event bubbling.
- When an event occurs on an element, it will run the handlers on it, and then on its parents (going from inner to outer)
* Q032. What's the difference between an "attribute" and a "property"?
- HTML representation of a DOM element has attributes while those attributes in Javascript are represented as object properties.
* Q033. Why is extending built-in JavaScript objects not a good idea?
- A browser may implement your version of the method, silently overriding.
* Q034. Difference between document load event and document DOMContentLoaded event?
- DOMContentLoaded is fired when the document has been completely loaded and parsed, not waiting for assets like stylesheets and images.
- Load waits for a fully-loaded page
* Q035. What is the difference between `==` and `===`?
- `==` will not check for types (tolerant) vs `===` checks for type and value
* Q036. Explain the same-origin policy with regards to JavaScript.
- 
* Q037. Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {
  return arr.concat(arr)
}
```
* Q038. Why is it called a Ternary operator, what does the word "Ternary" indicate?
- The ternary operator takes THREE operands (arguments)
* Q039. What is `"use strict";`? what are the advantages and disadvantages to using it?
- The purpose is to indicate that the code should be executed in 'strict mode'.
**Advantages**
- Eliminates some Javascript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JS engines to perform optimizations - may run faster.
- Disables features that are confusing or poorly thought out.
**Disadvantages**
- Browsers not supporting strict mode will run strict mode with different behaviro.
* Q040. Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Q041. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Q042. Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Q043. Explain what a single page app is and how to make one SEO-friendly.
* Q044. What is the extent of your experience with Promises and/or their polyfills?
* Q045. What are the pros and cons of using Promises instead of callbacks?
* Q046. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* Q047. What tools and techniques do you use debugging JavaScript code?
* Q048. What language constructions do you use for iterating over object properties and array items?
* Q049. Explain the difference between mutable and immutable objects.
- Mutable object is an object whose state can be modified after it is created - only objects and arrays are mutable in JS.
- Immutables are objects whose state cannot be changed once the object has been created - Strings and Numbers (Results are allocated to a new block of memory)
  * Q050. What is an example of an immutable object in JavaScript?
  - String and Number
  * Q051. What are the pros and cons of immutability?
  * Q052. How can you achieve immutability in your own code?
* Q053. Explain the difference between synchronous and asynchronous functions.
* Q054. What is event loop?
  * Q055. What is the difference between call stack and task queue?
* Q056. Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
* Q057. What are the differences between variables created using `let`, `var` or `const`?
* Q058. What are the differences between ES6 class and ES5 function constructors?
* Q059. Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* Q060. What advantage is there for using the arrow syntax for a method in a constructor?
* Q061. What is the definition of a higher-order function?
* Q062. Can you give an example for destructuring an object or an array?
* Q063. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
* Q064. Can you give an example of a curry function and why this syntax offers an advantage?
* Q065. What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* Q066. How can you share code between files?

* Q067. Why you might want to create static class members?

* Q068. Function(not associate with object) vs Method(assoicate with object)
```javascript
var methodObject = {
    attribute: "xyz",
    display: function () {  // Method
        console.log(this.attribute);
    }
};
```

[Back to Home](/README.md)

