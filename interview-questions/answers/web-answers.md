# Web Developer Common Interview Answer:

## HTML / CSS / JavaScript / DevTool

#### What is the importance of Doctype in HTML?
- Doctype tells the browser which version of HTML/XHTML standard is used and how to render the page.

#### What is the difference between `display: none` and `visibility: hidden` ?
A: - `display: none`: removes the element from the flow, allowing other elements to fill in.
   - `visibility: hidden`: only hides the element, but space is allocated for it on the page.

#### Consider the following code: What font-siz will have the text inside the <p> element?
```html
<div> Lorem ipsum
  <p> Lorem ipsum</p>
</div>
```
```css
  div {
    font-size: 16px;
  }
  p {
    font-size: 0.5em;
  }
```
A: - 8px, because `em` units represent percentage of its parent. In this case it is a half of 16px.

#### What is the difference between `sessionStorage` and `localStorage`?
A: - sessionStorage is available only when a browser's tab is opened.
   - localStorage survives on closing and reopening a browser.

#### What are `data-attributes`?
A: - Data-attributes are used to store custom data directly inside HTML tags. They are easily-accessible from CSS and JavaScript.

#### Explain the difference between Normalize CSS and Reset CSS?
A: - Resetting removes all the native styles provided by browsers.
   - Normalizing is just a correction of some common bugs. 

#### What are sprites, what is their purpose?
A: - CSS sprite is merging multiple images into a single image.
   - It reduces the amount of WEB-requests and increases page speed.

#### What is SVG? 
A: - SVG stands for `Scalable Vector Graphics`, it is used to show vector graphics on the page. The biggest benefit is that SVG images don't lose quality when zoomed or resized(unliked JPG). 
   - You can easily change the size, color and animate SVG images. 
   - SVG's also can be bundled in a SVG-sprite.

#### What are the new features of HTML5 standard?
A: - `New semantic elements`: <nav>, <article>, <section>, <header>, <footer>, <aside>
   - `New form controls`: <calendar>, <date>, <time>, <email>, <url>, <search>
   - `Better support for embedded media using`: <audio>, <video>, <canvas>

#### What is a CSS preprocessor?
A: - CSS preprocessor is a tool which allows you to create CSS.
   - Code much faster, in a more structured manner.
   - Preprocessors extend the CSS functional by adding variables, mixins, partials, also allow to use operators inside the code.

#### What is microdata?
A: - Microdata is a set of additional HTML tags for specifying the additional semantic information to help the search engines read your site properly.

#### What tags are used to make a table?
A: - `<table>`: for wrapping a table.
   - `<th>`   : represents the table heading
   - `<tr>`   : creates a table row that store the data elements.
   - `<td>`   : represent column in a row.

#### What is the CSS Box Model?
A: - Box model represents a structured way to space elements in relationship to each other.
   - It is made of margins, borders, padding, and content.
   - When the pages is being rendered, the browser shows each of the elements as a rectangular which can be styled using CSS.

#### What is priority order of CSS selectors?
A: - `!important` > `id` > `class` > `element tag`

#### What is the reason for wrapping the entire content of a JavaScript source file in a function?
A: - This is a one of best-practice which creates a private namespace and thereby helps avoid potential name conflicts between different JavaScript functions and external libraries.

#### How would you inspect a hover state of an element in the devtools?
A: - (Open devTools - top right corners)

#### What is the difference between "==" and "===" operators in JavaScript?
A: - The "===" operators behaves identically to the equality "==" operator, but more strictly, the types must be the same to be considered equal. 

#### What kinds of loops are in JavaScript?
A: - `for`      : goes through an inner code a number of times.
   - `for/in`   : used for looping through the properties of an object 
   - `while`    : goes through an inner code while a specified condition is true
   - `do/while` : also goes through a block of code while a specified condition is true


[Back to Web Developer Interview Questions](/interviewQuestions/web-developer-interview-questions.md)

[Back to Home](/README.md)

