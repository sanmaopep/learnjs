Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(self, self.arguments)
        self.apply(self, self.arguments)
    }
}

Function.prototype.after = function (fn) {
    var self = this
    return function () {
        self.apply(self, self.arguments)
        fn.apply(self, self.arguments)
    }
}

var func = function () {
    console.log(arguments)
    console.log(arguments[1])
};

func = func.before(function () {
    console.log(arguments[0])
}).after(function () {
    console.log(arguments[2])
});

func(1, 2, 3)