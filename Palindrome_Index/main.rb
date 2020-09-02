# frozen_string_literal: true

def palindrome_index(string)
  return -1 if palindrome?(string)

  s_start = 0
  s_end = string.size - 1
  while s_start < s_end && string[s_start].eql?(string[s_end])
    s_start += 1
    s_end -= 1
  end

  return s_start if palindrome?(string[0...s_start] + string[s_start + 1...string.size])
  return s_end if palindrome?(string[0...s_end] + string[s_end + 1...string.size])
end

def palindrome?(string)
  string.eql?(string.reverse)
end

q = gets.to_i

q.times do
  s = gets.to_s.rstrip
  p palindrome_index(s)
end
