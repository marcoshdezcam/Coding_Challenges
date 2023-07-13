def palindrome_index(string)
  return -1 if palindrome?(string)

  s_start = 0
  s_end = string.size - 1
  while s_start < s_end && string[s_start].eql?(string[s_end])
    s_start += 1
    s_end -= 1
  end

  s_start if palindrome?(string[0...s_start] + string[s_start + 1...string.size])
  s_end if palindrome?(string[0...s_end] + string[s_end + 1...string.size])
end

def palindrome?(string)
  string.eql?(string.reverse)
end
