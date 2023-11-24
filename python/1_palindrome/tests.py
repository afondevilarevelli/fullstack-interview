import unittest
from palindrome import is_palindrome


class TestSum(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(is_palindrome(""), True, "'' => True")

    def test_simple_1(self):
        self.assertEqual(is_palindrome("neuquen"), True, "'neuquen' => True")

    def test_simple_2(self):
        self.assertEqual(is_palindrome("madam"), True, "'madam' => True")

    def test_with_space(self):
        self.assertEqual(is_palindrome("nurses run"), True, "'nurses run' => True")

    def test_not_palindrome_simple(self):
        self.assertEqual(is_palindrome("nothing"), False, "'nothing' => False")

    def test_not_palindrome_with_space(self):
        self.assertEqual(is_palindrome("mama mia"), False, "'mama mia' => False")


if __name__ == "__main__":
    unittest.main()
