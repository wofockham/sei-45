filename = ARGV[0] || 'integers.txt'

file = File.open filename

sum = 0
file.each_line do |line|
  sum += line.to_i # strings
end

puts "The sum is: #{ sum }"
