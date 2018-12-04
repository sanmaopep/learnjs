function timeChunk(array, fn, count) {
    var start = 0

    var handle = function () {
        var tempAry = []

        var end = start + count
        end = end > array.length ? array.length : end
        for (var i = start; i < end; i++) {
            tempAry.push(array[i])
        }
        fn(tempAry)
        start = end
        if (end < array.length) {
            setTimeout(handle, 500)
        }
    }

    return function () {
        handle()
    }
}

var testArray = []

for (var i = 0; i < 100; i++) {
    testArray.push(i)
}

var timeChunkTest = timeChunk(testArray, function (arrs) {
    console.log(arrs)
}, 10)
timeChunkTest()
