class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addElementToBeginning(element) {
        var newNode = new Node(element);

        // If list is empty
        if(this.head === null) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        }
        // If list is not empty
        else {
            newNode.next = this.head;

            // * this is done to generalize for more than one nodes
            newNode.prev = this.head.prev;
            this.head.prev.next = newNode;
            
            this.head.prev = newNode;

            this.head = newNode;
        }

        this.size++;
    }

    addElementToEnd(element) {
        var newNode = new Node(element);

        // If list is empty
        if(this.head === null) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        }
        // If list is not empty
        else {
            newNode.next = this.head;

            // * this is done to generalize for more than one nodes
            newNode.prev = this.head.prev;
            this.head.prev.next = newNode;
            
            this.head.prev = newNode;
        }

        this.size++;
    }

    addElementAt(positionToInsert, elementToInsert) {
        //If positiontoInsert is exceeding the size of the List
        //If positiontoInsert is Invalid
        if(this.size < positionToInsert || positionToInsert <= 0) {
            console.log(positionToInsert + "doesn't exist.");
            return;
        }

        var position = 1;
        var current = this.head;

        while(current) {
            if(positionToInsert === position) {

                var newNode = new Node(elementToInsert);

                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;

                if(positionToInsert === 1) {
                    this.head = newNode;
                }

                this.size++;

                break;

            }else {
                current = current.next;
                position++;
            }
        }
    }

    deleteElementFromBeginning() {
        if(!this.head) {
            console.log("Empty List.");
        }else if(this.head.next === this.head) {
            console.log("Item Deleted: " + this.head.element);
            this.head = null;

            this.size--;
        }else {
            this.head.next.prev = this.head.prev;
            this.head.prev.next = this.head.next;
            console.log("Item Deleted: " + this.head.element);
            this.head = this.head.next;

            this.size--;
        }
    }

    deleteElementFromEnd() {
        if(!this.head) {
            console.log("Empty List.");
        }else if(this.head.next === this.head) {
            console.log("Item Deleted: " + this.head.element);
            this.head = null;

            this.size--;
        }else {
            var current = this.head.prev;
            current.prev.next = this.head;
            this.head.prev = current.prev;
            console.log("Item Deleted: " + current.element);

            this.size--;
        }
    }

    deleteElementAt(positionToDelete) {

        if(positionToDelete <= 0 || positionToDelete > this.size) {
            console.log("Element at Position ", positionToDelete, " doesn't exist.");
            return;
        }

        // If the linked list is empty
        if(!this.head) {
            console.log("Empty List");
        }
        // If there is only one element and that is the element to delete
        else if(positionToDelete === 1 && this.size === 1) {
            console.log("Item Deleted: " + this.head.element);
            this.head = null;

            this.size--;
        }
        // If there are one or more elements
        else if(positionToDelete <= this.size) {
            var current = this.head;
            var position = 1;

            while(current) {

                if(positionToDelete === position) {
                    current.next.prev = current.prev;
                    current.prev.next = current.next;
                    console.log("Item Deleted: " + current.element);

                    // if we are deleting head
                    if(current === this.head) {
                        this.head = current.next;
                    }

                    this.size--;

                    break;
                }

                current = current.next;
                position++;

            }
        }
    }

    printCircularDoublyLinkedList() {
        var linkedListHtml = "";

        if(this.head === null) {
            console.log("Empty Linked List.");
        }else {
            var current = this.head;

            while(current) {
                console.log(current.element);

                linkedListHtml += current.element + " => ";

                current = current.next;

                if(current === this.head)
                    break;
            }

            linkedListHtml += " X";
        }

        document.getElementById("linkedListDisplay").innerHTML = linkedListHtml;
        this.copyToArray();

    }

    //Solution of Question 2
    copyToArray() {
        var uniqueArray = [];

        if(this.head === null) {
            document.getElementById("uniqueArrayDisplay").innerHTML = uniqueArray;
            return;
        }else {
            var current = this.head;

            while(current) {
                
                if(uniqueArray.indexOf(current.element) === -1) {
                    uniqueArray.push(current.element);
                }

                current = current.next;

                if(current === this.head)
                    break;
            }
        }


        document.getElementById("uniqueArrayDisplay").innerHTML = uniqueArray;
    }
}

var cirDoubLL = new CircularDoublyLinkedList();

// ! these are create for testing
function createCircularDoublyLinkedList() {
    
    cirDoubLL.addElementToBeginning(50);
    // cirDoubLL.addElementToBeginning(40);
    // cirDoubLL.addElementToBeginning(30);
    // cirDoubLL.addElementToBeginning(20);
    // cirDoubLL.addElementToBeginning(10);
    // cirDoubLL.addElementToBeginning(30);
    // cirDoubLL.addElementToBeginning(20);
    // cirDoubLL.addElementToBeginning(10);
    // cirDoubLL.addElementToBeginning(30);
    // cirDoubLL.addElementToBeginning(20);
    // cirDoubLL.addElementToBeginning(10);
    // cirDoubLL.addElementToBeginning(30);
    // cirDoubLL.addElementToBeginning(20);
    // cirDoubLL.addElementToBeginning(10);
    // cirDoubLL.addElementToEnd(30);
    
    cirDoubLL.printCircularDoublyLinkedList();
    // console.log(cirDoubLL.copyToArray());

    // cirDoubLL.addElementAt(3, 90);
    // cirDoubLL.printCircularDoublyLinkedList();

    // cirDoubLL.deleteElementFromBeginning();
    // cirDoubLL.printCircularDoublyLinkedList();

    // cirDoubLL.deleteElementFromEnd();
    // cirDoubLL.printCircularDoublyLinkedList();

    cirDoubLL.addElementAt(1, 25);
    cirDoubLL.printCircularDoublyLinkedList();
}
// createCircularDoublyLinkedList();

// button triggers

document.getElementById("addNodeStartBtn").addEventListener("click", function() {
    
    let value = parseInt(document.getElementById("addNodeStart").value);
    cirDoubLL.addElementToBeginning(value);
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("addNodeEndBtn").addEventListener("click", function() {
    
    let value = parseInt(document.getElementById("addNodeEnd").value);
    cirDoubLL.addElementToEnd(value);
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("addNodePositionBtn").addEventListener("click", function() {

    let position = parseInt(document.getElementById("addNodePosition").value);
    let value = parseInt(document.getElementById("addNodeValue").value);
    cirDoubLL.addElementAt(position, value);
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("deleteNodeStartBtn").addEventListener("click", function() {

    cirDoubLL.deleteElementFromBeginning();
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("deleteNodeEndBtn").addEventListener("click", function() {

    cirDoubLL.deleteElementFromEnd();
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("deleteNodePositionBtn").addEventListener("click", function() {

    let position = parseInt(document.getElementById("deleteNodePosition").value);
    cirDoubLL.deleteElementAt(position);
    cirDoubLL.printCircularDoublyLinkedList();

});

document.getElementById("printLinkedListBtn").addEventListener("click", function() {
    cirDoubLL.printCircularDoublyLinkedList();
});

document.getElementById("printArrayBtn").addEventListener("click", function() {
    cirDoubLL.copyToArray();
});