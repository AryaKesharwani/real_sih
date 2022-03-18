const shell = require("shelljs");
const main2 = (req, res) => {
  shell.exec(
    "~/Desktop/test/real_sih/venv/bin/python3 ~/Desktop/test/real_sih/dep/view_images.py",
    function (code, output) {
      console.log("Exit code:", code);
      // console.log("Program output:", output);
    }
    // { silent: true }
  );
  res.send({ message: "working" });
};

module.exports = {
  main2,
};
