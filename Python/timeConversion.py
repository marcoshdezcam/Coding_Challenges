def timeConversion(s):
    timeOfDay = s[-2:]
    hours = s[:2]

    if timeOfDay == "AM":
        return "00" + s[2:-2] if hours == "12" else s[:-2]
    elif timeOfDay == "PM":
        return s[:-2] if hours == "12" else str(12 + int(hours)) + s[2:-2]


originalTime = "05:05:45PM"
convertedTime = timeConversion(originalTime)
print(convertedTime)
