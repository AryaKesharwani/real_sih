const express = require("express");
const config = require("./config");
const renderController = require("./controllers/renderController");
const dataController = require("./controllers/dataController");
const app = express();
// setting ejs as templating engine
app.set("view engine", "ejs");
// serving static files
app.use(express.static("public"));
// middleware for json
app.use(express.json());

app.get("/", renderController.index);
app.get("/team", renderController.team);
app.get("/info", renderController.info);
app.get("/about", renderController.about);
app.get("/backend", renderController.backend);

app.post("/api/sendData", dataController.main2);

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
