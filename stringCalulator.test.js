const add =  require('./stringCalculator');

describe('String Calculator',()=>{
    test('should return 0 for an empty string',()=>{
        expect(add("")).toBe(0);
    });

    test('should return the number itslef if only one number is provided',()=>{
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two comma seperated numbers',()=>{
        expect(add("5,2")).toBe(7);
    });

    
});