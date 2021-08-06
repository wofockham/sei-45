# 11! = 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
#
# # recursion: recursive definition
# 11! = 11 * 10!
#            10 * 9!
#                 9 * 8!
#                     8 * 7!
#                         etc

require 'pry'
def factorial_iterative(n) # initial
  result = 1
  while n > 1              # conditional
    result *= n            # mutation
    n -= 1                 # mutation: move towards the conditional being false
  end

  result # implicitly returned
end

def factorial_recursive(n)
  if n <= 1                      # base case
    1
  else
    n * factorial_recursive(n-1) # recursion: moves towards the base case
  end
end

binding.pry
