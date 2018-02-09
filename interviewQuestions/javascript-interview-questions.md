# JavaScript Interview Questions
* [How would you empty the array?](/interviewQuestions/answers/javascript-answers.md#how-would-you-empty-the-array)
* [How do you clone an object?](/interviewQuestions/answers/javascript-answers.md#how-do-you-clone-an-object)
* [What is difference between .proto vs __proto__?](/interviewQuestions/answers/javascript-answers.md#what-is-difference-between-dot-proto)
* [Understand prototype inheritance?](/interviewQuestions/answers/javascript-answers.md#explain-how-prototypal-inheritance-works)
* [How to merge two JavaScript Objects?](/interviewQuestions/answers/javascript-answers.md#how-to-merge-two-javascript-objects)
* [How to test whether a value is NaN?](/interviewQuestions/answers/javascript-answers.md#how-to-test-whether-a-value-is-nan)
* [Explain event delegation](/interviewQuestions/answers/javascript-answers.md#explain-event-delegation)


* Explain how `this` works in JavaScript
- The value of `this` is determined by how a function is called. It CANNOT be set by assignment during execution, and it may be different each time the function is called.
- Has some difference between `strict` mode and `non-strict` mode.

* Explain how prototype inheritance works
- *A prototype is a working object instance.*
- *Objects inherit directly from other objects.*
- Instances allows for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. 
- Class taxonomies are not an automatic side-effect of prototypal OO.

* What do you think of AMD vs CommonJS?
- `AMD`: Asynchronous Module Definition - is another specification for modules. For example: ReS. It is generally more used in client-side(in-browser) JavaScript development due to this. 
- [JavaScript Module Systems Showdown](https://auth0.com/blog/javascript-module-systems-showdown/)

* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
- `IIFE` - An immediately-invoked function expression which produces a lexical scope using JavaScript's function scoping. 
- This example doesn't work because it needs a wrapper.

  * What needs to be changed to properly make it an IIFE?
  - Proper way to make it IIFE is:
  ```javascript
  (function foo(){ })();
  ```
* What's the difference between a variable that is: `null`, `undefined` or `undeclared`?
- `null` - is primitive type; can be assigned to variable; has no value.
- `undefined` - variable is declared, but has yet to be assigned a value.
- `undeclared` - variable is not declared at all --> will return Reference error 

* How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
- Closure determines whether a function(inner) has access to certain variables in the outer one.
- Closure has access to variables in three scopes:
  - 1. variable of its own scope
  - 2. variables in the enclosing function's scope
  - 3. global variables
  ```javascript
  var globalVar = "xyz";

  (function outerFunc(outerArg) {
      var outerVar = 'a';
      
      (function innerFunc(innerArg) {
      var innerVar = 'b';
      
      console.log(
          "outerArg = " + outerArg + "\n" +
          "innerArg = " + innerArg + "\n" +
          "outerVar = " + outerVar + "\n" +
          "innerVar = " + innerVar + "\n" +
          "globalVar = " + globalVar);
      
      })(456);
  })(123);
  ```
  output is: 
  ```javascript
  outerArg = 123
  innerArg = 456
  outerVar = a
  innerVar = b
  globalVar = xyz
  ```
* Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
- `forEach()` - executes a provided function once for each array element.
- `forEach()` - may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out:
- `.map()` - creates a new array with the results of calling a provided function on every element in the calling array.
- `map()` - might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

* Q017. What's a typical use case for anonymous functions?
- Anonymous functions are `function expressions`, so we can assign functions to variables and object properties or pass them as arguments.
* Q018. How do you organize your code? (module pattern, classical inheritance?)
* Q019. What's the difference between host objects and native objects?
- `Host objects` - objects supplied by the host environment to complete the execution environment. Ex: (assuming browser environment) window, document, location, etc.
- `Native objects` - standard built-in objects provided by Javascript. Ex: Date, Math, Object (constructor)
* Q020. Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
- `function Person(){}` - function declaration, function is declared but is not executed
- `var person = Person()` - function expression, the variable `var person` has been defined and contains a value reference to a Person function. Javascript expressions always return a value.
- `var person = new Person()` - function constructor, when we add the keyword 'new', we are instantiating a new object of the Person class constructor.
* Q021. What's the difference between `.call` and `.apply`?
They differ in how they handle function arguments:
- `.call` - requires the arguments to be listed individually
- `.apply` - allows you to invoke the function with `arguments` array as the second argument
* Q022. Explain `Function.prototype.bind`.
- It creates a new function, where `this` keyword is set to the provided value
- You keep the context of `this` within another function.
Ex: 
```javascript
function Person(name) {
  this.name = name;
  this.greeting = function() {
    setTimeOut(function() {
      console.log("Hello, my name is " + this.name);
    }.bind(this), 500);
  }
}
var jenn = new Person('Jenn');
jenn.greeting(); //'Hello, my name is Jenn'
```
- With `bind`, there's no need to assign `this` to a variable to keep the same context.
* Q023. When would you use `document.write()`?
- It was an old way of adding elements to a webpage; it only works while the page is loading
- Used when including third party code (ads or Google Analytics)
- Because there's no DOM modification, it works fast. If a lot of text needs to be added into HTML dynamically and the page is still loading, it may help to use `document.write()`
* Q024. What's the difference between feature detection, feature inference, and using the UA string?
- These are three ways to determine if a particular web technology feature exists in a user's browser or environment.
- `Feature detection` - a way of determining if a feature exists in the browser
- `Feature inference` - a feature is determined to exist and the next web technology feature to be implemented is assumed to exist as well.
- `UA String` - User Agent String; a string of text of data that each browser sends and can be accessed via navigator.userAgent. This string text contains information about the browser environment that is being targeted.
* Q025. Explain Ajax in as much detail as possible.
- Asynchronous Javascript + XML
- The use of XMLHttpRequest object to communicate with servers; information can be sent in different formats such as JSON, XML, HTML.
- Its asynchronous nature allows it to communicate with server, exchange data, and update the page without refreshing the page.
* Q026. What are the advantages and disadvantages of using Ajax?
**Advantages**:
- Reduces traffic between the client and the server
- Response time is faster, increasing performance and speed (optimization)
- Improves user experience
- The alternative to use JSON

**Disadvantages**:
- Could increase design and development time - difficult to debug and increases code size of webpage
- Browser incompatibility because AJAX depends on Javascript which is implemented differently across different browsers
- Pages that are dynamically created using AJAX request do not autmotically register with the browser's history, so hitting the back button may not return to an earlier state of the page.
* Q027. Explain how JSONP works (and how it's not really Ajax).
* Q028. Have you ever used JavaScript templating?
- Javascript templating is a fast and efficient technique to render client-side templates with Javascript using a JSON data source. The template is HTML markup, peppered with tags that will either insert variables or run programming logic.
* Q029. If so, what libraries have you used?
* Q030. Explain "hoisting".
* Q031. Describe event bubbling.
* Q032. What's the difference between an "attribute" and a "property"?
* Q033. Why is extending built-in JavaScript objects not a good idea?
* Q034. Difference between document load event and document DOMContentLoaded event?
* Q035. What is the difference between `==` and `===`?
- `==` will not check for types (tolerant) vs `===` checks for type and value
* Q036. Explain the same-origin policy with regards to JavaScript.
* Q037. Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Q038. Why is it called a Ternary operator, what does the word "Ternary" indicate?
* Q039. What is `"use strict";`? what are the advantages and disadvantages to using it?
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
  * Q050. What is an example of an immutable object in JavaScript?
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

