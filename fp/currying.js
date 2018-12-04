var cost = (function () {
    var monthlyCost = 0
    return function () {
        if (arguments.length == 0) {
            return monthlyCost
        } else {
            monthlyCost += arguments[0]
        }
    }
})()


cost(100); // 第 1 天开销
cost(200); // 第 2 天开销
cost(300); // 第 3 天开销
console.log(cost()); // 输出： 600