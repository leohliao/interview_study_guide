# Coding Questions:

### Question: What is the value of `foo`?
```javascript
var foo = 10 + '20';
```
'1020' - adding an integer and a string will return a string

### Question: What will be the output of the code below?
```javascript
console.log(0.1 + 0.2 == 0.3);
```
false - In programming languages, floating point representation aren't accurate but approximate

### Question: How would you make this work? 
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

```javascript
function add(numArgs) {
  const numbers = [];

  function _add(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach(n => { total += n;});
      return total;
    } else {
      return _add;
    }
  }
  return _add;
}

```
### Question: What value is returned from the following statement? 
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```
'goh angasal a m\'i' - `split("")` creates an array of individual characters in the string, `reverse` reverses the array, `join("")` creates a string of the reversed array

### Question: What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

### Question: What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

### Question: What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
2

### Question: What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```


### Question: What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

### Question: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

### Question: What is the output of the following? 
```javascript
console.log("A" - "B" + "2"); // "NaN2"
console.log("A" - "B" + 2);  // "NaN"
```

### Question: THIS 
```javascript
var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func()); // 42
```

### Question: `This` in Global Context
```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

### What will the code below output to the console and why?
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // outer func:  this.foo = bar  
        console.log("outer func:  self.foo = " + self.foo); // outer func:  self.foo = bar   
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // inner func:  this.foo = undefined   
            console.log("inner func:  self.foo = " + self.foo); // inner func:  self.foo = bar     
        }());
    }
};
myObject.func();
```
In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.

In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there.


#### What will this ouptut to?
```javascript
 var outerFunction = function() {
      var x = 5;
      var nestedFunction = function() {
        var y = 7;
        console.log("X: " + x); // What will this print?
        console.log("Y: " + y); // What will this print?
        var z = 10;
        console.log("Z (inside): " + z); // What will this print?
      };
      return nestedFunction;
    };

    var myFunction = outerFunction();
    myFunction();
    console.log("Z (outside): " + z); // What will this print?
```

#### What will this output to?
```javascript
 var cat = {
      name: "Gus",
      color: "gray",
      age: 15,

      printInfo: function() {
        console.log(this); // What will this print? 
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); // What will this print? 
        var nestedFunction = function() {
          console.log("inside nestedFunction()");
          console.log(this); // What will this print? 
          console.log("Name:", this.name, "Color:", this.color, "Age:", this.age); // What will this print?
        };
        nestedFunction();
      }
    };
    cat.printInfo(); // calls the printInfo function. Which subsequently calls the nestedFunction()
```

#### What will this output to?
```javascript
 // Example One: Global Scope
    // -------------------------------------------
    var a = 1;
    function one() {
      alert("One: " + a);
    }
    one(); // What will get alerted?
    // Example Two: Local Scope
    // -------------------------------------------
    function twotop() {
      function two(a) {
        alert("Two: " + a);
      }
      two(a);
    }
    twotop(); // What will get alerted?

    // Example Three: Local Scope
    // -------------------------------------------
    var a = 5;
    function three() {

      var a = 3;
      alert("Three: " + a);
    }
    three(); // What will get alerted?
    // Example Four: Local Scope
    // -------------------------------------------
    function first() {
      var a = 5;
      function second() {
        var a = 3;
        function third() {
          alert("Four: " + a);
        }
        third();
      }
      second();
      alert("Five: " + a);
    }
    first(); // What will get alerted?
```

#### What this output to ?
```javascript
    // Situation 1
    // ------------------------------------------
    var myVar1 = 1;

    function a1() {
      myVar1 = 5 - 3;
      b1();
      alert("Q1 | a: " + myVar1);
    }

    function b1() {
      alert("Q1 | b: " + myVar1);
    }
    a1();


    // Situation 2
    // ------------------------------------------
    var myVar2 = 1;

    function a2() {
      var myVar2 = 5 - 3;
      b2();
      alert("Q2 | a: " + myVar2);
    }

    function b2() {
      alert("Q2 | b: " + myVar2);
    }
    a2();
```


[Back to Home](/README.md)