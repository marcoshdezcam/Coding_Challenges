def fibonacci(seq_itr)
  return 0 if seq_itr.eql?(0)
  return 1 if seq_itr.eql?(1)

  fibonacci(seq_itr - 1) + fibonacci(seq_itr - 2)
end

fibonacci(40)
