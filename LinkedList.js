/*Linked List ADT Specification
    Elements: List elements can be of any type, 
        but we will assume ListElement 
    Structure:  Any mechanism for allowing the insertion, deletion, 
        or modification of a ListElement anywhere in the list. 
        Each ListElement has a unique predecessor and successor.
    Domain: The number of list elements is bounded. A list is considered full if the upper-bound is reached. 
        A list with no elements is considered empty. 

    Operations: There are 18 operations.
    Allocation and Deallocation 
        1. lstCreate 2. lstDispose 
    Checking number of elements 
        1. lstSize 2. lstIsFull 
    Peek Operations 
        1. lstPeek 2. lstPeekPrev 3. lstPeekNext 
    Retrieving values 
        1. lstFirst 2. lstLast 3. lstNext 4. lstPrev 
        5. lstFindKey 6. lstDeleteCurrent 7. lstInsertAfter 
        8. lstInsertBefore 9. lstUpdateCurrent 10.lstHasNext 
        11.lstHasPrev
*/

// basic structure of a node for singly and singly circular linked list
// contains a data element and a next element
class Node{ 
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// this is the class which will create a list of nodes
// so all the methods on list of nodes will reside here
// 
class LinkedList{
    constructor(){
        this.head = null;
        // this.tail = null;
        // this.length = null;
    }


    deleteList(){
        // shallow delete; objects will be deleted by GC
        this.head = null;
    }
    addNode(data){
        // create a node with given data
        let node = new Node(data);
        if(this.head === null){
            this.head = node;
        }else{
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next; // we move the node by pointer
            }
            currentNode.next = node;
            currentNode = null;
        }
        node = null;
        return this.head;  
    }
    deleteNode(data){
        // delete the node with given data
        // two pointers previous node and current node
        // traverse the list and search for the value 
        // if curNode.data = data then 
        // prev.next = current.next  
        let prev = this.head;
        let current = this.head;
        let message = null;
        while(current.next && current.data !== data){
            
            prev = current;
            current = current.next;
            
        }
        if(prev.next === current.next){
            // deleting first node
            this.head = current.next;
            message = "Fist Node:: Node found and deleted."
            console.log(message);
        }else if(current.next === null && current.data === data){
            // delete the last node 
            prev.next = null;
            message = "Last node:: Node found and deleted."
            console.log(message); 
        }else if(current.next && current.data === data){
            // delete a middle node
            prev.next = current.next;
            message = "Middle Node:: Node found and deleted."
            console.log(message);
        }else{
            // node not found with given data
            message ="Node not found:: No node found with the given data."
            console.log(message);
        }

        return message;
    }
    getFirstElement(){
        return this.head;
    }
    getLastElement(){
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        return current;

    }
    getNextElement(){
        return this.head.next;
    }
    getElement(data){
        let current = this.head;
        while(current.next  && current.data !== data){
            current = current.next;
        }
        if(current.data == data){
            return current;
        }else{
            return undefined;
        }
    }
    getSize(){
        let count = 0; 
        let current = this.head;
        while(current.next){
            count++;
            current = current.next;
        }
        return count+1; // accounting for the last element
    }
    // update operations 
    updateCurrentNode(data){
        // update current node.
        this.head.data = data;
        return this.head;
    }

    insertBefore(data,value){
        // a->b->c insbefore(b,x) a->x->b->c
        let current = this.head;
        let prev = this.head;
        let message = null;
        while(current.next && current.data !== data){
            prev = current;
            current = current.next;
        }
        if(current.next === null && current.data !== data){
            // no node with given data found. don't insert data
            message = "Node with given data not found. No data inserted"
            console.log(message);
            return undefined;
        }
        else if(current.data === data  && current.next === prev.next){
            // add before first element
            message ="Node inserted.";
            let node = new Node(value);
            this.head = node;
            node.next = current;
            node = null;
            console.log(message);
            return this.head;
        }else if(current.data === data){
            //add middle or last
            message = "Node inserted";
            let node = new Node(value);
            prev.next = node;
            node.next = current;
            node = null;
            console.log(message);
            return this.head;
        }


    }

    insertAfter(data,value){
        // a->b->c  insAfter(b,x) a->b->x->c
        let current = this.head;
        let prev = this.head;
        let message = null;
        let result = undefined;
        while(current.next && current.data !== data){
            prev = current;
            current = current.next;
        }

        if(current.next === null && current.data !== data){
            message = "Node not inserted. Node with given data not found."
        }else if(current.next === null && current.data === data){
            let node = new Node(value);
            current.next = node;
            node = null;
            result = this.head;
            message = "Node inserted."
        }else if(current.data === data){
            let node = new Node(value);
            node.next = current.next;
            current.next = node;
            node = null;
            result = this.head;
            message = "Node insertd."
        }
        
        console.log(message);
        return result;

    }
    listPrint(){
        console.log("Printing the data in the linked list")
        let currentNode = this.head;
        while(currentNode.next !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        //print the last element
        console.log(currentNode.data);
        currentNode = null;
    }
    
}


// making the list by individual nodes ;
// let x = new Node(1);
// let y = new Node(2);
// x.next = y;
// let z = new Node(3);
// y.next = z; 
// // x -> y -> z 
// // we also  want z to point to x
// z.next = x;
 
// this is the node structure x->y->z->x
// console.log("x.next.data = y.data", x.next.data, y.data);
// console.log("y.next.data = z.data", y.next.data, z.data);
// console.log("z.next.data = x.data", z.next.data, x.data);

// ------------------------------------ 
// making the list

let list = new LinkedList();  

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

list.listPrint();
console.log("----------delete-----------")

list.deleteNode(1);
list.listPrint();
list.deleteNode(5);
list.listPrint();
list.deleteNode(3);
list.listPrint();

list.deleteList();

list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

list.listPrint();
console.log("--------get----")
console.log(list.getFirstElement());
console.log(list.getLastElement());
console.log(list.getNextElement());
console.log(list.getElement(9));
console.log(list.getElement(4));

console.log("-----------insert-----------")

list.insertBefore(3,17);
list.listPrint();
list.insertBefore(1,14);
list.listPrint();
list.insertBefore(5,20);
list.listPrint();
list.insertBefore(0,120);
list.listPrint();

list.insertAfter(14,15);
list.listPrint();
list.insertAfter(3,21);
list.listPrint();
list.insertAfter(5,100);
list.listPrint();
console.log("------------size-----")
console.log(list.getSize())