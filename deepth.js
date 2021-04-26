function Node (val, leftNode, rightNode) {
  this.val = val
  this.left = leftNode
  this.right = rightNode
}

// const getDeepth = (root) => {
//   if (!root) return 0;

//   let leftDeep = getDeepth(root.left)
//   let rightDeep = getDeepth(root.right)

//   return Math.max(leftDeep, rightDeep)+1
// }


// const longPath=(root)=>{
//   if (!root) return 0;
//   // const leftDeep = getDeepth(root.left)
//   // const rightDeep = getDeepth(root.right)
//   // const baseRootPath=leftDeep+rightDeep+2



//   const [leftLongPath,leftLength]=longPath(root.left)
//   const leftLongPath=longPath(root.left).length

//   const rightLongPath=longPath(root.right).length

//   const childLongPath=Math.max(leftLongPath,rightLongPath)

//   // return Math.max(childLongPath,baseRootPath)
//   return []
// }

const longPath=(root)=>{
  if (!root) return [0,0];
  // const leftDeep = getDeepth(root.left)
  // const rightDeep = getDeepth(root.right)
  // const baseRootPath=leftDeep+rightDeep+2



  const [leftDepth,leftLength]=longPath(root.left)
  const [rightDepth,rightLength]=longPath(root.right)

  const childLongPath=Math.max(leftLength,rightLength)


  // return Math.max(childLongPath,baseRootPath)
  return [Math.max(leftDepth,rightDepth)+1,Math.max(leftDepth+rightDepth,childLongPath)]
}


const {generateTreeNode}=require('./generateNode')
// const node=generateTreeNode([3,9,20,null,null,15,7])
// console.log(longPath(node));
const node=generateTreeNode([2,null,3,null,4,null,5,null,6])
console.log(longPath(node));