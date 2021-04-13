const account = require("../src/account");

test("balance should return 500", function () {
  expect(account.getBalance()).toEqual(500);
});

test("balance should return 1500", function () {
  account.deposit(1000);
  expect(account.getBalance()).toEqual(1500);
});

test("balance should return 700", function () {
  account.withdraw(800);
  expect(account.getBalance()).toEqual(700);
});
