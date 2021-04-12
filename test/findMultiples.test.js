const findMultiples = require("../src/findMultiples");

test("array should return [2,4,6]", function () {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});

test("array should return [ 3, 6, 9, 12, 15, 18 ]", function () {
  expect(findMultiples(3, 18)).toEqual([3, 6, 9, 12, 15, 18]);
});

test("array should return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]", function () {
  expect(findMultiples(5, 59)).toEqual([
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
  ]);
});

// write test cases to ensure findMultiples() works as expected
