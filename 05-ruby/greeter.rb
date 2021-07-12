# Greeting program to experiment with keyboard input and output

puts "Welcome to this program" # console.log

print "What is your name: " # Print does not add a new line to the output
name = gets.chomp # read the user input and remove the new line at the end.

puts "Your name is #{ name }."

print "What is your surname: "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname.upcase }."

print "Where do you live: "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }"
