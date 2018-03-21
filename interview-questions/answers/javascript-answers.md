
### <div id="js-a-01">How would you empty the array?</div>
  - Method 1: `array = []`
  - Method 2: `array.length = 0`
  - Method 3: `array.splice(0,array.length)`
  - Method 4: `while (array.length > 0) { array.pop(); }`
  
[StackOverflow: How do I empty an array in JS?](https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript)
 
### <div id="js-a-02">How do you clone an object?</div>
  - `Object.clone(obj)` : shallow clone
  - `Object.assign({}, obj)` : deep clone
  - `JSON.parse(JSON.stringify(obj))`: deep clone
  
  ```javascript
    let obj = {
        a: 1,
        b: 2,
        c: {
            age: 30
        }
    };
    var objclone = Object.assign({},obj);
    console.log('objclone: ', objclone);

    obj.c.age = 45;
    console.log('After Change - obj: ', obj);           // 45 
    console.log('After Change - objclone: ', objclone); // 45 - This also changes

    let shallow_dup1 = Object.clone(obj) // shallow clone, which means nested objects ain't copied.
    let deep_dup1 = Object.assign({}, obj); // deep clone
    let deep_dup2 = JSON.parse(JSON.stringify(obj)) // faster
  ``` 
 
   [See Medium: Objects in JS: object.assign deep copy](https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab)

