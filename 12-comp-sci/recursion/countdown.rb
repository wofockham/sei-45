require 'pry'

def countdown_iterative(n=10) # initial
  while n >= 0 # conditional
    puts n
    n -= 1     # mutation
    sleep 1
  end

  puts "Blast off!"
end

# No loop, no mutation
def countdown_recursive(n=10) # initial
  if n < 0                    # base case
    puts "Blast off!"
  else
    puts n
    sleep 1
    countdown_recursive(n-1)  # move one step closer to the base case
  end
end

binding.pry
