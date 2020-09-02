# frozen_string_literal: true

def palindrome_index(string)
  return -1 if string == string.reverse

  index_to_remove = 0
  string.split(//).each_with_index do |_char, index|
    new_string = string.split(//)
    new_string.delete_at(index)
    index_to_remove = index if new_string.join == new_string.reverse.join
  end
  index_to_remove
end

q = gets.to_i

q.times do
  s = gets.to_s.rstrip
  p palindrome_index(s)
end
