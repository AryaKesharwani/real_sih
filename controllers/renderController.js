const index = (req, res, next) => {
  res.render("index");
};

const team = (req, res) => {
  res.render("team");
};
const info = (req, res) => {
  res.render("info");
};
const about = (req, res) => {
  res.render("about");
};
const backend = (req, res) => {
  res.render("backend");
};

module.exports = {
  index,
  team,
  info,
  about,
  backend,
};
