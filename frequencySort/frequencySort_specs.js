describe('frequencySort', function(){
    it('returns a string', function(){
        let output = frequencySort('apple')
        expect(typeof output === 'string').toEqual(true)
    });

    it('should return "pplea" if parameter is "apple"', function(){
        let output = frequencySort('apple')
        expect(output).toEqual('pplea')
    })

    it('should return "bbAa" if parameter is "Aabb"', function(){
        let output = frequencySort('Aabb')
        expect(output).toEqual('bbAa')
    })

    it('should return "hhanT" if parameter is "Thanh"', function(){
        let output = frequencySort('Thanh')
        expect(output).toEqual('hhanT')
    })
});
