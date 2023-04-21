class Node
  attr_accessor :value, :next_node

  def initialize(number, next_node = nil)
    @value = number
    @next_node = next_node
  end
end

class Stack
  attr_reader :head

  def initialize
    @head = nil
  end

  def push(number)
    new_node = Node.new(number) if @head.nil?
    new_node = Node.new(number, @head) unless @head.nil?
    @head = new_node
  end

  def pop
    @head = @head.next_node
  end

  def min
    current_node = @head
    min = current_node.value

  end
end

stack = Stack.new
stack.push(3)
stack.push(5)
puts stack.min
# => 3

stack.pop
stack.push(7)
puts stack.min
# => 3

stack.push(2)
puts stack.min
# => 2

stack.pop
puts stack.min
# => 3
