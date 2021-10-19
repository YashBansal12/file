// const { Test } = require('@jest/core');

const {add, subtraction} = require('./operations');

// test("test for string", () => {
//   expect(
//       add(1,1)
//    ).toMatch('HelloYash')
// })

test('test for Addition', () => {
   expect(
       add("1","2")
   ).toBe(3)
})

test('test for Addition', () => {
    expect(
        add(11, 2)
    ).toBe(13)
})

test('test for Addition', () => {
    expect(
        add(2, 4)
    ).toBe(6)
})

test('test for Subtraction', () => {
    expect(
        subtraction(11, 2)
    ).toBe(9)
})

test('test for Subtraction', () => {
    expect(
        subtraction(10, 10)
    ).toBe(0)
})