# while true
#   puts 'wow'
# end

# Control-c to cancel a running Ruby program.

# initialize, conditional, update
# i = 0       # initialize
# while i < 5 # conditional
#   puts "i is now: #{ i }"
#   i += 1    # update
# end

# if => unless
# while => until
# i = 0        # initialize
# until i == 5
#   puts "i is now #{ i }"
#   i += 1
# end

# Iterators: Ruby's preferred method of iterating/looping
# 7.times { puts "Hello world" }

# 5.times do |iteration|
#   puts "i is now: #{ iteration }"
# end

# Backwards
4.downto(0) do |n|
  puts n
end
