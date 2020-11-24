## Algorithms for main functionalities

1. `addElementToBeginning(element)`
```
create newNode;
if(listIsEmpty) {
    Head = newNode;
    Head.next = Head;
    Head.prev = Head;
}else {
    newNode.next = Head;
    newNode.prev = Head.prev;
    Head.prev.next = newNode;
    Head.prev = newNode;
    Head = newNode;
}
size++;
```
2. `addElementToEnd(element)`
```
create newNode;
if(listIsEmpty) {
    Head = newNode;
    Head.next = Head;
    Head.prev = Head;
}else {
    newNode.next = Head;
    newNode.prev = Head.prev;
    Head.prev.next = newNode;
    Head.prev = newNode;
}
size++;
```
3. `addElementAt(positionToInsert, elementToInsert)`
```
if(positionToInsert is Invalid) {
    prints "positionToInsert doesn't exist";
    return;
}
var position = 1;
var current = Head;
while(current) {
    if(positionToInsert is position) {

        create newNode;

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;

        if(positionToInsert is 1) {
            Head = newNode;
        }

        size++;

        break;

    }else {
        current = current.next;
        position++;
    }
}
```
4. `deleteElementFromBeginning()`
```
if(Head doesn't exist) {
prints "Empty List.";
}else if(this.head.next is Head) {
    prints "Item Deleted: " + Head.element;
    Head = null;

    size--;
}else {
    Head.next.prev = Head.prev;
    Head.prev.next = Head.next;
    prints "Item Deleted: " + Head.element;
    Head = Head.next;

    size--;
}
```
5. `deleteElementFromEnd()`
```
if(Head doesn't exist) {
prints "Empty List.";
}else if(Head.next is Head) {
    prints "Item Deleted: " + Head.element;
    Head = null;

    size--;
}else {
    var current = Head.prev;
    current.prev.next = Head;
    Head.prev = current.prev;
    prints "Item Deleted: " + current.element;

    size--;
}
```
6. `deleteElementAt(positionToDelete)`
```
if(positionToDelete is less than equal to 0 || positionToDelete is greater than size) {
    prints "Element at Position " + positionToDelete + " doesn't exist.";
    return;
}

if(Head doesn't exist) {
    prints "Empty List.";
}
else if(positionToDelete is 1 and size is 1) {
    prints "Item Deleted: " + Head.element;
    Head = null;

    size--;
}
else if(positionToDelete is less than or equal to size) {
    var current = Head;
    var position = 1;

    while(current) {

        if(positionToDelete is position) {
            current.next.prev = current.prev;
            current.prev.next = current.next;
            prints "Item Deleted: " + current.element;

            if(current is Head) {
                Head = current.next;
            }

            size--;

            break;
        }

        current = current.next;
        position++;

    }
}
```
7. `copyToArray()`
```
create an empty array as uniqueArray;

while(current) {
    
    if(uniqueArray.indexOf(current.element) is -1) {
        uniqueArray.push(current.element);
    }

    current = current.next;

    if(current is this.head)
        break;
}

```