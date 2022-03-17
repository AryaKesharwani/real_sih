const express = require("express");
const renderController = require("./controllers/renderController");

const app = express();
// setting ejs as templating engine
app.set("view engine", "ejs");
// serving static files
app.use(express.static("public"));

app.get("/", renderController.index);
app.get("/team", renderController.team);
app.get("/info", renderController.info);
app.get("/about", renderController.about);
app.get("/backend", renderController.backend);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
