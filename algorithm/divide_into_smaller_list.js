/*
  You can use any language you want. 
  
  Given a list of objects of different types we want you to return a list of lists. 
  The smaller lists can only contain objects of the same type and can have a maximum length of 5. 
  Write an algorithm that converts the list of objects to a list of lists of objects. 
  
  Order matters for both the outer and inner lists


Input= [
    {type: 'fruit', value:'watermelon'}, 
    {type: 'meat', value:'beef'}, 
    {type: 'meat', value:'chicken'}, 
    {type: 'fruit', value:'apple'}, 
    {type: 'fruit', value:'orange'}, 
    {type: 'fruit', value:'blueberry'}, 
    {type: 'fruit', value:'pineapple'}, 
    {type: 'fruit', value:'dragonfruit'}, 
    {type: 'vegetable', value:'squash'}, 
    {type: 'vegetable', value:'lettuce'}, 
    {type: 'fruit', value:'strawberry'}, 
    {type: 'vegetable', value:'carrots'}, 
    {type: 'meat', value:'turkey'}
  ]

 Output = [
    [
      {type: 'fruit', value:'watermelon'},
      {type: 'fruit', value:'apple'}, 
      {type: 'fruit', value:'orange'}, 
      {type: 'fruit', value:'blueberry'}, 
      {type: 'fruit', value:'pineapple'}, 
    ],
    [
      {type: 'meat', value:'beef'}, 
      {type: 'meat', value:'chicken'}, 
      {type: 'meat', value:'turkey'}
    ],
    [
      {type: 'fruit', value:'dragonfruit'}, 
      {type: 'fruit', value:'strawberry'}, 
    ],
    [
      {type: 'vegetable', value:'squash'}, 
      {type: 'vegetable', value:'lettuce'}, 
      {type: 'vegetable', value:'carrots'}, 
    ]
  ]

 Input: []
 Output: []

 --- Diagram:    

    - [
        {type: 'fruit', value:'watermelon'}, 
        {type: 'meat', value:'beef'}, 
        {type: 'meat', value:'chicken'}, 
        {type: 'fruit', value:'apple'}, 
        {type: 'fruit', value:'orange'}, 
        {type: 'fruit', value:'blueberry'}, 
        {type: 'fruit', value:'pineapple'}, 
        {type: 'fruit', value:'dragonfruit'}, 
        {type: 'vegetable', value:'squash'}, 
        {type: 'vegetable', value:'lettuce'}, 
        {type: 'fruit', value:'strawberry'}, 
        {type: 'vegetable', value:'carrots'}, 
        {type: 'meat', value:'turkey'}
      ]
     - idx: 1
     - result: []
     - {
         fruit: ["0"]
         meat: ["1"]
       }
       return:
       [
         fruitArr:[x, x, x ] 
         meatArr:[x, x ]
         fruitArr_2:[]
         vegetablArr]
       ]
       
--- Pseudocode:

    let uniqueCount = {}
    let result = []                          // [[fruit item}], [{meat}]]

    for loop to iterate the input array (idx)
      type = item.type     // fruit
      if unqiueCount[type]
        resultIdx =  unqiueCount[type][unqiueCount[type].length - 1]   // ["0"]
        
        resultArr = result[resultIdx]
        if resultArr.length < 5
          resultArr.push(item)
        else
          total_length = result.length
          unqiueCount[type].push("total")
          result.push([item])
          
      else
        resultIdx = result.length 
        uniqueCount[type] = [resultIdx.toString]     // meat: ["1"]
        result.push([item])
        
    return result

*/

