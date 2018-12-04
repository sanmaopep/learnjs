Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(this, arguments)
        return self.apply(this, arguments)
    }
}

Function.prototype.after = function (fn) {
    var self = this
    return function () {
        var ret = self.apply(this, arguments)
        fn.apply(this, arguments)
        return ret
    }
}

var func = function () {
    console.log(arguments[1])
};

func = func.before(function () {
    console.log(arguments[0])
}).after(function () {
    console.log(arguments[2])
});

func(1, 2, 3)