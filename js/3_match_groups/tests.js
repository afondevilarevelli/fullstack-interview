const assert = require("assert");
const TestRunner = require("../utils");
const matchGroups = require("./matchGroups");

const tr = TestRunner();

tr.it("Empty persons", () => {
  assert.deepStrictEqual(
    matchGroups([], (a, b, c) => 2, 4),
    []
  );
});

tr.it("Exercise example", () => {
  const persons = [
    ["Samantha", 6, 7, 8], // -> 10
    ["Peter", 2, 9, 4], // -> 9.2
    ["Angelica", 4, 7, 3], // -> 7.6
    ["Jeremias", 8, 2, 10], // -> 7.2
    ["Jason", 3, 1, 10], // -> 5.8
    ["Carl", 2, 3, 6], // -> 5.2
    ["Roxana", 9, 1, 1], // -> 3
    ["Kevin", 4, 1, 3], // -> 2.8
    ["Greg", 1, 0, 1], // -> 0.6
  ];
  const interestAvgFn = (sc, pol, arts) => 0.2 * sc + 0.8 * pol + 0.4 * arts;
  const maxRange = 2;

  assert.deepStrictEqual(matchGroups(persons, interestAvgFn, maxRange), [
    ["Samantha", "Peter"],
    ["Angelica", "Jeremias"],
    ["Jason", "Carl"],
    ["Roxana", "Kevin"],
    ["Greg"],
  ]);
});

tr.it("Single group for greater weighted average", () => {
  const persons = [
    ["Samantha", 6, 7, 8], // -> 10
    ["Jeremias", 8, 2, 10], // -> 7.2
    ["Carl", 2, 3, 6], // -> 5.2
    ["Roxana", 9, 1, 1], // -> 3
    ["Greg", 1, 0, 1], // -> 0.6
  ];
  const interestAvgFn = (sc, pol, arts) => 0.2 * sc + 0.8 * pol + 0.4 * arts;
  const maxRange = 2;

  assert.deepStrictEqual(matchGroups(persons, interestAvgFn, maxRange), [
    ["Samantha"],
    ["Jeremias", "Carl"],
    ["Roxana"],
    ["Greg"],
  ]);
});

tr.printResults();
