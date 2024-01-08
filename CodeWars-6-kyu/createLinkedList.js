class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	// methods
	append(value) {
		let newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}
	preAppend(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		length++;
	}
	listTree() {
		let array = [];
		let current = this.head;

		while (current !== null) {
			array.push(current.value);
			current = current.next;
		}
		console.log(array);
	}
	findIndex(index) {
		let count = 0;
		let currentNode = this.head;

		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}
		return currentNode;
	}

	insert(value, index) {
		// If index is out of range, simply append
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);
		const leader = this.findIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
	}
}

let test = new LinkedList(10);
test.append(5);
test.append(16);
test.preAppend(1);
// test.findIndex(2)
test.insert(20, 2);
test.listTree();

// console.log(test)
