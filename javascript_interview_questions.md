# JavaScript Interview Questions 

## Basic

### Q001. How would you empty the array?
- use slice, splice method
- use array.length = 0;

### How do you clone an object? 
- Use Object.Assign({}, obj)
- Use JSON.parse(JSON.stringify(obj)) // faster

### What is difference between .proto vs __proto__
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

### Understand prototype inheritance: 
Resource: `https://github.com/tianyuduan/JS30/blob/master/PrototypalInheritance/prototype.md` 
- JS Object inherit their properties and methods from their prototype.
- The prototype property is an object, and it has a constructor property by default which allows yo to add new properties and methods to existing objects types.
- __proto__ : when an object is created in JAvaScript, JavaScript Engine adds a __proto__ property to the newly created object; it points to the prototype object of the constructor function. 

### How to merge two JavaScript Objects 

### How to test whether a value is NaN? 

### How to 
