# Common CSS Interview Questions

#### <div id="css-a-01"> What are the three main ways to add CSS to a webpage? Advantages and disadvantages?</div>
- **Inline CSS**: written directly into the HTML element as a style attribute. Able to override other style specifications. Only works if there are a limited number of style definitions.
- **External Style Sheets**: written as `link`, separate style from content and control multiple HTML documents from a single separate file. However, it must be downloaded first in order for the HTML file to render properly.
- **Embedded CSS**: written as `<style>` tags inside the `<head>` section of an HTML document. Loads with the HTML document unlike the external style sheets. However, any other HTML documents would not inherit the styling within these tags.

#### <div id="css-a-02"> What are CSS media queries and what are they used for?</div>
- Used to make reponsive web design possible, can apply CSS styles depending on the device
- Able to adjust style depending on the height, width, orientation, display type and etc.

#### <div id="css-a-03"> What is CSS selector specificity and how does it work?</div>
- Patterns used to select the element(s) you want to style.

#### <div id="css-a-04"> What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?</div>
- This is essential because every browser has a default setting. 
- `Resetting` - Means user override the styles across different browser, usually with a value of 0.
- `Normalizing` - Means user gives a default setting for all browsers.

#### <div id="css-a-05"> Describe Floats and how they work.</div>
- Float is a CSS positioning property. To understand its purpose and origin, we can look to print design. In a print layout, images may be set into the page such that text wraps around them as needed. This is commonly and appropriately called "text wrap".

#### <div id="css-a-06"> Describe z-index and how stacking context is formed.</div>
- Z-index controls the vertical stacking order of elements that overlap.
- Stacking context is a three-dimensional conceptualization of HTML elements an imaginary z-axis relative to the user. Stacking contexts are treated as a single unit in the parent stacking context.

#### <div id="css-a-07"> Describe BFC(Block Formatting Context) and how it works.</div>
- The region in which the layout of block boxes occurs and in which floats interact with other elements. The positioning and clear of floats apply only to the elements in the same block formatting context.

#### <div id="css-a-08"> What are the various clearing techniques and which is appropriate for what context?</div>
- The problem with floated object is that they don't add to the height of the object they reside in properly. To solve this problem, we clear the float.
- First way (Old School Method): `.clear { clear: both; }`
- Second way (Overflow): `.clear { overflow:hidden; }`

#### <div id="css-a-09"> How would you approach fixing browser-specific styling issues?</div>

#### <div id="css-a-10"> How do you serve your pages for feature-constrained browsers?</div>

  #### <div id="css-a-11"> What techniques/processes do you use?</div>
#### <div id="css-a-12"> What are the different ways to visually hide content (and make it available only for screen readers)?</div>
- `.hide { display: none; }`

#### <div id="css-a-13"> Have you ever used a grid system, and if so, what do you prefer?</div>
#### <div id="css-a-14"> Have you used or implemented media queries or mobile specific layouts/CSS?</div>
#### <div id="css-a-14"> Are you familiar with styling SVG?</div>
#### <div id="css-a-14"> Can you give an example of an `@media` property other than `screen`?</div>
#### <div id="css-a-14"> What are some of the "gotchas" for writing efficient CSS?</div>
#### <div id="css-a-14"> What are the advantages/disadvantages of using CSS preprocessors?</div>
  #### <div id="css-a-14"> Describe what you like and dislike about the CSS preprocessors you have used.</div>
#### <div id="css-a-14"> How would you implement a web design comp that uses non-standard fonts?</div>
#### <div id="css-a-14"> Explain how a browser determines what elements match a CSS selector.</div>
#### <div id="css-a-14"> Describe pseudo-elements and discuss what they are used for.</div>
#### <div id="css-a-14"> Explain your understanding of the box model and how you would tell the browser in </div>CSS to render your layout in different box models.
#### <div id="css-a-14"> What does ```* { box-sizing: border-box; }``` do? What are its advantages?</div>
#### <div id="css-a-14"> What is the CSS `display` property and can you give a few examples of its use?</div>
#### <div id="css-a-14"> What's the difference between inline and inline-block?</div>
#### <div id="css-a-14"> What's the difference between a relative, fixed, absolute and statically positioned element?</div>
#### <div id="css-a-14"> What existing CSS frameworks have you used locally, or in production? How would you change/improve them?</div>
#### <div id="css-a-14"> Have you played around with the new CSS Flexbox or Grid specs?</div>
#### <div id="css-a-14"> Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?</div>
#### <div id="css-a-14"> Have you ever worked with retina graphics? If so, when and what techniques did you use?</div>
#### <div id="css-a-14"> Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?</div>


[Back to Home](/README.md)
