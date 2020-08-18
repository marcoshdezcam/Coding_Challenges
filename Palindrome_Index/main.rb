def palindromeIndex(string)
  # -1 if string is already a palindrome
  return -1 if string == string.reverse
  
  # INDEX of charachter to remove necessary to convert string to palindrome
    # find wich index letter needs change so string == string.reverse
    # if string == string.reverse at some point return INDEX
    string.split(//).each do | index |
      p 
      # p string.delete(index)
      # p string.delete(index)
      # string.delete(index) == string.reverse ? index : -1
    end
end

q = gets.to_i

q.times do
  s = gets.to_s.rstrip
  palindromeIndex(s)
end
