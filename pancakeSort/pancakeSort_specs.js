describe('pancakeSort', function () {
    it('returns an array', function () {
        const output = pancakeSort([8, 3, 9, 5, 2, 11, 7, 4], 20)
        expect(Array.isArray(output)).toEqual(true)
    });

    it('output array should be sorted', function () {
        const output = pancakeSort([2, 7, 4, 0, 9, 5, 1, 3], 9)
        const sortedOutput = output.slice(0).sort((a, b) => a - b)
        expect(output).toEqual(sortedOutput)
    })

    it('should sort negative numbers as well as positive numbers', function () {
        const output = pancakeSort([ -54, -37, 79, 13, 1, 94, 67, -66, 43, -64 ])
        expect(output).toEqual([ -66, -64, -54, -37, 1, 13, 43, 67, 79, 94 ])
    })

    it('should work with random arrays', function () {
        const arr = Array.from(Array(Math.floor(Math.random() * 20)), () => Math.floor(Math.random() * 200) - 100)
        const output = pancakeSort(arr)
        expect(output).toEqual(arr.sort((a, b) => a - b))
    })

});
