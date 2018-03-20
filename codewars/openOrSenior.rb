def openOrSenior(data)
  data.map { |age,handycap| age >= 55 && handycap > 7 ? "Senior" : "Open" }
end

def openOrSenior(data)
    x = []
    data.each { |pair| x << (pair[0] >= 55 && pair[1] > 7? 'Senior' : 'Open') }
    x
end