function Node(data,left,right){
    this.data=data
    this.left=left
    this.right=right
}

function BST(){
    this.root=null
    this.insert=insert
}

function insert(data){
    let node=new Node(data,null,null)
    // 根节点不存在时，赋给根节点
    if(!this.root){
        this.root=null
    }else{
        let current=this.root
        let parent;
            while(current){
                parent = current;
                //当插入的值小于根节点的值时，将值作为左节点插入
                if(data<current.data) {
                    current = current.left;
                    if(current == null) {
                        parent.left = node;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = node;
                        break;
                    }
                }
            } 
    }
}

