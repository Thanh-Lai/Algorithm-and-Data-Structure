describe('findComplement', function(){
    it('returns a number', function(){
        let output = findComplement(10)
        expect(typeof output === 'number').toEqual(true)
    });

    it('should return 7 if parameter is 8', function(){
        let output = findComplement(8)
        expect(output).toEqual(7)
    })

    it('should return 9 if parameter is 22', function(){
        let output = findComplement(22)
        expect(output).toEqual(9)
    })
});
