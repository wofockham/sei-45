def show_menu
  puts "Calculator" # TODO: You can use .center to make it look nicer.
  puts "=-" * 40 # Budget horizontal dividing line
  puts "[a] - Addition"
  # TODO: Add the other operations here (multiply, subtract, etc)
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  case menu_choice
  when 'a'
    puts "You chose addition!"
    puts "Addition coming soon!" # TODO: Actually do the addition
  # add "when" for each of the other menu options
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."
