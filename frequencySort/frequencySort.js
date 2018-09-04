let frequencySort = function (s) {
    const counterObj = wordCounter(s)
    let mostFreqArr = []
    let returnStr = ''

    if (s.length < 2) return s
    for (key in counterObj) {
        mostFreqArr.push(counterObj[key])
    }

    mostFreqArr.sort((a, b) => a - b).reverse()
    while (mostFreqArr.length > 0) {
        for (key in counterObj) {
            if (counterObj[key] === Math.max(...mostFreqArr)) {
                let currWord = key.repeat(counterObj[key])
                returnStr += currWord
                mostFreqArr.shift()
            }
        }
    }
    return returnStr
};

function wordCounter(s) {
    const counterObj = {}
    for (let i = 0; i < s.length; i++) {
        let currLetter = s[i]
        if (counterObj[currLetter] === undefined) {
            counterObj[currLetter] = 1
        } else {
            counterObj[currLetter]++
        }
    }
    return counterObj
}
