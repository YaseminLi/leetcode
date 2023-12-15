/*
 * @lc app=leetcode.cn id=2383 lang=javascript
 *
 * [2383] 赢得比赛需要的最少训练时长
 */

// @lc code=start
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
// 能量值：对手值求和，训练+initialEnergy=对手值和+1
// 经验值：对手最大值。训练+initialExperience+最大值前的和=对手最大值+1
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
//     const totalEnergy=energy.reduce((total,cur)=>total+cur,1)
//     const trainEnergy=totalEnergy-initialEnergy

//     const maxExperience=Math.max(...experience)
//     let totalExperience=0
//     for(let i=0;i<experience.length;i+=1){
//         if(experience[i]===maxExperience){
//             break
//         }else{
//             totalExperience+=experience[i]
//         }
//     }
//     const trainExperience=maxExperience+1-totalExperience-initialExperience

// console.log(totalEnergy,trainEnergy,maxExperience,totalExperience,trainExperience);

//     return trainEnergy+(trainExperience<0?0:trainExperience)
let sum = 0;
for (const e of energy) {
    sum += e;
}
let trainingHours = initialEnergy > sum ? 0 : sum + 1 - initialEnergy;
for (const e of experience) {
    if (initialExperience <= e) {
        trainingHours += 1 + (e - initialExperience);
        initialExperience = 2 * e + 1;
    } else {
        initialExperience += e;
    }
}
return trainingHours;
};
// @lc code=end

console.log(minNumberOfHours(5,3,[1,4,3,2],[2,6,3,1]));//8
console.log(minNumberOfHours(2,4,[1],[3]));//0
console.log(minNumberOfHours(30,78,[24,91,63,38,31,63,22,35,91,54,88,46,80,14,12,19,57,92],[18,43,36,88,84,21,82,54,61,80,68,54,75,27,99,14,86,95]));//891
console.log(minNumberOfHours(94,70,[58,47,100,71,47,6,92,82,35,16,50,15,42,5,2,45,22],[77,83,99,76,75,66,58,84,44,98,70,41,48,7,10,61,28]));//650

