require 'pry'

# An object is kind of like a hash -- it has key/value pairs.
# BUT: You have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash: an object can have methods (functions inside the object)

# name, instrument, vice
class MarxBrother

  # setter
  def name=(n)
    @name = n
  end

  # getter
  def name()
    @name # implicit return
  end

  # setter
  def instrument=(i)
    @instrument = i
  end

  # getter
  def instrument()
    @instrument
  end

  # setter
  def vice=(v)
    @vice = v
  end

  # getter
  def vice()
    @vice
  end

  # custom getter
  def perform
    "My name is #{ @name } and I play the #{ @instrument || "voice" }"
  end

end

binding.pry

groucho = MarxBrother.new
groucho.name=('Groucho Julius Marx')
puts groucho.name() # Groucho Julius Marx
