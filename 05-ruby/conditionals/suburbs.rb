# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "In which suburb do you reside: "
residence = gets.chomp.capitalize

# v2 case
puts case residence
when 'Bondi'
  "Nice COVID outbreak, idiots"
when 'Glebe'
  "Nice foreshore walk"
when 'Newcastle'
  "That's not really Sydney is it?"
else
  "It's probably a nice place"
end
