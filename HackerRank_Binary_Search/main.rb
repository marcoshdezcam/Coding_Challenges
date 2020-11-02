# frozen_string_literal: true

def sqrt(number)
  sqrt_recursive(number, 0, number)
end

def sqrt_recursive(number, min_interval, max_interval)
  middle = (max_interval - min_interval) / 2 + min_interval
  sqrt = middle * middle

  if sqrt == number
    middle
  elsif sqrt < number
    sqrt_recursive(number, middle, max_interval)
  elsif sqrt > number
    sqrt_recursive(number, min_interval, middle)
  end
end

puts sqrt(25)
puts sqrt(7056)
