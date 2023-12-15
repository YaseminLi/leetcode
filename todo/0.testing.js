const { integerBreak } = require("./343.整数拆分");

const cases = [
  {
    data: 2,
    expect: 1,
  },
  {
    data: 10,
    expect: 36,
  },
  {
    data: 17,
    expect: 486,
  },
];
function unitTest() {
  for (let ca of cases) {
    try {
      let result = integerBreak(ca.data);
      if (result !== ca.expect) {
        console.log("not pass:", ca, result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

unitTest();
