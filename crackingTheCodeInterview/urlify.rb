## Turns a string into URL 


def URLify(str, length)
##  
  words = str.split(' ')
  words = str.join('%20')
end 

p URLify("Mr John Smith    ", 13)

