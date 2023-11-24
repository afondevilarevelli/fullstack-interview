/*
Match activity groups regarding interests

Given an array representing each person and his/her corresponding interests in different subjects (from 0-10),
return a list which contains groups based on similar interests using a given weighted average function.

Person structure:
List of [name, science_interest, political_interest, arts_interest]

Each group:
- the difference between each member´s average must be lesser or equal to "maxRange" (given as input).

NOTES: 
- Greater value for the weighted average has priority.
- Groups with one person should be avoided when possible.

E.g.:
persons: [
  ["Samantha", 6, 7, 8], -> 10
  ["Peter", 2, 9, 4], -> 9.2
  ["Angelica", 4, 7, 3], -> 7.6
  ["Jeremias", 8, 2, 10], -> 7.2
  ["Jason", 3, 1, 10], -> 5.8
  ["Carl", 2, 3, 6], -> 5.2
  ["Roxana", 9, 1, 1], -> 3
  ["Kevin", 4, 1, 3], -> 2.8
  ["Greg", 1, 0, 1], -> 0.6
]
interestAvgFn: (sc, pol, arts) => 0.2*sc + 0.8*pol + 0.4*arts
maxRange: 2

matchGroups(persons, interestAvgFn, maxRange) -> [
  ["Samantha", "Peter"],
  ["Angelica", "Jeremias"],
  ["Jason", "Carl"],
  ["Roxana", "Kevin"],
  ["Greg"]
]
*/

function matchGroups(persons, interestAvgFn, maxRange) {
  // Code here
  return [];
}

module.exports = matchGroups;
