class Node:
    def __init__(self, d, p=None, n=None):
        self.data = d
        self.prev = p
        self.next = n

def display(curr_node):
    tail = None

    print("Forward Direction:")
    while curr_node is not None:
        print(curr_node.data)
        tail = curr_node
        curr_node = curr_node.next

    curr_node = tail
    print("Backward Direction:")
    while curr_node is not None:
        print(curr_node.data)
        curr_node = curr_node.prev

head = Node(1)
second = Node(2)
third = Node(3)

head.next = second
second.prev = head
second.next = third
third.prev = second

display(head)
