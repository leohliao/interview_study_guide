// Search for the value in the nested object.


const searchNestedObject = function(obj, target) {
  // console.log("inside the great function")
  // return obj;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return searchNestedObject(obj[key], target);
    } else if (obj[key] === target) {
      return true;
    }
  }
  return false;  
};

let object = {
  'title': "some title",
  'channel_id':'123we',
  'options': {
                'channel_id':'abc',
                'Company':'Disney',
                'title': 'Moana',
                'options': "Very cool"
  }
};

console.log(searchNestedObject(object, "Moana"));
