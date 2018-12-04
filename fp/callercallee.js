function f1() {
    console.log(arguments.callee) // [Function: f1]
    console.log(arguments.callee.caller) // [Function: f2]

}
f1()
f2()