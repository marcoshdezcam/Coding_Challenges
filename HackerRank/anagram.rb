def anagram(s)
  return -1 if s.size.odd?

  left = s[0...(s.size / 2)].split('')
  right = s[(s.size / 2)...s.size].split('')

  left.each do |left_item|
    right.each do |right_item|
      if left_item == right_item
        left_item = nil
        right_item = nil
        break
      end
    end
  end
  left.all? { |item| item.nil? }
  right.all? { |item| item.nil? }
end

# Two words are anagrams of one another if their letters can be rearranged to form the other word.
# puts anagram('aaabbb')                # => 3
puts anagram('xaxbbbxx') # => 1
# puts anagram('xyyx')                  # => 0
# puts anagram('fdhlvosfpafhalll')      # => 5
