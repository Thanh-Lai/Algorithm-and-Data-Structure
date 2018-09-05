describe('frequencySort', function(){
    it('returns a string', function(){
        const output = frequencySort('apple')
        expect(typeof output === 'string').toEqual(true)
    });

    it('should return "pplea" if parameter is "apple"', function(){
        const output = frequencySort('apple')
        expect(output).toEqual('pplea')
    })

    it('should return "bbAa" if parameter is "Aabb"', function(){
        const output = frequencySort('Aabb')
        expect(output).toEqual('bbAa')
    })

    it('should return "hhanT" if parameter is "Thanh"', function(){
        const output = frequencySort('Thanh')
        expect(output).toEqual('hhanT')
    })
});
