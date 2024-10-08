const { arrayBuffer } = require("stream/consumers");

function bubbleSort(arr) {
    let swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

module.exports = bubbleSort;