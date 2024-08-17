// add whatever parameters you deem necessary
function constructNote(s1, s2) {
    let letters = {}
    let mess = {}

    for(let char of letters) {
        letters[char] = ++letters[char] || 1
    }

    for(let char of mess) {
        mess[char] = ++mess[char] || 1
    }

    for (let char in mess) {
        if(!letters[char]) {
            return false
        }
        if(mess[char] > letters[char]) {
            return false
        }
    }
    return true
}
