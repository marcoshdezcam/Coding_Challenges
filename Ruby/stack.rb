class Node
  attr_reader :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
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
    value = @head.value
    @head = @head.next_node
    value
  end
end
