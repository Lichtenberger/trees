// add whatever parameters you deem necessary
function isSubsequence(s1, s2) {
    let s1Idx = 0
    let s2Idx = 0
    if(!str1) return true
    while(str2Idx < str2.length) {
        if(str2[str2Idx] === str1[str1Idx]) {
            str1Idx += 1
        }
        if(str1Idx === str1.length) return true
        str2Idx += 1
    }
    return false
}
