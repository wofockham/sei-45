require 'pry'

class SinglyLinkedList
  include Enumerable # mixins: simulate inheriting from multiple classes.

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # unshift
    node = Node.new value
    node.next = @head
    @head = node # the new node is also the new head
  end

  def append(value) # push
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node # implicit return
  end

  # TODO:
  def remove # AKA: shift() -- removes the first node
    node = @head
    @head = @head.next
    node.value # implicitly return the value of the old head.
  end

  def insert_after(node, new_value)
  end

  def find(needle)
    # return the node with the value of needle (or nil)
  end

  # Tricky:
  def reverse # non-destructive
    reversed_list = SinglyLinkedList.new
    current_node = @head
    while current_node
      reversed_list.prepend(current_node.value)
      current_node = current_node.next # walking/stepping the graph
    end
    reversed_list
  end

  # Trickier:
  def reverse! # destructive
    @head = self.reverse.head
  end

  # Trickiest -- how do you accept/invoke a block (do/end)?
  def each
    current_node = @head
    while current_node
      yield(current_node.value) if block_given?
      current_node = current_node.next
    end
  end

  # Bonus: .map, .reduce, .select, .reject, .inject, .length AKA .size AKA .count
  # Bonus: .at_index(3) # equivalent to bros[3]
end

bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.append 'Chico'

# bros.each do |brother|
#   puts brother.upcase
# end

binding.pry
