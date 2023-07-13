class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class LinkedList
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
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

  def get(index)
    current_node = @head
    index.times { current_node = current_node.next_node }
    current_node.value
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
list.get(1)