const separate_arrays = (arr) => {
    let uniqueCount = {};
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      const { type } = item;
  
      if (uniqueCount[type]) {
        let resultIdx = uniqueCount[type][uniqueCount[type].length - 1];
  
        let resultSubArr = result[resultIdx];
  
        if (resultSubArr.length < 5) {
          resultSubArr.push(item);
        } else {
          let resultLength = result.length;
          uniqueCount[type].push(resultLength.toString())
          result.push([item])
        }
  
      } else {
        let resultIdx = result.length;
        uniqueCount[type] = [resultIdx.toString()];
        result.push(
          [item]
        );
  
      }
  
    }
  
    return result;
  
  }
  
  //     		{type: 'fruit', value:'watermelon'}, 
  //     		{type: 'meat', value:'beef'}, 
  //     		{type: 'meat', value:'chicken'}, 
  //     		{type: 'fruit', value:'apple'}, 
  //     		{type: 'fruit', value:'orange'}, 
  //     		{type: 'fruit', value:'blueberry'}, 
  //     		{type: 'fruit', value:'pineapple'}, 
  //     		{type: 'fruit', value:'dragonfruit'}, 
  //     		{type: 'vegetable', value:'squash'}, 
  //     		{type: 'vegetable', value:'lettuce'}, 
  //     		{type: 'fruit', value:'strawberry'}, 
  //     		{type: 'vegetable', value:'carrots'}, 
  //     		{type: 'meat', value:'turkey'}
  // 	    ]))
  //     		{type: 'fruit', value:'watermelon'}, 
  //     		{type: 'meat', value:'beef'}, 
  //     		{type: 'meat', value:'chicken'}, 
  //     		{type: 'fruit', value:'apple'}, 
  //     		{type: 'fruit', value:'orange'}, 
  //     		{type: 'fruit', value:'blueberry'}, 
  //     		{type: 'fruit', value:'pineapple'}, 
  //         {type: 'vegetable', value:'squash'}, 
  //     		{type: 'fruit', value:'dragonfruit'}, 
  //     		{type: 'vegetable', value:'lettuce'}, 
  //     		{type: 'fruit', value:'strawberry'}, 
  //     		{type: 'vegetable', value:'carrots'}, 
  //     		{type: 'meat', value:'turkey'}
  // 	    ]))
  
  
  // [
  //   [
  //     { type: 'fruit', value: 'watermelon' },
  //     { type: 'fruit', value: 'apple' },
  //     { type: 'fruit', value: 'orange' },
  //     { type: 'fruit', value: 'blueberry' },
  //     { type: 'fruit', value: 'pineapple' }
  //   ],
  //   [
  //     { type: 'meat', value: 'beef' },
  //     { type: 'meat', value: 'chicken' },
  //     { type: 'meat', value: 'turkey' }
  //   ],
  //   [
  //     { type: 'vegetable', value: 'squash' },
  //     { type: 'vegetable', value: 'lettuce' },
  //     { type: 'vegetable', value: 'carrots' }
  //   ],
  //   [
  //     { type: 'fruit', value: 'dragonfruit' },
  //     { type: 'fruit', value: 'strawberry' }
  //   ]
  // ]
  
  // 1 item
  const deleteItem = (arr, targetItem) => {
    // understand the arr structure:
    const structure = {};
    let toBeDeleted;

    const validateList = (deletedX) => {
      const deletedItemType = structure[deletedX].type;
      const deletedItemCount = structure[deletedX].count;

      // when the to be deleted item is located in the structure of 5 and there
      // are more items later with the same type
      if (deletedItemCount === 5) {
        for (let idx = deletedX + 1; idx < Object.keys(structure).length; idx++) {
          if (structure[idx].type === deletedItemType) {
            structure['toBeMoved'] = idx;
            return true;
          }
        }
      }
      return false;
      
    }

    for (let x = 0; x < arr.length; x ++) {
      const itemType = arr[x][0].type;
      structure[x] = {
        'type': itemType,
        'count': arr[x].length
      }
      for (let y = 0; y < arr[x].length; y++) {
        let item = arr[x][y];
        if (item.type === targetItem.type && item.value === targetItem.value) {
          // find out which item needs to be deleted
          toBeDeleted = [x, y];
        }
      }
    }
    // if the item to be deleted exists, then we delete the item
    // and resort the arrays
    if (toBeDeleted !== undefined) {
      // delete the item
      arr[toBeDeleted[0]].splice(toBeDeleted[1], 1);
      
      // if to see if we need to re-arrange:
      const needReorder = validateList(toBeDeleted[0]);
      if (needReorder) {
        arr[toBeDeleted[0]].push(arr[structure.toBeMoved].shift());
      }
    }
    return arr;
    
  }
  
  console.log(deleteItem([
    [
      { type: 'fruit', value: 'watermelon' },
      { type: 'fruit', value: 'apple' },
      { type: 'fruit', value: 'orange' },
      { type: 'fruit', value: 'blueberry' },
      { type: 'fruit', value: 'pineapple' }
    ],
    [
      { type: 'meat', value: 'beef' },
      { type: 'meat', value: 'chicken' },
      { type: 'meat', value: 'turkey' }
    ],
    [
      { type: 'vegetable', value: 'squash' },
      { type: 'vegetable', value: 'lettuce' },
      { type: 'vegetable', value: 'carrots' }
    ],
    [
      { type: 'fruit', value: 'dragonfruit' },
      { type: 'fruit', value: 'strawberry' }
    ]
  ],  
  { type: 'fruit', value: 'blueberry' }
  
  ));
