### Tell me about your background, experience in coding.
- I started out my career working heavily on visual design related works. During my time working, I was exposed to do a lot of problem solving on both sides of technology or artistic. And I really love it! As the problem I had to deal with become more and more complicated, I began to learn coding and use them to solve these problems in more optimal time.  I continue to challenge myself via building web app. I have used Ruby on Rails, Node.JS, React.JS, React Native, PostgreSQL, and MongoDB to build full-stack scale apps. I am looking for a front-end role because I am capable of thinking from both engineering side and artistic side. 

### Describe a recent project, what technologies you used and some particular challenges faced.
- A recent project I have worked on was with a team of three. We wanted to build a mobile app that allows user manipulate all of their social network via one app. 
- The technologies that we used was Node.js, MongoDB, React Native and Express. 
- We faced several challenges: 
  - We were working with different APIs; so figuring out how allow our user to have authenticated to different social network was a challenging. 
  - We only had less than 1 week to build from scratch. => Managing our time efficiently.
  - New Technologies => We learn to be adventurous and build as we learn. 
  - Interpersonal, uncommunicative teammates => Sharpen skills to how to manage between people and work towards one goal.
  - Working with multiple APIs => We rely heavily on Documentation, Stackoverflow and TestDriven Development Strategies, though we didn't actually use anything like JEST or Jasmine. 

### Explain how the internet works in a general sense (what happens when I type in www.google.com and press 'Enter').
1. Enter URL
2. Browser looks up the IP address for the Domain Name Server (DNS) 
3. Browser sends a HTTP request to the web server
4. Server responds with a permanent redirect.
5. The browser follows the redirect by sending another GET request 
6. The server handles the request.
7. The server sends back a HTML response 
8. The browser begins rendering the HTML
9. The browser sends requests for objects embedded in HTML
10. The browser sends further asynchronous (AJAX) request
11. Utilize CDN(initial request)
12. Utilizing CDN(Geo Location)
13. Utilizing Cache 

### Are you familiar with XSS (Cross-site scripting) and what specifically on a webpage is vulnerable to this. How would you execute one of these attacks?
- XSS is a type of injection attacks which attacker uses a web application to send malicious code, generally in the form of a browser side script. And the user's browser has no way to know that the script should not be trusted and wide execute the script. 
- Database, error messages, search result, email, is vulnerable to this. 
- most common HTTP query parameters 

-- Stored XSS Attacks
Stored attacks are those where the injected script is permanently stored on the target servers, such as in a database, in a message forum, visitor log, comment field, etc. The victim then retrieves the malicious script from the server when it requests the stored information. Stored XSS is also sometimes referred to as Persistent or Type-I XSS.

-- Reflected XSS Attacks
Reflected attacks are those where the injected script is reflected off the web server, such as in an error message, search result, or any other response that includes some or all of the input sent to the server as part of the request. Reflected attacks are delivered to victims via another route, such as in an e-mail message, or on some other web site. When a user is tricked into clicking on a malicious link, submitting a specially crafted form, or even just browsing to a malicious site, the injected code travels to the vulnerable web site, which reflects the attack back to the user’s browser. The browser then executes the code because it came from a "trusted" server. Reflected XSS is also sometimes referred to as Non-Persistent or Type-II XSS.

-- Other Types of XSS Vulnerabilities
In addition to Stored and Reflected XSS, another type of XSS, DOM Based XSS was identified by Amit Klein in 2005. OWASP recommends the XSS categorization as described in the OWASP Article: Types of Cross-Site Scripting, which covers all these XSS terms, organizing them into a matrix of Stored vs. Reflected XSS and Server vs. Client XSS, where DOM Based XSS is a subset of Client XSS.

### Build a React app with these specifications:
With the 3 APIs provided and a skeleton component, create a page that shows all of the top articles and each of their details in a specified UI pattern. Feel free to use anything you want to supplement the app (for example, I used JQuery). Questions on design patterns, how React components mount and render and asynchronous functions all throughout while coding.
Extra challenge thrown in to paginate the articles, so that only a few load at a time and upon button press more load.
If you have the time, make it look pretty.
Link to the files for the coding exercise: https://drive.google.com/drive/folders/1-JIEgZ7A39v3ELw4K2vkfr-ODH4CfZPY?usp=sharing