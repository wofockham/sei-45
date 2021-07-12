if 1001 > 15
  puts "Yes that number is bigger"
else
  puts "No that number is smaller"
end

grade = 'D'
if grade == 'A'
  puts "You are killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Adequate"
else
  puts "Please see Mai after class"
end

# TODO: research `case`

# Ruby bonus features ##########################################################

# Short AKA modifier AKA backwards if statement
# No else part and the body must be a single statement
puts "The number is bigger" if 1001 > 15

# The opposite of if: unless
today_is_wednesday = false
# if today_is_wednesay != true
#   puts "It's not Wednesday"
# end

unless today_is_wednesday
  puts "It's not Wednesday"
end

# puts "It's not Wednesday" if today_is_wednesay == false
puts "It's not Wednesday" unless today_is_wednesday
