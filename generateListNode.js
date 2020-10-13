function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

 class generateListNode{
   constructor(){
      this.head=null
   }
   insert(val){
      if(!this.head){
        this.head=new ListNode(val)
        return
      }
      let head=this.head
      while(head){
        if(!head.next){
          head.next=new ListNode(val)
          return
        }
        head=head.next
      }
   }
 }

 const list=new generateListNode()
 list.insert(1)
 list.insert(2)
 list.insert(3)
 list.insert(4)

//  console.log(list);

 module.exports={generateListNode}