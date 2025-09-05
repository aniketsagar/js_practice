// Object orianted programming is a paradigm where 
// the code is structured so that the data and the code 
// are bound togeather.
// Usually this is accomplished by creating a user defined data structure
// called a class with both the data and the allowed functions of that data 
// defined in that class. 
// There is often an interfacing layer which is used to define an abstraction to the api

function fNode(data,next){
    this.data = data;
    this.next = null;
}

function fLinkedList(head = null){
    this.head = head; 
}


class Node{
    constructor(data){ 
        this.data = data;  
        this.next = null;
    }

}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
}


