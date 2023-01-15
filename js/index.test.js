// variables

const hello = require("../index")

console.log(hello);

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    })
})
