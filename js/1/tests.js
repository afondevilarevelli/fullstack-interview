const assert = require("assert");
const merge = require("./main");
const TestRunner = require("../utils");

const tr = TestRunner();

tr.it("[] & [] => []", () => {
  assert.deepStrictEqual(merge([], []), []);
});

tr.it("[1] & [] => [1]", () => {
  assert.deepStrictEqual(merge([1], []), [1]);
});

tr.it("[] & [1] => [1]", () => {
  assert.deepStrictEqual(merge([], [1]), [1]);
});

tr.it("[1] & [1] => [1]", () => {
  assert.deepStrictEqual(merge([1], [1]), [1]);
});

tr.it("[1, 3] & [1, 5] => [1, 3, 5]", () => {
  assert.deepStrictEqual(merge([1, 3], [1, 5]), [1, 3, 5]);
});

tr.it("[1, 4, 5, 8] & [2, 4, 6, 8] => [1, 2, 4, 5, 6, 8]", () => {
  assert.deepStrictEqual(merge([1, 4, 5, 8], [2, 4, 6, 8]), [1, 2, 4, 5, 6, 8]);
});

tr.it("[1, 2, 4, 6, 6] & [3, 5, 5, 7] => [1, 2, 3, 4, 5, 6, 7]", () => {
  assert.deepStrictEqual(
    merge([1, 2, 4, 6, 6], [3, 5, 5, 7]),
    [1, 2, 3, 4, 5, 6, 7]
  );
});

tr.printResults();
