function createNode(d, p = null, n = null) {
    return {
        data: d,
        prev: p,
        next: n,
    };
}

function display(currNode) {
    let tail = null;

    console.log("Forward Direction:");
    while (currNode !== null) {
        console.log(currNode.data);
        tail = currNode;
        currNode = currNode.next;
    }

    currNode = tail;
    console.log("Backward Direction:");
    while (currNode !== null) {
        console.log(currNode.data);
        currNode = currNode.prev;
    }
}

let head = createNode(1);
let second = createNode(2);
let third = createNode(3);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

display(head);

