def lonelyInteger(a)
  a.each_with_index do |value, index|
    puts value
    puts index
    if (a.one? {|element| element == value}) 
      return a[index]
    end
  end
end

a = [1, 2, 3, 4, 3, 2, 1]
result = lonelyInteger(a)

puts result