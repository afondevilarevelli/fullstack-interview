import unittest
from match_groups import match_groups


class TestSum(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(match_groups([], lambda a, b, c: 2, 4), [], "Empty persons")

    def test_exercise_example(self):
        persons = [
            ["Samantha", 6, 7, 8],  # -> 10
            ["Peter", 2, 9, 4],  # -> 9.2
            ["Angelica", 4, 7, 3],  # -> 7.6
            ["Jeremias", 8, 2, 10],  # -> 7.2
            ["Jason", 3, 1, 10],  # -> 5.8
            ["Carl", 2, 3, 6],  # -> 5.2
            ["Roxana", 9, 1, 1],  # -> 3
            ["Kevin", 4, 1, 3],  # -> 2.8
            ["Greg", 1, 0, 1],  # -> 0.6
        ]
        interest_avg_fn = lambda sc, pol, arts: 0.2 * sc + 0.8 * pol + 0.4 * arts
        max_range = 2
        self.assertEqual(
            match_groups(persons, interest_avg_fn, max_range),
            [
                ["Samantha", "Peter"],
                ["Angelica", "Jeremias"],
                ["Jason", "Carl"],
                ["Roxana", "Kevin"],
                ["Greg"],
            ],
            "Exercise example",
        )

    def test_single_group_for_greater_weighted_avg(self):
        persons = [
            ["Samantha", 6, 7, 8],  # -> 10
            ["Jeremias", 8, 2, 10],  # -> 7.2
            ["Carl", 2, 3, 6],  # -> 5.2
            ["Roxana", 9, 1, 1],  # -> 3
            ["Greg", 1, 0, 1],  # -> 0.6
        ]
        interest_avg_fn = lambda sc, pol, arts: 0.2 * sc + 0.8 * pol + 0.4 * arts
        max_range = 2
        self.assertEqual(
            match_groups(persons, interest_avg_fn, max_range),
            [
                ["Samantha"],
                ["Jeremias", "Carl"],
                ["Roxana"],
                ["Greg"],
            ],
            "Single group for greater weighted average",
        )


if __name__ == "__main__":
    unittest.main()
