
/** 
 * @param {number} t
 * @return {number}
 * 写一个 RecentCounter 类来计算最近的请求。

它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 ping 数。

任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

保证每次对 ping 的调用都使用比之前更大的 t 值。

输入：inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
输出：[null,1,2,3,3]

链接：https://leetcode-cn.com/problems/number-of-recent-calls

 */

var RecentCounter = function () {
    this.inputs = []
};

RecentCounter.prototype.ping = function (t) {
    if (!t) {
        return null
    }
    this.inputs.push(t)
    while (this.inputs[0]) {
        let ping = this.inputs[0]
        if (ping >= t - 3000 && ping <= t) {
            return this.inputs.length
        } else {
            this.inputs.shift()
        }
    }
    return null
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */