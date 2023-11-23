function TestRunner() {
  var total = 0;
  var withErrors = 0;

  return {
    it: function (desc, fn) {
      try {
        fn();
        console.log("\x1b[32m%s\x1b[0m", `\u2714 ${desc}`);
      } catch (error) {
        console.log("\n");
        console.log("\x1b[31m%s\x1b[0m", `\u2718 ${desc}`);
        console.error(error.message.replace("\n", " "));
        withErrors++;
      } finally {
        total++;
      }
    },

    printResults: function () {
      const passed = total - withErrors;
      console.log("\n" + passed + "/" + total + " PASSED");
    },
  };
}

module.exports = TestRunner;
