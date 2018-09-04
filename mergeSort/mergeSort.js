function mergeSort(arr) {
    // if arr is 0 or 1 element, return arr cause its already sorted
    if (arr.length <= 1) return arr

    // split arr into two arrs
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)

    // keep splitting the arr recursively until each arr is one element
    let leftSortedArr = mergeSort(leftArr)
    let rightSortedArr = mergeSort(rightArr)
    // after the arr is one element (one element arr is sorted already) merge them
    return merge(leftSortedArr, rightSortedArr)
  }

  // helper function that will merge the two halves of arr
  function merge(leftSortedArr, rightSortedArr) {
    // compare the curr idx of left and right arr and see which one is smaller, push smaller into resultArr and increment that idx
    let lIdx = 0
    let rIdx = 0
    let sortedArr = []
    while (lIdx < leftSortedArr.length && rIdx < rightSortedArr.length) {
      if ( leftSortedArr[lIdx] < rightSortedArr[rIdx]) {
        sortedArr.push(leftSortedArr[lIdx])
        lIdx++
      } else {
        sortedArr.push(rightSortedArr[rIdx])
        rIdx++
      }
    }
    //remaining plart needs to be addred to the result
    return sortedArr.concat(leftSortedArr.slice(lIdx)).concat(rightSortedArr.slice(rIdx))
  }
