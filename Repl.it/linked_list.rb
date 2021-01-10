class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class LinkedList
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

  def get(index)
    current_node = @head
    index.times { current_node = current_node.next_node }
    current_node.value
  end

  def add_at(index, item)
    new_node = Node.new(item)
    if @head.nil?
      @head = @tail = new_node
    elsif index.zero?
      new_node.next_node = @head
      @head = new_node
    elsif index.positive?
      current_node = @head
      (index - 1).times { current_node = current_node.next_node }
      new_node.next_node = current_node.next_node
      @tail = new_node if current_node.next_node.nil?
      current_node.next_node = new_node
    end
  end

  def remove(index)
    current_node = @head
    return index if @head == @tail

    if index.zero?
      @head = @head.next_node
    elsif index.positive?
      (index - 2).times { current_node = current_node.next_node }
      current_node.next_node = current_node.next_node.next_node
    end
  end

  def show_list
    current_node = @head
    until current_node.nil?
      puts current_node.value
      current_node = current_node.next_node
    end
  end
end

