describe('findArrayQuadruplet', function () {
    it('returns an array', function () {
        const output = findArrayQuadruplet([8, 3, 9, 5, 2, 11, 7, 4], 20)
        expect(Array.isArray(output)).toEqual(true)
    });

    it('output array should be sorted', function () {
        const output = findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 9)
        const sortedOutput = output.slice(0).sort((a, b) => a - b)
        expect(output).toEqual(sortedOutput)
    })

    it('should return an empty array if the array length is less than 4', function () {
        const output = findArrayQuadruplet([1, 2, 3], 6)
        expect(output).toEqual([])
    })

    it('should return an empty array if 4 numbers cannot add up to the sum', function () {
        const output = findArrayQuadruplet([1, 2, 3, 4, 5], 36)
        expect(output).toEqual([])
    })

    it('should work with negative numbers as well as positive numbers', function () {
        const output = findArrayQuadruplet([1, 2, 3, 4, -5, 9], 9)
        expect(output).toEqual([ -5, 1, 4, 9 ])
    })

});
