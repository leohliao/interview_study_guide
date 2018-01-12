# Event 

`html
<div class="one">
  <div class="two">
    <div class="three">
    </div>
  </div>
</div>
`html

`js
  const divs = document.querySelectAll('div')
  function logText(e){
    console.log(this.classList.value)
  }
  divs.forEach(div => div.addEventListener('click', logText))
`js

Test case: What would console log if you click box 3

### Event Handling
- Same as event listener

### Event Delegation 

### Event Bubbling 
- return three, two, one 
- No.2 Priority less than Capturing

### Event Capturing 
- return one, two, three
- No.1 Priority but default false

### Event Propagation  
- 