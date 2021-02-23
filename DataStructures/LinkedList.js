class Node{
    data;
    nextNode;
    constructor(num){
        this.data=num;
        this.nextNode=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(num){
       const newNode=new Node(num);
        newNode.nextNode=this.head;
        this.head=newNode;
    }

    removeFirst(){
        if(this.head){
            var removedNode=this.head;
            this.head=this.head.nextNode;
            return removedNode;
        }
        return null;
    }

    printList(){
        var output='HEAD: ';
        var tempNode=this.head;

        while(tempNode){
            output=output+tempNode.data+'-->';
            tempNode=tempNode.nextNode;
        }
        output=output+'null';
        console.log(output);
    }
}

myLinkedlist=new LinkedList();
myLinkedlist.addFirst(3);
myLinkedlist.addFirst(13);
myLinkedlist.addFirst(332);
myLinkedlist.addFirst(5);
console.log(myLinkedlist.removeFirst())
myLinkedlist.printList();
