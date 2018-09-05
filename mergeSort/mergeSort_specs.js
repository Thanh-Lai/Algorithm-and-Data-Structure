describe('mergeSort', function () {

    beforeEach(function() {
        spyOn(window, 'merge').and.callThrough()
    })

    it('returns an array', function () {
        const output = mergeSort([ 8, 3, 9, 5, 2, 11, 7, 4 ])
        expect(Array.isArray(output)).toEqual(true)
    });

    it('must work recursively', function () {
        mergeSort([ 8, 3, 9, 5, 2, 11, 7, 4 ])
        expect(merge.calls.count()).toEqual(7)
    });

    it('should return the original array if array length is less than 2', function () {
        const arr = [ 8 ]
        const output = mergeSort(arr)
        expect(output).toEqual(arr)
        expect(merge.calls.count()).toEqual(0)
    });

    it('should sort the array', function () {
        const output = mergeSort([ 169, 152, 84, 146, 94, 181, 140, 74, 170 ])
        expect(output).toEqual([ 74, 84, 94, 140, 146, 152, 169, 170, 181 ])
        expect(merge.calls.count()).toEqual(8)
    })

    it('should sort negative numbers as well as positive numbers', function () {
        const output = mergeSort([ -54, -37, 79, 13, 1, 94, 67, -66, 43, -64 ])
        expect(output).toEqual([ -66, -64, -54, -37, 1, 13, 43, 67, 79, 94 ])
        expect(merge.calls.count()).toEqual(9)
    })

    it('should work with random arrays', function () {
        const arr = Array.from(Array(Math.floor(Math.random() * 20)), () => Math.floor(Math.random() * 200) - 100)
        const output = mergeSort(arr)
        expect(output).toEqual(arr.sort((a, b) => a - b))
        expect(merge.calls.count()).toEqual(arr.length - 1)
    })
});
