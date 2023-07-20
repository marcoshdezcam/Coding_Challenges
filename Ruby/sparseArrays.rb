
def matchingStrings(strings, queries)
  # Write your code here
  
  result = []
  queries.each do | query | 
    result.push(strings.count(query))
  end
  
  return result
end

strings = ["aba", "baba", "aba", "xzxb"]
queries = ["aba", "xzxb", "ab"]

result = matchingStrings(strings, queries)
puts result