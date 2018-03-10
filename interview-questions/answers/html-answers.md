#HTML Interview Questions:

### What does a `doctype` do?
- A `Doctype` is used to instruct the browser about the version of our HTML document.
- In we ommited `<!Doctype>` element in the doucment, it will go into `Quirk Mode`, 
which means the handling of HTML element depends on the browser and thus will vary.

### How do you serve a page with content in multiple languages?
- You could do `<lang='en'>`

### What kind of things must you be wary of when design or developing for multilingual sites?
-  

### What are `data-` attributes good for?
- The `data-`

### Consider HTML5 as an open web platform. What are the building blocks of HTML5?
### Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
### Describe the difference between `<script>`, `<script async>` and `<script defer>`.
### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
### What is progressive rendering?
### Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
### Have you used different HTML templating languages before?
### Why do you need to include `<meta charset="UTF-8/>`?

Describe the difference between <script>, <script async> and <script defer>.
<script> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.
<script async> - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example analytics.
<script defer> - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference from putting a normal <script> at the end of <body>. A deferred script must not contain document.write.
Note: The async and defer attrib­utes are ignored for scripts that have no src attribute.