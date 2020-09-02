# frozen_string_literal: true

def repeated_string(string, first_letters)
  remainder = first_letters % string.size
  counter = (first_letters / string.size) * string.scan(/a/).size + string[0...remainder].scan(/a/).size
  counter
end

repeated_string('aba', 12)
