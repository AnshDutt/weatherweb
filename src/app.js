const express = require("express");
const path = require(`path`);
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

const viewStaticPath = "/Users/ansh/Desktop/node_POC/weatherWeb/views";
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));

//routing
app.get("/", (req, res) => {
  res.render(`index`);
});
app.get("/about", (req, res) => {
  res.render(`about`);
});
app.get("/weather", (req, res) => {
  res.render(`weather`);
});

//other routing
app.get("*", (req, res) => {
  res.render(`404error`, {
    errorMsg: `Aint got No Nothing here, DAWG!`,
  });
});
app.listen(port, () => {
  console.log(`WEATHER APP UP &  RUNNING ON ${port}`);
});
