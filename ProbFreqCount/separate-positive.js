// add whatever parameters you deem necessary
function separatePositive(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        if(arr[start] < 0 && arr[end] > 0) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp

            start += 1
            end -= 1
        } else {
            if (arr[start] > 0) start += 1
            else end -= 1
        }
    }
    return arr
}