### <div id="js-a-03">What is difference between `proto` vs `__proto__`?</div>
  **`Object.prototype`**
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

    [See MDN Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

    [See MDN Proto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
 


### <div id="answer-04">Explain how prototypal inheritance works?</div>
  - **A prototype is a working object instance and objects inherit directly from other objects.**
  - Instances allows for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. 
  - Class taxonomies are not an automatic side-effect of prototypal OO.
  - JS Object inherit their properties and methods from their prototype.
  - The prototype property is an object, and it has a constructor property by default which allows yo to add new properties and methods to existing objects types.
  - __proto__ : when an object is created in JAvaScript, JavaScript Engine adds a __proto__ property to the newly created object; it points to the prototype object of the constructor function. 
  [See TianyuDuan: Prototypal Inheritance](https://github.com/tianyuduan/JS30/blob/master/PrototypalInheritance/prototype.md)
 
### <div id="answer-05">How to merge two JavaScript Objects?</div>
  - Use `Object.assign({}, obj)`
  - if you choose to use `merge`, remember to mention that you need to import from `lodash`.
 
[Back to JavacScript Interview Questions](/interview-questions/questions/javascript-interview-questions.md)

### <div id="answer-06">How to test whether a value is NaN?</div>
  - `isNaN(value)`: method to check to see if a value is NaN. 
  ```javascript
    isNaN('abcd');  //  true
    isNaN('2.0');  //  false
    isNaN(2.0);  //  false
  ```
  
  - Since NaN is the only JavaScript value that is treated as unequal to itself, you can always test if a value is NaN by checking it for equality to itself:
  ```javascript
    var a = NaN;
    a !== a; // true 

    var b = "foo";
    b !== b; // false 

    var c = undefined; 
    c !== c; // false

    var d = {};
    d !== d; // false

    var e = { valueOf: "foo" }; 
    e !== e; // false
  ```
[StackOverflow: How do you check that a number is NaN in JavaScript](https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript)
 
[A Drip of JavaScript: The Problem with Testing for NaN in JavaScript](http://adripofjavascript.com/blog/drips/the-problem-with-testing-for-nan-in-javascript.html)

### <div id="answer-07">Explain event delegation.</div>
  - **Event Delegation** is a behavior where when you select an element, 
  additional elements under similar hierarchy will also be selected. 
  - **Capturing** and **Bubbling** allow to implement one of most powerful event handling patterns called event delegation.
  - The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
  - In the handler we get event.target, see where the event actually happened and handle it.

  [See JavaScript Info: Event Delegation](https://javascript.info/event-delegation)

### <div id="answer-08">Explain how `this` works in JavaScript?</div>
  - The value of `this` is determined by how a function is called. It CANNOT be set by assignment during execution, and it may be different each time the function is called.
  - `This` works slightly differently during `strict` mode and `non-strict` mode.

### <div id="answer-09">What do you think of AMD vs CommonJS?</div>
  - `AMD`: Asynchronous Module Definition - is another specification for modules. For example: ReS. It is generally more used in client-side(in-browser) JavaScript development due to this. 
  [JavaScript Module Systems Showdown](https://auth0.com/blog/javascript-module-systems-showdown/)
 
### <div id="answer-10">Explain why the following doesn't work as an IIFE: `function foo(){ }();`.</div>
  - `IIFE` - **Immediately Invoked Function Expressions**
  - This reduces a lexical scope using JavaScript's function scoping. 
  - This example doesn't work because it needs a wrapper. 

  - The JavaScript parser reads `function foo(){ }(); `as `function foo(){ }` and `()`;, 
  where the former is a function declaration and the latter (a pair of brackets) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token.
  
### <div id="answer-11">What needs to be changed to properly make it an IIFE?</div>
  - Here are two ways to fix it that involves adding more brackets: `(function foo(){ })()` and `(function foo(){ }())`. These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.
  - Proper way to make it IIFE is:
  ```javascript
  (function foo(){ })();
  ```
  OR
  ```javascript
  (function foo(){ }());
  ```
### <div id="answer-12">What is the difference between a variable that is: `null`, `undefined` or `undeclared`?</div>
  - `null` - is primitive type; can be assigned to variable; has no value.
  - `undefined` - variable is declared, but has yet to be assigned a value. 
  - `undeclared` - variable is not declared at all --> will return Reference error
 
### <div id="answer-13">How would you go about checking for any of these states?</div>
- Although there are many approaches to check for these states. I would say the key thing is to be able to console.log the output at certain point in your code. The following offer several good ways: 
```javascript
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true
```
 
### <div id="answer-14">What is a closure, and how/why would you use one?</div>
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
 


### <div id="answer-15">Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?</div>
- They are both iteration methods.
- `forEach()` - executes a provided function once for each array element.
- `forEach()` - may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out:
- `.map()` - creates a new array with the results of calling a provided function on every element in the calling array.
- `map()` - might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
 


### <div id="answer-16">What's a typical use case for anonymous functions?</div>
** Check the answers one more time **
- Generally speaking, an anonymous function is not a preferred practice in your coding.
However, a typical use case of anonymous function is callback, 
you can use a function as a callback if you do not need to repeatedly use the same function in other circumstance.
- Anonymous functions are `function expressions`, so we can assign functions to variables and object properties or pass them as arguments.
  ```javascript
    let noName = function() {
      console.log("I have no name!")
    }
  ```
 


### <div id="answer-17">How do you organize your code? (module pattern, classical inheritance?)</div>
** Check the answers one more time **
** I feel like this is a good place to also talk about programing paradigm. **
- From an OOP (Object Oriented Programming perspective), it is recommend that you group similar functions of codes together as a group, which means this can become a module, then the way to access each module is by exporting it, 
and importing it if you need to access them from another function.
- Classical inheritance is similar idea and is also a good option to consider, 
however, since in JavaScript you can also use prototype inheritance,
it is a better practice to use prototype inheritance over class so that you won't modified the original constructor.
 

### <div id="answer-18">What's the difference between host objects and native objects?</div>
- `Host objects` - objects supplied by the host environment to complete the execution environment. Ex: (assuming browser environment) window, document, location, etc.
- `Native objects` - standard built-in objects provided by Javascript. Ex: Date, Math, Object (constructor)

### <div id="answer-19">Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? </div>
- They are all ways to declare a function.
- `function Person(){}` - function declaration, function is declared but is not executed
- `var person = Person()` - function expression, the variable `var person` has been defined and contains a value reference to a Person function. Javascript expressions always return a value.
- `var person = new Person()` - function constructor, when we add the keyword 'new', we are instantiating a new object of the Person class constructor.
 
### <div id="answer-20">What's the difference between `.call` and `.apply`?</div>
They differ in how they handle function arguments:
- `.call` - requires the arguments to be listed individually.
- `.apply` - allows you to invoke the function with `arguments` array as the second argument.
 


### <div id="answer-21">Explain `Function.prototype.bind`.</div>
- This is same as explaining what bind() is. 
**From MDN:**
The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. **
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
 
### <div id="answer-22">When would you use `document.write()`?</div>
`document.write` -  is executed after the page has been loaded. It will clear the contents of the whole page and rewrite them with something you define.
- It was an old way of adding elements to a webpage; it only works while the page is loading
- Used when including third party code (ads or Google Analytics)
- Because there's no DOM modification, it works fast. If a lot of text needs to be added into HTML dynamically and the page is still loading, it may help to use `document.write()`
 
### <div id="answer-23">What's the difference between feature detection, feature inference, and using the UA string?</div>
- These are three ways to determine if a particular web technology feature exists in a user's browser or environment.
- `Feature detection` - a way of determining if a feature exists in the browser
- `Feature inference` - a feature is determined to exist and the next web technology feature to be implemented is assumed to exist as well.
- `UA String` - User Agent String; a string of text of data that each browser sends and can be accessed via navigator.userAgent. This string text contains information about the browser environment that is being targeted.
 
### <div id="answer-24">Explain Ajax in as much detail as possible.</div>
- Asynchronous Javascript + XML
- The use of XMLHttpRequest object to communicate with servers; information can be sent in different formats such as JSON, XML, HTML.
- Its asynchronous nature allows it to communicate with server, exchange data, and update the page without refreshing the page.

### <div id="answer-25">What are the advantages and disadvantages of using Ajax?</div>
**Advantages**:
- Reduces traffic between the client and the server
- Response time is faster, increasing performance and speed (optimization)
- Improves user experience
- The alternative to use JSON

**Disadvantages**:
- Could increase design and development time - difficult to debug and increases code size of webpage
- Browser incompatibility because AJAX depends on Javascript which is implemented differently across different browsers
- Pages that are dynamically created using AJAX request do not automatically register with the browser's history, so hitting the back button may not return to an earlier state of the page.

### <div id="answer-26">Explain how JSONP works (and how it's not really Ajax).</div>
- JSON with Padding: a method commonly used to bypass the cross-domain policies in web browsers.
- AJAX requests are not allowed to a web page that is perceived to be on a server different by the browser.
 

### <div id="answer-27">Have you ever used JavaScript templating?</div>
  #### If so, what libraries have you used?
- Javascript templating is a fast and efficient technique to render client-side templates with Javascript using a JSON data source. The template is HTML markup, peppered with tags that will either insert variables or run programming logic.



### <div id="answer-28">Explain "hoisting".</div>
- A variable can be used before is has been declared.
- Variables defined while be moved to the top of the file. It will be checked to see if the variable is defined locally.
 


### <div id="answer-29">Describe event bubbling.</div>
- When an event occurs on an element, it will run the handlers on it, and then on its parents (going from inner to outer).
 


### <div id="answer-30">What's the difference between an "attribute" and a "property"?</div>
- HTML representation of a DOM element has attributes while those attributes in Javascript are represented as object properties.
 


### <div id="answer-31">Why is extending built-in JavaScript objects not a good idea?</div>
- A browser may implement your version of the method, silently overriding.
 


### <div id="answer-32">Difference between document load event and document DOMContentLoaded event?</div>
- DOMContentLoaded is fired when the document has been completely loaded and parsed, not waiting for assets like stylesheets and images.
- Load waits for a fully-loaded page
 


### <div id="answer-33">What is the difference between `==` and `===`?</div>
- `==` will not check for types (tolerant) vs `===` checks for type and value
 


### <div id="answer-34">Explain the same-origin policy with regards to JavaScript.</div>
 


### <div id="answer-35">Make this work:</div>
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
    function duplicate(arr) {
      return arr.concat(arr)
    }
```



### <div id="answer-36">Why is it called a Ternary operator, what does the word "Ternary" indicate?</div>
- The ternary operator takes THREE operands (arguments)
 


### <div id="answer-37">What is `"use strict";`? what are the advantages and disadvantages to using it?</div>
- The purpose is to indicate that the code should be executed in 'strict mode'.
  **Advantages**
- Eliminates some Javascript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JS engines to perform optimizations - may run faster.
- Disables features that are confusing or poorly thought out.
  **Disadvantages**
- Browsers not supporting strict mode will run strict mode with different behaviro.
 


### <div id="answer-38">Create a for loop that iterates up to `100` while outputting **"fizz"** at </div>multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
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
 


### <div id="answer-39">Why is it, in general, a good idea to leave the global scope of a website as-is </div>and never touch it?
- It is harder to read the code and reason about it when variables seem to appear out of thin air
- Anyone can update a global variable from any point in the program at any time
- Javascript defaults all variables to the global scope unless they are explicitly defined.

 


### <div id="answer-40">Why would you use something like the `load` event? Does this event have </div>disadvantages? Do you know any alternatives, and why would you use those?
- Useful when you want all content to be finished so if we need to work image of unknown sizes but can be really slow.
- `$(document).ready()`: fires when HTML has finished loading. We can only interact with the DOM once the HTML is fully loaded. However it is just for jQuery, so has to be included on all of your site.
- `DOMContentLoaded`: fired when document (DOM hierarchy) is fully loaded and parsed, without waiting for stylesheets and images. This is much faster than the `load` event 
 


### <div id="answer-41">Explain what a single page app is and how to make one SEO-friendly.</div>
- Single page applications reduce the amount of page refreshes -- heavier use of AJAX to get data loaded. The process of rendering page happens mostly on the client-side.
- Careful thought must be put into search engine optimization so content is discoverable by searh engines/social media websites.
- One solution is to use Fallback pages which are HTML pages that are displayed if the requesting resource does not parse Javascript.
- Creating a custom 'share' UX elements and functionality including sharable URLs
- Using pushState: HTML5 includes the ability to manage the path of the URL as seen in the browser
 


### <div id="answer-42">What is the extent of your experience with Promises and/or their polyfills?</div>
- Promises are objects which represent the eventual successful complete or failure of an asynchronous operation and its resulting value.
- A promise has three different states: fulfilled, rejected, or pending.
- Instead of passing a callback to the promise, we chain a callback using `.then()` to the promise.
 


### <div id="answer-43">What are the pros and cons of using Promises instead of callbacks?</div>
- Pros: functions can bee added anywhere in the code, subject only to the promise being within scope. functions added after a settled promise will fire immediately.
- Cons: Promises always require at least one more iteration of the event loop to resolve.
 


### <div id="answer-44">What are some of the advantages/disadvantages of writing JavaScript code in a </div>language that compiles to JavaScript?
 


### <div id="answer-45">What tools and techniques do you use debugging JavaScript code?</div>
- Browser Developer Tools -- check for any error messages/console.log()
- breakpoints - using a debugger, current context of the current scope is available
- Avoid logging reference types - the values of primitive types inside the logged reference may change. 
 


### <div id="answer-46">What language constructions do you use for iterating over object properties and </div>array items?
- for loops
- array methods like `Array.prototype.forEach()`
- listing property keys: combine `Object.keys()` or `Object.getOwnPropertyNames()` with `forEach()`
 
### <div id="answer-47">Explain the difference between mutable and immutable objects.</div>
- Mutable object is an object whose state can be modified after it is created - only objects and arrays are mutable in JS.
- Immutables are objects whose state cannot be changed once the object has been created - Strings and Numbers (Results are allocated to a new block of memory)
  [Medium: Mutable and Mutable Side of Python](https://medium.com/@meghamohan/mutable-and-immutable-side-of-python-c2145cf72747)

### <div id="answer-48">What is an example of an immutable object in JavaScript?</div>
  - String and Number
 


### <div id="answer-49">What are the pros and cons of immutability?</div>
 


### <div id="answer-50">How can you achieve immutability in your own code?</div>



### <div id="answer-51">Explain the difference between synchronous and asynchronous functions.</div>
- Synchronous functions will be executed in the order they are called.
- Asynchronous functions do not wait, so other events can occur in parallel.
 


### <div id="answer-52">What is event loop?</div>

### What is the difference between call stack and task queue?
 


### <div id="answer-53">Explain the differences on the usage of `foo` between `function foo() {}` and </div>`var foo = function() {}`
 


### <div id="answer-54">What are the differences between variables created using `let`, `var` or `const`?</div>
  **The biggest difference is the scope of the variable created using each keyword**
  * `var`: 
        - Allows the variable to be hoisted.
        - The variable may be reassigned (There are exceptions).
        - The variable may be used for an entire function, or just for the purpose of a block or loop (There are exceptions).
  ```javascript
    function(){
      for(var i = 0; i<5; i++) {
        console.log(i) // 0, 1, 2, 3, 4
      }
      console.log(i) // 5
    } 
  ```
  **VS** 
  ```javascript
  function printing(){
    for(var i = 0; i<5; i++) {
      console.log(i) // 0, 1, 2, 3, 4
    }
  }
  printing()
  console.log(i) // undefined
  ```

  * `let`: 
        - Does NOT allow the variable to be hoisted.
        - More strict in scope compare with `var`.
        - CANNOT re-declare variable, 
        - CAN re-assign the value.
  ```javascript
  for(let i = 0; i<5; i++) {
    console.log(i); // 0, 1, 2, 3, 4;
  }
  console.log(i) // reference error
  ```
  * `const`: 
        - CANNOT reassign value to variable once declared.
        - CANNOT re-assign the value (except for array, hash).

[Medium: Javascript variables; should you use let, var or const?](https://medium.com/craft-academy/javascript-variables-should-you-use-let-var-or-const-394f7645c88f)

 
 


### <div id="answer-55">What are the differences between ES6 class and ES5 function constructors?</div>

 
 


### <div id="answer-56">Can you offer a use case for the new arrow `=>` function syntax? How does this </div>new syntax differ from other functions?
- if you use `=>` (Fat Arrow), you do not have to worry about binding.


 
 


### <div id="answer-57">What advantage is there for using the arrow syntax for a method in a constructor?</div>

 
 


### <div id="answer-58">What is the definition of a higher-order function?</div>
- A `HIGHER ORDER FUNCTION` is a function that takes a function as an argument, or returns a function.


[Medium : Higher Order Functions (Composing Software)](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)

 
 


### <div id="answer-59">Can you give an example for destructuring an object or an array?</div>

 
 


### <div id="answer-60">ES6 Template Literals offer a lot of flexibility in generating strings, can you </div>give an example?

 
 


### <div id="answer-61">Can you give an example of a curry function and why this syntax offers an </div>advantage?
  ```javascript
  // using spread
  Function.prototype.curry = function (numArgs){
    const args = [];
    const fn = this; // so that we have access to outer function in the inner function
    function _curriedFn(arg) {
      args.push(arg);

      if(args.length === numArgs){
        return fn(...args);
      } else {
        return _curriedFn;
      }
    }
    return _curriedFn;
  };

  function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  let cur = sumThree.curry(3)(4)(20)(6);
  console.log(cur); // 30
  ```
 
 


### <div id="answer-62">What are the benefits of using `spread syntax` and how is it different from `rest </div>syntax`?
- `spread syntax` - offers a quicker and easier way to **create**, **combine** arrays.
  ```javascript
    let toBeSpread = ["one", "two", "three"]; // ["one", "two", "three"]
    let spread = [toBeSpread, ..."four"]; // ["one", "two", "three", "four"]
  ```
- `rest syntax` - offers offers convenient of passing in **indefinite** amount of arguments into a function.
```javascript
  function say(...words){
    console.log()
  }
```
 
 


### <div id="answer-63">How can you share code between files?</div>
- You can use create a module to wrap the codes into one object, and then import the modules from another file.

 
 


### <div id="answer-64">Why you might want to create static class members?</div>
- `static method` - a method that only exists on the class, not on the child objects
- `instance method` - a method will be available for all object 
  ```javascript
  //Constructor
  var Person = function (name, age){
      //private properties
      var priv = {};
      
      //Public properties
      this.name = name;
      this.age = age;
      
      //Public methods
      this.sayHi = function(){
          console.log('hello');
      }
  }

  // A static method; this method only 
  // exists on the class and doesn't exist 
  // on child objects
  Person.sayName = function() {
      console.log("I am a Person object");  
  };

  // An instance method; 
  // All Person objects will have this method
  Person.prototype.setName = function(nameIn) {
      this.name = nameIn;  
  }

  // Tests Case: 
  var per = new Person('John Doe', 22);

  Person.sayName(); // 'I am a Person Object'
  Person.sayHi(); // TypeError: Person.sayHi is not a function
  per.sayName(); // TypeError: Object [object Object] has no method 'sayName'
  per.sayHi(); // 'hello'
  per.name;  // John Doe
  Person.name; // 'Person'
  per.age;   //22
  Person.age; // undefined
  per.setName('Jane Doe');
  per.name;   //Jane Doe
  Person.setName('John Doe') // TypeError: Person.setName is not a function;
  ```
  [Resource: Static and Instance Method in JavaScript](https://abdulapopoola.com/2013/03/30/static-and-instance-methods-in-javascript/)

### <div id="answer-65">What is the difference between Function and Method?</div>
  - Both functions and methods are functions in JavaScript.
  - In javascript every function is an object. An object is a collection of key:value pairs. If a value is a primitive (integer, string, boolean), or another object, the value is considered a property. If a value is a function, it is called a 'method'.
  - `Function` (not associate with object):
    ```javascript
    function functionObject(){
      // somecode...
    }
    ``` 
  - `Method`(associate with object): 
    ```javascript
    var methodObject = {
        attribute: "xyz",
        display: function () {  // Method
            console.log(this.attribute);
        }
    };
    ```
  [Stackoverflow: Method vs Functions, and other questions](https://stackoverflow.com/questions/15285293/method-vs-functions-and-other-questions)

### <div id="js-a-66">What is difference between `parseInt()` and `Number()` ?</div>
  - `parseInt()` will parses up to the first non-digit numbers inside string.
  - `Number()` will convert whole string into numbers.
  
  ```javascript
    parseInt("123hui") // returns 123
    Number("123hui") // return NaN
  ```
   -  NOTE: parseInt("") will return NaN, whereas Number("") will return 0.
   
   [Stackoverflow: What is the difference between parseInt(string) and Number(string) in JavaScript?](https://stackoverflow.com/questions/4564158/what-is-the-difference-between-parseintstring-and-numberstring-in-javascript)
 
### <div id="js-a-67">What are ways to Enumerate properties of an Object?</div>
  - `for...in loops`: This method traverses all enumerable properties of an object and its prototype chain
  - `Object.keys(o)`: This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
  - `Object.getOwnPropertyNames(o)`: This method returns an array containing all own properties' names (enumerable or not) of an object o.
  
  [Medium: Objects in JS: object.assign deep copy](https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab)

[Back to JavacScript Interview Questions](/interviewQuestions/javascript-interview-questions.md)
