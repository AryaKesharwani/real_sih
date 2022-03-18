const fs = require("fs");
const path = require("path");
const main = (req, res) => {
  const values = req.body;
  fs.writeFile(
    path.resolve("./data/input.json"),
    JSON.stringify(values),
    function (err) {
      if (err) throw err;
      console.log("complete");
    }
  );
  res.send({ message: "wrote the data" });
};

module.exports = {
  main,
};
