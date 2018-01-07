def triplets(arr, sum) 
    hash = Hash.new{|k,h| k[h]=[]}
    arr.combination(3) do |el|
        hash[el.reduce(&:+)] = el 
    end
    hash.select {|k, v| k < sum }.values 
  
end 

p triplets([-2, 0, 1, 3], 2)