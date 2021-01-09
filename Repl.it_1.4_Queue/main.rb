class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class Queue
  attr_reader :head, :tail

  def initialize
    @head = @tail = nil
  end

  def add(number)
    new_node = Node.new(number)
    if @head.nil?
      @head = @tail = new_node
    else
      @tail.next_node = new_node
      @tail = new_node
    end
  end

  def remove
    return -1 if @head.nil?

    value = @head.value
    @head = @head.next_node
    value
  end
end

