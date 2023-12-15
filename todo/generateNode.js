function TreeNode(val,leftNode,rightNode) {
  this.val=val
  this.left = leftNode
  this.right =rightNode
}

const generateTreeNode=(arr)=>{
  const nodeList=[]
  arr.forEach(item=>{
    nodeList.push(item!=null?new TreeNode(item,null,null):null)
  })

for (let index = 0; index*2+1 < nodeList.length; index++) {
  if(!nodeList[index]) continue
  nodeList[index].left=nodeList[index*2+1]
  nodeList[index].right=nodeList[index*2+2]
}
return nodeList[0]

}

console.log(generateTreeNode([1,2,3]));
console.log(generateTreeNode([1,2,null,3]));

module.exports={
  generateTreeNode
}