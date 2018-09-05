function findArrayQuadruplet(arr, s) {
    let n = arr.length
    //if there are fewer than 4 items in arr, by
    //definition no quadruplet exists whose sum i//
    if (n < 4) {
        return []
    }
    arr.sort((a, b) => a - b)

    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            //r stores the complementing sum
            let diff = s - (arr[i] + arr[j])
            //check for sum r in subarray arr[j+1…n-1]
            let low = j + 1
            let high = n - 1

            while (low < high) {
                if (arr[low] + arr[high] < diff) {
                    low++
                }
                else if (arr[low] + arr[high] > diff) {
                    high--
                }
                else {
                    return [arr[i], arr[j], arr[low], arr[high]]
                }
            }
        }
    }
    return []
}
