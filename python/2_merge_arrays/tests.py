import unittest
from merge_arrays import merge


class TestSum(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(merge([], []), [], "[] & [] => []")

    def test_one_empty(self):
        self.assertEqual(merge([1], []), [1], "[1] & [] => [1]")

    def test_another_empty(self):
        self.assertEqual(merge([], [1]), [1], "[] & [1] => [1]")

    def test_equals_with_one_element(self):
        self.assertEqual(merge([1], [1]), [1], "[1] & [1] => [1]")

    def test_same_lenght_one_equals_element(self):
        self.assertEqual(
            merge([1, 3], [1, 5]), [1, 3, 5], "[1, 3] & [1, 5] => [1, 3, 5]"
        )

    def test_complex_1(self):
        self.assertEqual(
            merge([1, 4, 5, 8], [2, 4, 6, 8]),
            [1, 2, 4, 5, 6, 8],
            "[1, 4, 5, 8] & [2, 4, 6, 8] => [1, 2, 4, 5, 6, 8]",
        )

    def test_complex_2(self):
        self.assertEqual(
            merge([1, 2, 4, 6, 6], [3, 5, 5, 7]),
            [1, 2, 3, 4, 5, 6, 7],
            "[1, 2, 4, 6, 6] & [3, 5, 5, 7] => [1, 2, 3, 4, 5, 6, 7]",
        )


if __name__ == "__main__":
    unittest.main()
