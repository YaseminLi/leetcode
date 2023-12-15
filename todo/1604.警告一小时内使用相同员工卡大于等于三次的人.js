/*
 * @lc app=leetcode.cn id=1604 lang=javascript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
// 遍历keyName name 为key  时间list为value
// value按照时间升序
// value遍历，value[i] arr[] 当value[i]和arr[0]时间差一个小时之内时，push进arr；
// 一个小时之外时，判断是否arr.length + 1是否大于等于3，是>记录name，shift arr[0],否> shift arr[0]
// name 排序
var alertNames = function (keyName, keyTime) {
  const obj = {};
  keyTime.forEach((time, index) => {
    const name = keyName[index];
    const time = new Date(`2023/01/01 ${time}`).getTime();
    if (obj[name]) {
      obj[name].push(time);
    } else {
      obj[name] = [time];
    }
  });

  const ret = [];
  Object.keys(obj).forEach((name) => {
    obj[name].sort();

    const timeList = obj[name];
    if (timeList.length >= 3) {
      const temp = [timeList[0]];
      for (let i = 1; i < timeList.length; i += 1) {
        const curTime = timeList[i];
        temp.push(curTime);
        if (curTime - temp[0] >= 60 * 60 * 1000) {
          if (temp.length >= 2) {
            ret.push(name);
            temp.shift();
          }
        }
      }
    }
  });

  return ret.sort();
};
// @lc code=end
console.log(
  alertNames(
    ["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"],
    ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]
  )
); //["daniel"]
console.log(
  alertNames(
    ["alice", "alice", "alice", "bob", "bob", "bob", "bob"],
    ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"]
  )
); //["bob"]
console.log(alertNames(["john", "john", "john"], ["23:58", "23:59", "00:01"])); //[]
console.log(
  alertNames(
    ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"],
    ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]
  )
); //["clare","leslie"]
