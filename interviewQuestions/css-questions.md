# Common CSS Interview Questions

#### Q001. What are the three main ways to add CSS to a webpage? Advantages and disadvantages?
- **Inline CSS**: written directly into the HTML element as a style attribute. Able to override other style specifications. Only works if there are a limited number of style definitions.
- **External Style Sheets**: separate style from content and control multiple HTML documents from a single separate file. However, it must be downloaded first in order for the HTML file to render properly.
- **Embedded CSS**: written as <style> tags inside the <head> section of an HTML document. Loads with the HTML document unlike the external style sheets. However, any other HTML documents would not inherit the styling within these tags.

#### Q002. What are CSS media queries and what are they used for?
- Used to make reponsive web design possible, can apply CSS styles depending on the device
- Able to adjust style depending on the height, width, orientation, display type

#### Q003. What is CSS selector specificity and how does it work?
- patterns used to select the element(s) you want to style.
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

#### Q004. Describe Floats and how they work.
- Float is a CSS positioning property. To understand its purpose and origin, we can look to print design. In a print layout, images may be set into the page such that text wraps around them as needed. This is commonly and appropriately called "text wrap".

* Describe z-index and how stacking context is formed.
* Describe BFC(Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* Can you give an example of an `@media` property other than `screen`?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* What is the CSS `display` property and can you give a few examples of its use?
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
