function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let currentVal = arr[i]

        for(let j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

module.exports = insertionSort;