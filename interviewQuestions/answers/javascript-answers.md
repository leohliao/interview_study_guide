<div id="answer-01"></div>

### How would you empty the array?
- Method 1: `array = []`
- Method 2: `array.length = 0`
- Method 3: `array.splice(0,array.length)`
- Method 4: `while (array.length > 0) { array.pop(); }`
  [StackOverflow: How do I empty an array in JS?](https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript)

<br />
<br />
<div id="answer-02"></div>

### How do you clone an object?
    ```javascript
    let obj = {
        a: 1,
        b: 2,
        c: {
            age: 30
        }
    };
    let shallow_dup1 = Object.clone(obj) // shallow clone
    let deep_dup1 = Object.assign({}, obj); // deep clone
    let deep_dup2 = JSON.parse(JSON.stringify(obj)) // faster
    ``` 
  [Medium: Objects in JS: object.assign deep copy](https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab)

<br />
<br />
<div id="answer-03"></div>

### What is difference between `proto` vs `__proto__`?
**`Object.prototype.`**
- one
- two
- three

**`Object.prototype.__proto__`** 
- Points to the object which was used as prototype when the object was instantiated. 
- Its getter function exposes the value of the internal [[Prototype]] of an object
- Its setter allows [[Prototype]] of an object to be mutated. The object must be extensible accord to Object.isExtensible(): if it is not, a TypeError is thrown. The value provided must be an object or null. Providing any other value will do nothing.
  ```javascript
  Object.prototype // Object created using object
  Array.prototype // Object created using array

  var fun = new Fun();
  fun.prototype // Object created using Fun, fun is a function; this value is the value of fun.prototype
  ```

  [MDN Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

  [MDN Proto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
<br />
<br />

<div id="answer-04"></div>

### Explain how prototypal inheritance works?
- *A prototype is a working object instance.*
- *Objects inherit directly from other objects.*
- Instances allows for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. 
- Class taxonomies are not an automatic side-effect of prototypal OO.
- JS Object inherit their properties and methods from their prototype.
- The prototype property is an object, and it has a constructor property by default which allows yo to add new properties and methods to existing objects types.
- __proto__ : when an object is created in JAvaScript, JavaScript Engine adds a __proto__ property to the newly created object; it points to the prototype object of the constructor function. 
[Resource Prototype Inheritance](https://github.com/tianyuduan/JS30/blob/master/PrototypalInheritance/prototype.md)
<br />
<br />

<div id="answer-05"></div>

### How to merge two JavaScript Objects?
- Use Object.assign({}, obj)
- if using `merge`, remember to mention that you need to import from lodash.

<br />
<br />

<div id="answer-06"></div>

### How to test whether a value is NaN?
- You can use `isNaN(value)` method to check to see if a value is NaN. 

<br />
<br />

<div id="answer-07"></div>

### Explain event delegation
- Capturing and bubbling allow to implement one of most powerful event handling patterns called event delegation.
- The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
- In the handler we get event.target, see where the event actually happened and handle it.
- [Resource](https://javascript.info/event-delegation)

<br />
<br />
<div id="answer-08"></div>

### Explain how `this` works in JavaScript?
- The value of `this` is determined by how a function is called. It CANNOT be set by assignment during execution, and it may be different each time the function is called.
- Has some difference between `strict` mode and `non-strict` mode.

<br />
<br />
<div id="answer-09"></div>

### What do you think of AMD vs CommonJS?
- `AMD`: Asynchronous Module Definition - is another specification for modules. For example: ReS. It is generally more used in client-side(in-browser) JavaScript development due to this. 
- [JavaScript Module Systems Showdown](https://auth0.com/blog/javascript-module-systems-showdown/)

<br />
<br />
<div id="answer-10"></div>

### Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
- `IIFE` - **Immediately Invoked Function Expressions**
- This roduces a lexical scope using JavaScript's function scoping. 
- This example doesn't work because it needs a wrapper.

IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ).

Here are two ways to fix it that involves adding more brackets: (function foo(){ })() and (function foo(){ }()). These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.
<br />
<br />

[Back to JavacScript Interview Questions](/interviewQuestions/javascript-interview-questions.md)
<br />
<br />
<div id="answer-11"></div>

### What needs to be changed to properly make it an IIFE?
  - Proper way to make it IIFE is:
```javascript
(function foo(){ })();
```
<br />
<br />

<div id="answer-12"></div>

### What is the difference between a variable that is: `null`, `undefined` or undeclared?
- `null` - is primitive type; can be assigned to variable; has no value.
- `undefined` - variable is declared, but has yet to be assigned a value.
- `undeclared` - variable is not declared at all --> will return Reference error

<br />
<br />
[Back to JavacScript Interview Questions ](/interviewQuestions/javascript-interview-questions.md)
<br />
<br />
<div id="answer-13"></div>

### How would you go about checking for any of these states?
- Although there are many approaches to check for these states. I would say the key thing is to be able to console.log the output at certain point in your code. The following offer several good ways: 
```javascript
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true
```
<br />
<br />
<div id="answer-14"></div>

### What is a closure, and how/why would you use one?
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
<br />
<br />
<div id="answer-15"></div>

### Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
- They are both iteration methods.
- `forEach()` - executes a provided function once for each array element.
- `forEach()` - may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out:
- `.map()` - creates a new array with the results of calling a provided function on every element in the calling array.
- `map()` - might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
<br />
<br />
<div id="answer-16"></div>

### What's a typical use case for anonymous functions?
** Check the answers one more time **
- Generally speak, an anonymous function is not a preferred practice in your coding.
However, a typical use case of anonymous function is callback, 
you can use a function as a callback if you do not need to repeatedly use the same function in other circumstance.
- Anonymous functions are `function expressions`, so we can assign functions to variables and object properties or pass them as arguments.
<br />
<br />
<div id="answer-17"></div>

### How do you organize your code? (module pattern, classical inheritance?)
** Check the answers one more time **
** I feel like this is a good place to also talk about programing paradigm. **
- From an OOP (Object Oriented Programming perspective), it is recommend that you group similar functions of codes together as a group, which means this can become a module, then the way to access each module is by exporting it, 
and importing it if you need to access them from another function.
- Classical inheritance is similar idea and is also a good option to consider, 
however, since in JavaScript you can also use prototype inheritance,
it is a better practice to use prototype inheritance over class so that you won't modified the original constructor.
<br />
<br />
<div id="answer-18"></div>

### What's the difference between host objects and native objects?
- `Host objects` - objects supplied by the host environment to complete the execution environment. Ex: (assuming browser environment) window, document, location, etc.
- `Native objects` - standard built-in objects provided by Javascript. Ex: Date, Math, Object (constructor)

<br />
<br />
<div id="answer-19"></div>

### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
** Double Check **
- They are all ways to declare a function.
- `function Person(){}` - Function decoration
- `var person = Person()` - Function expression.
- `var person = new Person()` - Creating an object, aka instantiate.
- ////////
- `function Person(){}` - function declaration, function is declared but is not executed
- `var person = Person()` - function expression, the variable `var person` has been defined and contains a value reference to a Person function. Javascript expressions always return a value.
- `var person = new Person()` - function constructor, when we add the keyword 'new', we are instantiating a new object of the Person class constructor.
<br />
<br />
<div id="answer-20"></div>

### What's the difference between `.call` and `.apply`?
- They are both part of binding to a function/object.
- `.call` - binds a single object to another.
- `.apply`- binds an array of objects.
- ///////
They differ in how they handle function arguments:
- `.call` - requires the arguments to be listed individually
- `.apply` - allows you to invoke the function with `arguments` array as the second argument
<br />
<br />
<div id="answer-21"></div>

### Explain `Function.prototype.bind`.
- This is same as explaining what bind() is. 
- From MDN:
** The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. **
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

[MDN Global Objects](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
<br />
<br />
<div id="answer-22"></div>

### When would you use `document.write()`?
`document.write` -  is executed after the page has been loaded. It will clear the contents of the whole page and rewrite them with something you define.
- It was an old way of adding elements to a webpage; it only works while the page is loading
- Used when including third party code (ads or Google Analytics)
- Because there's no DOM modification, it works fast. If a lot of text needs to be added into HTML dynamically and the page is still loading, it may help to use `document.write()`
<br />
<br />
<div id="answer-23"></div>

### What's the difference between feature detection, feature inference, and using the UA string?
- These are three ways to determine if a particular web technology feature exists in a user's browser or environment.
- `Feature detection` - a way of determining if a feature exists in the browser
- `Feature inference` - a feature is determined to exist and the next web technology feature to be implemented is assumed to exist as well.
- `UA String` - User Agent String; a string of text of data that each browser sends and can be accessed via navigator.userAgent. This string text contains information about the browser environment that is being targeted.
<br />
<br />
<div id="answer-24"></div>

### Explain Ajax in as much detail as possible.
- Asynchronous Javascript + XML
- The use of XMLHttpRequest object to communicate with servers; information can be sent in different formats such as JSON, XML, HTML.
- Its asynchronous nature allows it to communicate with server, exchange data, and update the page without refreshing the page.
<br />
<br />
<div id="answer-25"></div>

### What are the advantages and disadvantages of using Ajax?
**Advantages**:
- Reduces traffic between the client and the server
- Response time is faster, increasing performance and speed (optimization)
- Improves user experience
- The alternative to use JSON

**Disadvantages**:
- Could increase design and development time - difficult to debug and increases code size of webpage
- Browser incompatibility because AJAX depends on Javascript which is implemented differently across different browsers
- Pages that are dynamically created using AJAX request do not autmotically register with the browser's history, so hitting the back button may not return to an earlier state of the page.
<br />
<br />
<div id="answer-26"></div>

### Explain how JSONP works (and how it's not really Ajax).
- JSON with Padding: a method commonly used to bypass the cross-domain policies in web browsers.
- AJAX requests are not allowed to a web page that is perceived to be on a server different by the browser.
<br />
<br />
<div id="answer-27"></div>

### Have you ever used JavaScript templating?
  ### If so, what libraries have you used?
- Javascript templating is a fast and efficient technique to render client-side templates with Javascript using a JSON data source. The template is HTML markup, peppered with tags that will either insert variables or run programming logic.

<br />
<br />
<div id="answer-28"></div>

### Explain "hoisting".
- A variable can be used before is has been declared.
- Variables defined while be moved to the top of the file. It will be checked to see if the variable is defined locally.

<br />
<br />
<div id="answer-29"></div>

### Describe event bubbling.
- When an event occurs on an element, it will run the handlers on it, and then on its parents (going from inner to outer)

<br />
<br />
<div id="answer-30"></div>

### What's the difference between an "attribute" and a "property"?
- HTML representation of a DOM element has attributes while those attributes in Javascript are represented as object properties.

<br />
<br />
<div id="answer-31"></div>


### Why is extending built-in JavaScript objects not a good idea?
- A browser may implement your version of the method, silently overriding.

<br />
<br />
<div id="answer-32"></div>


### Difference between document load event and document DOMContentLoaded event?
- DOMContentLoaded is fired when the document has been completely loaded and parsed, not waiting for assets like stylesheets and images.
- Load waits for a fully-loaded page


<br />
<br />
<div id="answer-33"></div>


### What is the difference between `==` and `===`?
- `==` will not check for types (tolerant) vs `===` checks for type and value

<br />
<br />
<div id="answer-34"></div>


### Explain the same-origin policy with regards to JavaScript.

<br />
<br />
<div id="answer-35"></div>


### Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

<br />
<br />
<div id="answer-36"></div>


### Why is it called a Ternary operator, what does the word "Ternary" indicate?
- The ternary operator takes THREE operands (arguments)

<br />
<br />
<div id="answer-37"></div>


### What is `"use strict";`? what are the advantages and disadvantages to using it?
- The purpose is to indicate that the code should be executed in 'strict mode'.
  **Advantages**
- Eliminates some Javascript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JS engines to perform optimizations - may run faster.
- Disables features that are confusing or poorly thought out.
  **Disadvantages**
- Browsers not supporting strict mode will run strict mode with different behaviro.

<br />
<br />
<div id="answer-38"></div>


### Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
```javascript
function fizz() {
  for (let i=1; i++; i < 100) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
      console.log("fizz");
    } elsif (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    }
  }
}
```

<br />
<br />
<div id="answer-39"></div>


### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
- It is harder to read the code and reason about it when variables seem to appear out of thin air
- Anyone can update a global variable from any point in the program at any time
- Javascript defaults all variables to the global scope unless they are explicitly defined.

<br />
<br />
<div id="answer-40"></div>


### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
- Useful when you want all content to be finished so if we need to work image of unknown sizes but can be really slow.
- `$(document).ready()`: fires when HTML has finished loading. We can only interact with the DOM once the HTML is fully loaded. However it is just for jQuery, so has to be included on all of your site.
- `DOMContentLoaded`: fired when document (DOM hierarchy) is fully loaded and parsed, without waiting for stylesheets and images. This is much faster than the `load` event 
<br />
<br />
<div id="answer-41"></div>

### Explain what a single page app is and how to make one SEO-friendly.
- Single page applications reduce the amount of page refreshes -- heavier use of AJAX to get data loaded. The process of rendering page happens mostly on the client-side.
- Careful thought must be put into search engine optimization so content is discoverable by searh engines/social media websites.
- One solution is to use Fallback pages which are HTML pages that are displayed if the requesting resource does not parse Javascript.
- Creating a custom 'share' UX elements and functionality including sharable URLs
- Using pushState: HTML5 includes the ability to manage the path of the URL as seen in the browser

<br />
<br />
<div id="answer-42"></div>

### What is the extent of your experience with Promises and/or their polyfills?
<br />
<br />
<div id="answer-43"></div>

### What are the pros and cons of using Promises instead of callbacks?
<br />
<br />
<div id="answer-44"></div>

### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
<br />
<br />
<div id="answer-45"></div>

### What tools and techniques do you use debugging JavaScript code?
<br />
<br />
<div id="answer-46"></div>

### What language constructions do you use for iterating over object properties and array items?
<br />
<br />
<div id="answer-47"></div>

### Explain the difference between mutable and immutable objects.
- Mutable object is an object whose state can be modified after it is created - only objects and arrays are mutable in JS.
- Immutables are objects whose state cannot be changed once the object has been created - Strings and Numbers (Results are allocated to a new block of memory)

<br />
<br />
<div id="answer-48"></div>

### What is an example of an immutable object in JavaScript?
  - String and Number

<br />
<br />
<div id="answer-49"></div>

### What are the pros and cons of immutability?

<br />
<br />
<div id="answer-50"></div>

### How can you achieve immutability in your own code?

<br />
<br />
<div id="answer-51"></div>

### Explain the difference between synchronous and asynchronous functions.
- Synchronous functions will be executed in the order they are called.
- Asynchronous functions do not wait, so other events can occur in parallel.

<br />
<br />
<div id="answer-52"></div>

### What is event loop?

### What is the difference between call stack and task queue?

<br />
<br />
<div id="answer-53"></div>

### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`


<br />
<br />
<div id="answer-54"></div>

### What are the differences between variables created using `let`, `var` or `const`?
<br />
<br />
<div id="answer-55"></div>

### What are the differences between ES6 class and ES5 function constructors?

<br />
<br />
<div id="answer-56"></div>

### Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?

<br />
<br />
<div id="answer-57"></div>

### What advantage is there for using the arrow syntax for a method in a constructor?

<br />
<br />
<div id="answer-58"></div>

### What is the definition of a higher-order function?

<br />
<br />
<div id="answer-59"></div>

### Can you give an example for destructuring an object or an array?

<br />
<br />
<div id="answer-60"></div>

### ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

<br />
<br />
<div id="answer-61"></div>

### Can you give an example of a curry function and why this syntax offers an advantage?

<br />
<br />
<div id="answer-62"></div>

### What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
- `spread syntax` - offers a quicker and easier way to **create**, **combine** arrays.
  ```javascript
    let toBeSpread = ["one", "two", "three"];
    let spread = [toBeSpread, ..."four"]
  ```
- `rest syntax` - offers offers convenient of passing in **undefinite** amount of arguments into a function.
<br />
<br />
<div id="answer-63"></div>

### How can you share code between files?

<br />
<br />
<div id="answer-64"></div>

### Why you might want to create static class members?

[Back to JavacScript Interview Questions](/interviewQuestions/javascript-interview-questions.md)
