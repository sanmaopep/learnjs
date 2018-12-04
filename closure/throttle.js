function throttle(fn, interval) {
    var mutex = false,
        firstTime = true

    return function () {
        _arguments = arguments
        _self = this

        if (firstTime) {
            firstTime = false
            fn.apply(_self, _arguments)
        }

        if (!mutex) {
            mutex = true

            setTimeout(function () {
                fn.apply(_self, _arguments)
                mutex = false
            }, interval)
        }
    }
}

function test(a) {
    console.log("fire", a)
}

throttleTest = throttle(test, 500)
for (var i = 0; i < 20; i++) {
    (function (i) {
        setTimeout(function () {
            throttleTest(i * 100)
        }, i * 100)
    })(i)
}

