function Node (val) {
  this.val = val
  this.left = null
  this.right = null
}

class BST{
  constructor(){
    this.root=null
  }

  insert(data){
    if(!this.root){
      this.root=new Node(data)
    }else{
      let current=this.root
      let parent
      while (current) {
        parent=current
        if(data<current.val){
          current=current.left
          if(current==null){
              parent.left=new Node(data)
              break
          }
        }else{
          current=current.right
          if(current==null){
            parent.right=new Node(data)
            break
          }
        }
      }
    }
  }
}

const bst = new BST();
bst.insert(13);
bst.insert(21);
bst.insert(15);
bst.insert(29);
bst.insert(3);

module.exports= {BST}

// console.log(bst);