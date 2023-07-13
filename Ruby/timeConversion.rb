def timeConversion(s)
  convertedTime = ""
  hours = s[0, 2]
  timeOfDay = s[8, 9]

  if timeOfDay.eql?("AM")
    hours == "12" ? convertedTime = "00".concat(s[2, 6]) : convertedTime = s[0, 8]
  elsif timeOfDay.eql?("PM")
    hours == "12" ? convertedTime = s[0, 8] : convertedTime = (12 + hours.to_i).to_s << s[2, 6]
  else 
    puts "Wrong input format"
  end
  
  return convertedTime
end

originalTime = "07:05:45PM";
convertedTime = timeConversion originalTime
puts convertedTime