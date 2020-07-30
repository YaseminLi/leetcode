const {integerBreak=require('./343.整数拆分')
console.log(integerBreak);

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
    }]

    for(let ca of cases){
      try {
        let result=integerBreak(ca.data)
        console.log(result);
        if(result!==ca.expect){
          console.log('not pass:',ca,result);
        }
      } catch (error) {
        console.log(error);
      }
    }
}

unitTest()