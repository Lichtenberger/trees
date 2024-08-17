// add whatever parameters you deem necessary
function averagePair(nums, ave) {
    let start = 0
    let end = nums.length - 1

    while(start < end) {
        let avg = (nums[start] + nums[end]) / 2
        if (avg === ave) {
            return true
        } else if (avg < num) {
            start++
        } else {
            end--
        }
    }
    return false
}
