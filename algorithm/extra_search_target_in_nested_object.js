// Search for the value in the nested object.


const searchNestedObject = function(obj, target) {
  return obj;
} 

object = {
  'title': "some title",
  'channel_id':'123we',
  'options': {
                'channel_id':'abc',
                'Company':'Disney',
                'title': 'Moana',
                'options': "Very cool"
  }
}

console.log(searchNestedObject(object, "Moana"));
