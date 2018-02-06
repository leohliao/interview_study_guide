#Common CSS Interview Questions

###Question: What are the three main ways to add CSS to a webpage? Advantages and disadvantages?
- **Inline CSS**: written directly into the HTML element as a style attribute. Able to override other style specifications. Only works if there are a limited number of style definitions.
- **External Style Sheets**: separate style from content and control multiple HTML documents from a single separate file. However, it must be downloaded first in order for the HTML file to render properly.
- **Embedded CSS**: written as <style> tags inside the <head> section of an HTML document. Loads with the HTML document unlike the external style sheets. However, any other HTML documents would not inherit the styling within these tags.