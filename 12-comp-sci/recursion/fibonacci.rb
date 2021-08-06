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

def fibonacci_recursive(n)
  if n <= 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

binding.pry
