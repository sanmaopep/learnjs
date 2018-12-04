/**
 * Uncurry "this" to make Array.prototype.push usable for arguments
 *  
 * */

Function.prototype.unCurryThis = function () {
    var self = this
    return function () {
        var obj = Array.prototype.shift.call(arguments)
        self.apply(obj, arguments)
    }
}

var push = Array.prototype.push.unCurryThis()
function test() {
    console.log("before", arguments)
    push(arguments, 4)
    console.log("after", arguments)
}
test(1, 2, 3)





