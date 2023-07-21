
def matchingStrings(strings, queries):
    # Write your code here
    result = []
    for query in queries:
        result.append(strings.count(query))
    return result


strings = ["aba", "baba", "aba", "xzxb"]
queries = ["aba", "xzxb", "ab"]

result = matchingStrings(strings, queries)
print(result)
