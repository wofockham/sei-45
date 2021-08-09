# Fibonacci
# fib(n) = fib(n-1) + fib(n-2)
# 1 1 2 3 5 8 13 21 34 55

require 'pry'

def fibonacci_iterative(n)
  a = 1
  b = 1

  while n > 2 # conditional: fib(1) = 1, fib(2) = 1
    # parallel assignment: atomic
    a, b = b, a+b
    n -= 1
  end

  b
end

def fibonacci_recursive(n) # O(2^n)
  if n <= 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# Bonus homework:
# Make this faster but still recursive.

# Option a: memoisation
# Option b: iterative recursion: only recurse ONCE per call

def fib_memo(n)
  @fib ||= {} # assign an empty hash to @fib if it doesn't already have a value

  if @fib[n]
    @fib[n]
  elsif n <= 2
    1
  else
    @fib[n] = fib_memo(n-1) + fib_memo(n-2)
  end
end

# Iterative recursion
def fib(n, a=1, b=1)
  # puts "n: #{ n }, a: #{ a }, b: #{ b }"
  if n == 1 || n == 2
    b
  else
    fib n-1, b, a+b # mystical
  end
end

binding.pry
