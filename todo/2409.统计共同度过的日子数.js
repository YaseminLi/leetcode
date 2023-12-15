/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  const arrive = Math.max(
    arriveAlice.replace("-", ""),
    arriveBob.replace("-", "")
  );
  const leave = Math.min(
    leaveAlice.replace("-", ""),
    leaveBob.replace("-", "")
  );
  if (leave < arrive) {
    return 0;
  }

  const arriveMonth = Math.floor(arrive / 100);
  const arriveDate = arrive % 100;
  const leaveMonth = Math.floor(leave / 100);
  const leaveDate = leave % 100;
  if (arriveMonth === leaveMonth) {
    // 在同一个月
    return leaveDate - arriveDate + 1;
  }
  console.log(arriveMonth, arriveDate, leaveMonth, leaveDate);
  // 不在同一个月
  const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total = 0;
  for (
    let startMonth = arriveMonth;
    startMonth <= leaveMonth;
    startMonth += 1
  ) {
    if (startMonth === arriveMonth) {
      total += dayList[startMonth - 1] - arriveDate + 1;
    } else if (startMonth === leaveMonth) {
      total += leaveDate;
    } else {
      total += dayList[startMonth - 1];
    }
  }
  return total;
};
// @lc code=end
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); //3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); //0
console.log(countDaysTogether("09-01", "10-19", "06-19", "10-20")); //49 901-10-19
console.log(countDaysTogether("03-05", "07-14", "04-14", "09-21")); //92
