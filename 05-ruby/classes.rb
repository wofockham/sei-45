require 'pry'

# An object is kind of like a hash -- it has key/value pairs.
# BUT: You have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash: an object can have methods (functions inside the object)

class Actor
  def award_speech
    "I would to thank my agent and my parents and my partner. We did it baby!"
  end

  def deny_allegations
    "I deny that I don't remember and I was drunk and he's not my type."
  end
end

class Stooge < Actor # inheritance
  def terrible?
    true
  end
end

# name, instrument, vice
class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='lampooning authority') # default parameters
    @name = n
    @instrument = i
    @vice = v
  end

  # custom getter
  def perform
    "My name is #{ @name } and I play the #{ @instrument || "voice" }"
  end
end

# groucho = MarxBrother.new
# groucho.name = 'Groucho Julius Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'
# puts groucho.name # Groucho Julius Marx
#
# chico = MarxBrother.new
# chico.name = 'Chico Marx'
# chico.instrument = 'piano'
# chico.vice = 'infidelity'
#
harpo = MarxBrother.new 'Harpo', 'harp', 'mutism'

binding.pry
