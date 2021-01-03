const express = require("express");
const app = express();
const port = 3030;
//app.use(bodyParser.json());

//app.use(cors());
app.get("/", (req, res) => {
  res.json("Blog Be");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});