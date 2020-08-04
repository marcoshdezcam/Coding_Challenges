# frozen_string_literal: true

def repeated_string(s, n)
  # counter = 0
  counter = n / s.size
  remainder = n % s.size
  p remainder
  i = 0
  latest_as = s[i] == 'a' ? latest_as + s[i] : nil && i += while i <= remainder
  p latest_as
  number_of_as = s.scan(/a/)
  counter *= number_of_as.size
  counter
end
# [ abaabaaba a ]

puts repeated_string('aba', 10)
