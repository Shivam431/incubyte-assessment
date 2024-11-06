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

    test('should return the sum of multiple comma seperated numbers',()=>{
        expect(add("5,2,3,3")).toBe(13);
    });

    test('should support different delimiters',()=>{
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n4|5|6")).toBe(15);

    });

    test('should throw exception if input is negative',()=>{
        expect(() => {
            add("1,-2,3,-4");
          }).toThrow("negative numbers not allowed: -2, -4");
    });
  
});