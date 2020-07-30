/**
 *给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。 
 2-1 10-36
 * @param {number} n
 * @return {number}
 */

// 和一样时，数字越接近，乘积越大，所以将数字均分成2个数起，依次计算3个数，4个数，保留最大值即为结果
// 当新拆分的乘积变小时，即可停止
function integerBreak(n) {
    if (n === 2) { return 1 }
    let result = 1
    for (let i = 2; i < n; i++){
        let target=1 //此轮乘积
        const item=Math.floor(n/i)
        const multi=n%i
        for(let j=0;j<i;j++){
           if(j<i-multi){
               target=target*item
           } else{
               target=target*(item+1)
           }
        }
        if(target>result){
            result=target
        }
        if(target<result){
            return result
        }
    }
    return result
}


// 每个数的最大乘积是2，3组合
// 2 1,1
// 3 1,2
// 4 2,2
// 5 2,3
// 6 3,3
// 7 2,2,3
// 8 2,3,3
// 从7开始，n的最大乘积是(n-3)的最大乘积再*3
function integerBreak(n){
    const dp=[1]
    dp[1]=1
    dp[2]=1
    dp[3]=2
    dp[4]=4
    dp[5]=6
    dp[6]=9
    for(let i=7;i<=n;i++){
        dp[i]=dp[i-3]*3
    }
    return dp[n]
}

function unitTest(){
    const cases=[{
      data:2,
      expect:1
    },{
      data:10,
      expect:36
    },{
      data:17,
      expect:486
    },
    {
        data:3,
        expect:2
      }]

    for(let ca of cases){
      try {
        let result=integerBreak(ca.data)
        if(result!==ca.expect){
          console.log('not pass:',ca,result);
        }
      } catch (error) {
        console.log(error);
      }
    }
}

unitTest()
