var multi = (function () {
    var cache = {}
    function cal() {
        var res = 1
        for (var i = 0; i < arguments.length; i++) {
            res *= arguments[i]
        }
        return res
    }
    return function () {
        var args = Array.prototype.join.call(arguments, ",")
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = cal.apply(null, arguments)
    }
})()

console.log(multi(1, 2, 3))
console.log(multi(2, 2))
