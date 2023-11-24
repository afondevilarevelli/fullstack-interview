const assert = require("assert");
const TestRunner = require("../utils");
const isPalindrome = require("./palindrome");

const tr = TestRunner();

tr.it("'' => true", () => {
  assert.deepStrictEqual(isPalindrome(""), true);
});

tr.it("'neuquen' => true", () => {
  assert.deepStrictEqual(isPalindrome("neuquen"), true);
});

tr.it("'madam' => true", () => {
  assert.deepStrictEqual(isPalindrome("madam"), true);
});

tr.it("'nurses run' => true", () => {
  assert.deepStrictEqual(isPalindrome("nurses run"), true);
});

tr.it("'nothing' => false", () => {
  assert.deepStrictEqual(isPalindrome("nothing"), false);
});

tr.it("'mama mia' => false", () => {
  assert.deepStrictEqual(isPalindrome("neuquen"), false);
});

tr.printResults();
