function mySetInterval(fn, msec) {
    if (typeof (fn) === "function") {
        var sto = function () {
            setTimeout(function () {
                sto()
                fn()
            }, msec)
        }
        sto()
    }
}
mySetInterval(function () { console.log("test") }, 1000)