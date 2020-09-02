# frozen_string_literal: true

def repeated_string(infinite_string, first_letters)
  remainder = first_letters % infinite_string.size
  counter = (first_letters / infinite_string.size) * infinite_string.scan(/a/).size + infinite_string[0...remainder].scan(/a/).size
  counter
end

repeated_string('aba', 12)
