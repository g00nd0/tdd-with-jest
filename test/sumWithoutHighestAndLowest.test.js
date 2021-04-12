const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

test("array should return 16", function () {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

test("array should return 5", function () {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test("array should return 16", function () {
  expect(sumWithoutHighestAndLowest([6, 10, 2, 1, 1, 8, 10])).toEqual(16);
});
