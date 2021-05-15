/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
  const samble=['+','-','*']
 //存储计算过的表达式
 const map=new Map()

 // 计算字符串运算结果
 const computeStr=expression=>{
    //  if(expression.length===1) return [expression]
     if(map.has(expression)) return map.get(expression)

    let ret=[]
    let haveSamble=false
     for(let i=0;i<expression.length;i+=1){
         if(samble.includes(expression[i])){
           haveSamble=true
             const leftRet=computeStr(expression.slice(0,i))
             const rightRet=computeStr(expression.slice(i+1))
             ret=ret.concat(computeTwoPart(leftRet,rightRet,expression[i]))
         }
     }
     if(!haveSamble) ret=[expression-0]
     map.set(expression,ret)
     return ret
 }
 const computeTwoPart=(left,right,samble)=>{
     const result=[]
     for(let i=0;i<left.length;i+=1){
         for(let j=0;j<right.length;j+=1){
            if(samble==='+')result.push(left[i]+right[j])
            if(samble==='-')result.push(left[i]-right[j])
            if(samble==='*')result.push(left[i]*right[j])
         }
     }
     return result
 }

 return computeStr(expression)
};

console.log(diffWaysToCompute( "2*3-4*5"));
console.log(diffWaysToCompute(  "2-1-1"));
console.log(diffWaysToCompute(  "11"));