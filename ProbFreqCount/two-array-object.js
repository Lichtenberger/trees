// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    return arr1.reduce((obj, cur, idx) => {
        obj[cur] = idx < arr2.length ? arr2[idx] : null
        return obj
    }, {})
}
