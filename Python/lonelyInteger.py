def lonelyInteger(a):
    for item in range(len(a)):
        occurrences = [i for i in a if i == a[item]]
        if (len(occurrences) == 1):
            return a[item]


originalNumbers = [1, 2, 3, 4, 3, 2, 1]
result = lonelyInteger(originalNumbers)
print(result)
