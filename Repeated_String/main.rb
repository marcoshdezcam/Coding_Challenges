# frozen_string_literal: true

def repeated_string(infiniteString, firstLetters)
  remainder = firstLetters % infiniteString.size
  counter = ( firstLetters / infiniteString.size ) * infiniteString.scan(/a/).size + infiniteString[0...remainder].scan(/a/).size
  counter
end

repeated_string('aba', 12)
