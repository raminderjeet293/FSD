const exp = require("express");
const application = exp();
const PORT = 3001;
application.listen(PORT, (error) => {
  if (!error) {
    console.log("server is running on port" + PORT);
  } else {
    console.log("error in listening request" + error);
  }
  application.get("/", (req, res) => {
    res.send("server is running");
  });
  application.get("/ABC", (req, res) => {
    res.send("<h1>Details of ABC</h1>");
  });
  application.get("/XYZ", (req, res) => {
    res.send("<h1>Details of xyz</h1>");
  });
});
