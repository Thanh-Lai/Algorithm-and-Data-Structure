function flip(arr, k) {
    let tmp;
    for (let i = 0; i < Math.floor(k + 1) / 2; i++) {
        tmp = arr[i]
        arr[i] = arr[k - i]
        arr[k - i] = tmp
    }
}

function pancakeSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let maxIndex = findMaxIndexInPrefix(arr, i)
        flip(arr, maxIndex)
        flip(arr, i)
    }
    return arr
}

function findMaxIndexInPrefix(arr, k) {
    let ans = 0
    for (let i = 0; i <= k; i++) {
        if (arr[i] > arr[ans]) ans = i
    }
    return ans
}